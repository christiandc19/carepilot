import { useSurveyStore } from "../store/surveyStore";
import { useNavigate } from "react-router-dom";

export default function ResultView() {
  const navigate = useNavigate();
  const result = useSurveyStore((state) => state.result);
  const reset = useSurveyStore((state) => state.reset);

  if (!result) {
    // If user comes to /results directly, redirect to start
    navigate("/");
    return null;
  }

  const { readinessScore, readinessBand, recommendedCareLevel } = result;

  // --------------- Band Descriptions ----------------
  const bandDescriptions = {
    low: "Your loved one currently shows few indicators that suggest an immediate need for senior living. However, it's still helpful to stay informed and plan ahead.",
    emerging:
      "You’re noticing early indicators that senior living may become beneficial soon. Now is a great time to begin exploring options and having conversations.",
    significant:
      "Your results show several meaningful indicators that suggest senior living could strongly improve safety, well-being, and support.",
    urgent:
      "There are multiple urgent indicators suggesting a high need for support. We recommend reaching out to a senior living advisor as soon as possible.",
  };

  // --------------- Care Level Descriptions ----------------
  const careDescriptions = {
    IL: "Independent Living is ideal for adults who can live independently but would benefit from maintenance-free living, social engagement, and community amenities.",
    AL: "Assisted Living provides support with daily activities such as meals, bathing, medications, and mobility — perfect when independence is declining.",
    MC: "Memory Care is a specialized, secure environment designed for individuals with Alzheimer’s or dementia, providing structured routines and trained support.",
  };

  // Convert care level to readable form
  const careLabels = {
    IL: "Independent Living",
    AL: "Assisted Living",
    MC: "Memory Care",
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      {/* Title */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-semibold text-gray-900">
          Your Personalized Care Recommendation
        </h1>
        <p className="text-gray-600">
          Based on your responses, here’s what we found.
        </p>
      </div>

      {/* Score Card */}
      <div className="p-6 rounded-xl bg-teal-50 border border-teal-200 text-center">
        <p className="text-sm text-gray-600">Readiness Score</p>
        <p className="text-5xl font-bold text-teal-700">{readinessScore}</p>
        <p className="mt-2 text-teal-800 font-medium capitalize">
          {readinessBand} need
        </p>
        <p className="text-gray-700 mt-3">
          {bandDescriptions[readinessBand]}
        </p>
      </div>

      {/* Care Level Recommendation */}
      <div className="p-6 rounded-xl bg-white border shadow-sm">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Recommended Care Level
        </h2>
        <p className="text-teal-700 font-semibold text-lg mb-1">
          {careLabels[recommendedCareLevel]}
        </p>
        <p className="text-gray-700">
          {careDescriptions[recommendedCareLevel]}
        </p>
      </div>

      {/* CTA Section */}
      <div className="p-6 rounded-xl bg-gray-50 border text-center space-y-3">
        <h3 className="text-lg font-semibold">What Happens Next?</h3>
        <p className="text-gray-600">
          Our team can guide you through next steps and help you explore the best fit
          based on your loved one’s needs.
        </p>
        <button className="w-full bg-teal-600 text-white py-3 rounded-xl font-medium hover:bg-teal-700 transition">
          Talk to Our Team
        </button>
      </div>

      {/* Retake */}
      <button
        onClick={() => {
          reset();
          navigate("/");
        }}
        className="w-full text-gray-600 underline text-sm"
      >
        Retake the Assessment
      </button>
    </div>
  );
}
