import { useEffect, useState } from "react";

export default function ProgressBar({ totalVal, currentVal, isCompleted }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!totalVal || totalVal === 0) return;
    const calculated = Math.min((currentVal / totalVal) * 100, 100);
    setProgress(calculated);
  }, [totalVal, currentVal]);

  return (
    <div
      className="
        mx-auto
        h-[0.8rem] 
        w-full 
        bg-[hsl(var(--secondary))] 
        rounded-[0.4rem]
        overflow-hidden
      "
    >
      <div
        className={`
          h-full 
          rounded-[0.4rem] 
          transition-all 
          duration-500 
          ${isCompleted ? "bg-green-500" : "bg-yellow-400"}
        `}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
