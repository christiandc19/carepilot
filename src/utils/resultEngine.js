export function buildCareRecommendation(answers) {
    let score = 0;
  
    // Simple scoring system example:
    for (const key in answers) {
      const val = answers[key];
  
      if (typeof val === "number") {
        score += val;
      }
    }
  
    // Normalize score into a percentage
    const readinessScore = Math.round((score / (Object.keys(answers).length * 5)) * 100);
  
    // Determine care level
    let recommendedCareLevel = "IL"; // Independent Living (default)
  
    if (readinessScore > 30) recommendedCareLevel = "AL"; // Assisted Living
    if (readinessScore > 60) recommendedCareLevel = "MC"; // Memory Care
  
    return {
      readinessScore,
      recommendedCareLevel,
    };
  }
  