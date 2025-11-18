import { SURVEY_QUESTIONS } from "../data/surveyQuestions";

// ---------------------------------------------
// 1. CALCULATE READINESS SCORE (0–100)
// ---------------------------------------------
export function calculateScore(answers) {
  // Only score safety, memory, social, caregiver
  const scoredQuestions = SURVEY_QUESTIONS.filter(
    (q) => q.section !== "timeline"
  );

  const maxScore = scoredQuestions.length * 4; // highest possible score
  let total = 0;

  scoredQuestions.forEach((q) => {
    const val = answers[q.id] ?? 0;
    total += val;
  });

  return Math.round((total / maxScore) * 100); // convert to percentage
}

// ---------------------------------------------
// 2. INTERPRET READINESS BAND
// ---------------------------------------------
export function interpretScore(score) {
  if (score <= 30) return "low";
  if (score <= 60) return "emerging";
  if (score <= 80) return "significant";
  return "urgent";
}

// ---------------------------------------------
// 3. DETERMINE CARE LEVEL (IL / AL / MC)
// ---------------------------------------------
export function determineCareLevel(answers) {
  let il = 0; // independent living indicators
  let al = 0; // assisted living indicators
  let mc = 0; // memory care indicators

  for (const q of SURVEY_QUESTIONS) {
    const val = answers[q.id] ?? 0;

    // IL-related: social engagement, loneliness
    if (q.section === "social") {
      il += val;
    }

    // AL-related: safety, mobility, caregiver stress
    if (q.section === "safety" || q.section === "caregiver") {
      al += val;
    }

    // MC-related: memory loss, confusion, wandering
    if (q.section === "memory") {
      mc += val;
    }
  }

  const totalScore = il + al + mc || 1;

  const ilPct = il / totalScore;
  const alPct = al / totalScore;
  const mcPct = mc / totalScore;

  if (mcPct >= 0.4) return "MC"; // heavily memory-related issues
  if (alPct >= 0.4) return "AL"; // safety/caregiver issues dominant
  return "IL"; // otherwise independent living level
}

// ---------------------------------------------
// 4. FINAL RESULTS OBJECT
// ---------------------------------------------
export function buildCareRecommendation(answers) {
  const readinessScore = calculateScore(answers);
  const readinessBand = interpretScore(readinessScore);
  const recommendedCareLevel = determineCareLevel(answers);

  return {
    readinessScore,       // 0–100
    readinessBand,        // "low", "emerging", "significant", "urgent"
    recommendedCareLevel, // "IL", "AL", "MC"
  };
}
