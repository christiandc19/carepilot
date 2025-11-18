import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSurveyStore } from "../store/surveyStore";
import ResultView from "../components/ResultView";

export default function Result() {
  const navigate = useNavigate();
  const result = useSurveyStore((state) => state.result);
  const lead = useSurveyStore((state) => state.lead);

  useEffect(() => {
    // No result OR no lead → redirect to start
    if (!result || !lead) {
      navigate("/");
    }
  }, [result, lead, navigate]);

  // Don’t flash UI before redirecting
  if (!result || !lead) return null;

  return <ResultView />;
}
