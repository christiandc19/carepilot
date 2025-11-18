import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSurveyStore } from "../store/surveyStore";
import Header from "./Header";

export default function LeadCaptureForm() {
  const navigate = useNavigate();

  const computeResult = useSurveyStore((state) => state.computeResult);
  const setLead = useSurveyStore((state) => state.setLead);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    relationship: "",
  });

  const [errors, setErrors] = useState({});

  // -------------------------------
  // Update form fields
  // -------------------------------
  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // -------------------------------
  // Validate required fields
  // -------------------------------
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.relationship.trim())
      newErrors.relationship = "Relationship is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // -------------------------------
  // CRM / Webhook sender
  // -------------------------------
  async function sendLeadToCRM(lead, result) {
    try {
      // ⭐ Use your Zapier / Make webhook here:
      const WEBHOOK_URL = "https://hooks.zapier.com/hooks/catch/YOUR_WEBHOOK_ID";

      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...lead,
          ...result,
          submittedAt: new Date().toISOString(),
        }),
      });

      console.log("Lead + result sent to CRM");
    } catch (err) {
      console.error("CRM error:", err);
    }
  }

  // -------------------------------
  // FORM SUBMIT HANDLER
  // -------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Save lead globally
    setLead(form);

    // Compute the survey result
    computeResult();

    // Grab the computed result from Zustand
    const result = useSurveyStore.getState().result;

    // Send to CRM webhook
    await sendLeadToCRM({
        ...form,
        community,
        theme,
        source,
        color
      }, result);
      
    // Redirect to results screen
    navigate("/results");
  };

  return (
    <>
      <Header />

      <div className="max-w-xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold text-gray-900 mb-3">
          Almost Done!
        </h1>
        <p className="text-gray-600 mb-8">
          Enter your information below to view your personalized CarePilot
          assessment results.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Your Name *
            </label>
            <input
              type="text"
              className="w-full p-3 border rounded-xl"
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address *
            </label>
            <input
              type="email"
              className="w-full p-3 border rounded-xl"
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone Number (optional)
            </label>
            <input
              type="tel"
              className="w-full p-3 border rounded-xl"
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </div>

          {/* Relationship */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Who are you completing this for? *
            </label>
            <select
              className="w-full p-3 border rounded-xl"
              value={form.relationship}
              onChange={(e) => updateField("relationship", e.target.value)}
            >
              <option value="">Select...</option>
              <option value="self">Myself</option>
              <option value="parent">My Parent</option>
              <option value="spouse">My Spouse / Partner</option>
              <option value="relative">Another Family Member</option>
              <option value="friend">Friend</option>
              <option value="client">My Client</option>
            </select>
            {errors.relationship && (
              <p className="text-red-500 text-sm mt-1">
                {errors.relationship}
              </p>
            )}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-xl text-lg font-semibold hover:bg-teal-700 transition"
          >
            View My Results
          </button>
        </form>
      </div>
    </>
  );
}
