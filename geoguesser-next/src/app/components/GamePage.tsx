import { useState, useEffect } from "react";

const GamePage = () => {
  const [timer, setTimer] = useState(180); // 3 minutes in seconds
  const [score, setScore] = useState(2735);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-black text-white p-6 rounded-lg shadow-lg w-80">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <img src="/thapar-logo.png" alt="Thapar" className="h-6" />
            <span className="font-bold">GEOGUESSER</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <div>
              <span className="text-red-500 font-bold text-lg">{formatTime(timer)}</span>
            </div>
            <div>
              <span className="text-lg font-bold text-blue-400">{score}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-600 h-64 mb-4 flex items-center justify-center rounded-lg">
          <span>(Map)</span>
        </div>

        <div className="bg-gray-500 h-20 flex items-center justify-center rounded-lg mb-4">
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 px-3 py-1 rounded-full">←</button>
            <span>(Image)</span>
            <button className="bg-blue-500 px-3 py-1 rounded-full">→</button>
          </div>
        </div>

        <button className="w-full bg-blue-600 py-2 rounded-lg font-bold">
          Finish
        </button>
      </div>
    </div>
  );
};

export default GamePage;
