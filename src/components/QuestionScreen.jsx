export default function QuestionScreen({
    question,
    answer,
    onAnswer,
    onNext,
    onBack,
    isLast,
  }) {
    if (!question) return null;
  
    return (
      <div className="space-y-8">
  
        {/* Question Text */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2 leading-snug">
            {question.text}
          </h1>
  
          {question.helperText && (
            <p classng="text-gray-600 text-sm">{question.helperText}</p>
          )}
        </div>
  
        {/* Answer Options */}
        <div className="space-y-3">
          {question.options.map((opt, index) => {
            const selected = answer === opt.value;
  
            return (
              <button
                key={index}
                type="button"
                onClick={() => onAnswer(opt.value)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 shadow-sm
                  ${
                    selected
                      ? "border-teal-600 bg-teal-50 shadow-md"
                      : "border-gray-300 bg-white hover:border-teal-400"
                  }
                `}
              >
                <span
                  className={`font-medium ${
                    selected ? "text-teal-700" : "text-gray-800"
                  }`}
                >
                  {opt.label}
                </span>
              </button>
            );
          })}
        </div>
  
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center pt-4 border-t mt-6">
  
          {/* Back */}
          <button
            type="button"
            onClick={onBack}
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            Back
          </button>
  
          {/* Next */}
          <button
            type="button"
            onClick={onNext}
            disabled={answer === null || answer === undefined}
            className={`px-6 py-3 rounded-full text-white text-sm font-medium transition
              ${
                answer === null || answer === undefined
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-teal-600 hover:bg-teal-700"
              }`}
          >
            {isLast ? "Continue" : "Next"}
          </button>
        </div>
      </div>
    );
  }
  