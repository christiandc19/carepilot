import { useSurveyStore } from "../store/surveyStore";
import { SURVEY_QUESTIONS } from "../data/surveyQuestions";
import ProgressBar from "../components/ProgressBar";
import QuestionScreen from "../components/QuestionScreen";
import Header from "../components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Survey({
    isEmbed = false,
    community = "default",
    theme = "light",
    source = "website",
    color = null
  }) {
  
  const navigate = useNavigate();

  const {
    currentIndex,
    answers,
    setAnswer,
    next,
    back,
  } = useSurveyStore();

  const question = SURVEY_QUESTIONS[currentIndex];
  const isLast = currentIndex === SURVEY_QUESTIONS.length - 1;

  // Auto-resize for iframe embed
  useEffect(() => {
    if (!isEmbed) return;

    function sendHeight() {
      const height = document.body.scrollHeight;
      window.parent.postMessage({ carepilotHeight: height }, "*");
    }

    sendHeight();
    const interval = setInterval(sendHeight, 300);
    return () => clearInterval(interval);
  }, [isEmbed]);

  return (
    <>
      {/* Header only in full version */}
      {!isEmbed && <Header />}

      <div className="max-w-2xl mx-auto px-6 py-10">
        <ProgressBar
          current={currentIndex + 1}
          total={SURVEY_QUESTIONS.length}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <QuestionScreen
              question={question}
              answer={answers[question.id] ?? null}
              onAnswer={(value) => setAnswer(question.id, value)}
              onNext={
                isLast
                  ? () => navigate("/lead")
                  : next
              }
              onBack={back}
              isLast={isLast}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
