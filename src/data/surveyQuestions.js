export const SURVEY_QUESTIONS = [
    // --- SAFETY & DAILY LIVING ---
    {
      id: "q1_safety_home",
      order: 1,
      section: "safety",
      text: "How confident are you in their safety when they are home alone?",
      options: [
        { label: "Very confident", value: 0 },
        { label: "Somewhat confident", value: 1 },
        { label: "Occasionally concerned", value: 2 },
        { label: "Frequently concerned", value: 3 },
        { label: "Not confident at all", value: 4 }
      ]
    },
    {
      id: "q2_daily_tasks",
      order: 2,
      section: "safety",
      text: "How well are they managing daily tasks such as cooking, cleaning, and taking medications?",
      options: [
        { label: "Very well", value: 0 },
        { label: "Mostly well", value: 1 },
        { label: "Some difficulty", value: 2 },
        { label: "Frequent difficulty", value: 3 },
        { label: "They cannot manage these tasks reliably", value: 4 }
      ]
    },
    {
      id: "q3_mobility_falls",
      order: 3,
      section: "safety",
      text: "Have there been any recent falls, balance issues, or mobility concerns?",
      options: [
        { label: "No concerns at all", value: 0 },
        { label: "Mild concerns", value: 1 },
        { label: "Some noticeable issues", value: 2 },
        { label: "Frequent issues or minor falls", value: 3 },
        { label: "Multiple falls or major concerns", value: 4 }
      ]
    },
  
    // --- MEMORY & COGNITIVE ---
    {
      id: "q4_memory_recent",
      order: 4,
      section: "memory",
      text: "How would you describe their recent memory (appointments, conversations, daily tasks)?",
      options: [
        { label: "Very reliable", value: 0 },
        { label: "Mostly reliable", value: 1 },
        { label: "Sometimes forgetful", value: 2 },
        { label: "Often forgetful", value: 3 },
        { label: "Frequently confused or disoriented", value: 4 }
      ]
    },
    {
      id: "q5_judgment",
      order: 5,
      section: "memory",
      text: "Have you noticed any changes in judgment, decision-making, or handling finances?",
      options: [
        { label: "No changes", value: 0 },
        { label: "Minor changes", value: 1 },
        { label: "Some concerns", value: 2 },
        { label: "Significant concerns", value: 3 },
        { label: "Major, ongoing concerns", value: 4 }
      ]
    },
    {
      id: "q6_wandering",
      order: 6,
      section: "memory",
      text: "Have they shown signs of wandering, getting lost, or confusion about where they are?",
      options: [
        { label: "Never", value: 0 },
        { label: "Rarely", value: 1 },
        { label: "Occasionally", value: 2 },
        { label: "Frequently", value: 3 },
        { label: "Very often or severe", value: 4 }
      ]
    },
  
    // --- SOCIAL & EMOTIONAL ---
    {
      id: "q7_social_isolation",
      order: 7,
      section: "social",
      text: "How socially engaged are they on a weekly basis?",
      options: [
        { label: "Very engaged", value: 0 },
        { label: "Somewhat engaged", value: 1 },
        { label: "Occasionally engaged", value: 2 },
        { label: "Rarely engaged", value: 3 },
        { label: "Not engaged at all", value: 4 }
      ]
    },
    {
      id: "q8_mood_changes",
      order: 8,
      section: "social",
      text: "Have you noticed any changes in mood, motivation, or emotional wellbeing?",
      options: [
        { label: "No changes", value: 0 },
        { label: "Minor changes", value: 1 },
        { label: "Occasional changes", value: 2 },
        { label: "Frequent changes", value: 3 },
        { label: "Significant or ongoing changes", value: 4 }
      ]
    },
    {
      id: "q9_loneliness",
      order: 9,
      section: "social",
      text: "Do they show signs of loneliness or lack of daily structure?",
      options: [
        { label: "Never", value: 0 },
        { label: "Rarely", value: 1 },
        { label: "Sometimes", value: 2 },
        { label: "Often", value: 3 },
        { label: "Very often", value: 4 }
      ]
    },
  
    // --- CAREGIVER STRESS ---
    {
      id: "q10_caregiver_stress",
      order: 10,
      section: "caregiver",
      text: "How would you rate your own stress or concern about their daily wellbeing?",
      options: [
        { label: "Not stressed", value: 0 },
        { label: "A little stressed", value: 1 },
        { label: "Somewhat stressed", value: 2 },
        { label: "Often stressed", value: 3 },
        { label: "Very stressed or overwhelmed", value: 4 }
      ]
    },
    {
      id: "q11_caregiving_time",
      order: 11,
      section: "caregiver",
      text: "How much time do you spend supporting or checking on them each week?",
      options: [
        { label: "0–1 hours", value: 0 },
        { label: "2–3 hours", value: 1 },
        { label: "4–6 hours", value: 2 },
        { label: "7–10 hours", value: 3 },
        { label: "More than 10 hours", value: 4 }
      ]
    },
  
    // --- FUTURE PLANNING / TIMELINE ---
    {
      id: "q12_crisis_risk",
      order: 12,
      section: "safety",
      text: "How likely do you believe it is that a health or safety crisis could happen in the next 6–12 months?",
      options: [
        { label: "Very unlikely", value: 0 },
        { label: "Unlikely", value: 1 },
        { label: "Somewhat likely", value: 2 },
        { label: "Likely", value: 3 },
        { label: "Very likely", value: 4 }
      ]
    },
    {
      id: "q13_family_stability",
      order: 13,
      section: "caregiver",
      text: "How sustainable is the current support arrangement for your loved one?",
      options: [
        { label: "Highly sustainable", value: 0 },
        { label: "Mostly sustainable", value: 1 },
        { label: "Somewhat sustainable", value: 2 },
        { label: "Barely sustainable", value: 3 },
        { label: "Not sustainable at all", value: 4 }
      ]
    },
  
    // --- TIMELINE READINESS (NOT SCORED FOR CARE LEVEL) ---
    {
      id: "q14_timeline",
      order: 14,
      section: "timeline",
      text: "How soon do you think your family may consider senior living options?",
      options: [
        { label: "Not anytime soon", value: 0 },
        { label: "Maybe within a year", value: 1 },
        { label: "Within the next 6 months", value: 2 },
        { label: "Within the next 1–3 months", value: 3 },
        { label: "As soon as possible", value: 4 }
      ]
    },
    {
      id: "q15_readiness_feelings",
      order: 15,
      section: "timeline",
      text: "Overall, how confident are you feeling about exploring senior living?",
      options: [
        { label: "Very confident", value: 0 },
        { label: "Somewhat confident", value: 1 },
        { label: "Unsure", value: 2 },
        { label: "Hesitant", value: 3 },
        { label: "Overwhelmed", value: 4 }
      ]
    }
  ];
  