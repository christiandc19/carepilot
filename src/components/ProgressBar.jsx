export default function ProgressBar({ current, total }) {
    const percentage = Math.round((current / total) * 100);
  
    return (
      <div className="mb-10">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-700 font-medium">
            Question {current} of {total}
          </span>
          <span className="text-sm text-gray-700 font-medium">{percentage}%</span>
        </div>
  
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-teal-600 rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  }
  