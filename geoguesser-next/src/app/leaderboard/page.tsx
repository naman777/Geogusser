"use client";

import React, { useEffect, useState } from "react";
import { getLeaderBoard } from "../../services/userActions"; // Import the server action

type User = {
  id: string;
  email: string;
  password: string;
  name: string;
  displayName: string;
  createdAt: Date;
  updatedAt: Date;
};

type Game = {
  id: string;
  score: number;
  user: User;
};

export default function Leaderboard(): JSX.Element {
  const [leaderboardData, setLeaderboardData] = useState<Game[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const result = await getLeaderBoard();
      if(result === "LeaderBoard is not visible"){
        alert("LeaderBoard is not visible, Wait for some time");
        setMessage("LeaderBoard is not visible");
        return;
      }

      //@ts-ignore
      console.log(result);
      setLeaderboardData(result);
    }

    fetchData();
  }, []);

  return (
    <div className="bg-[#111111] flex flex-col justify-center items-center w-full min-h-screen">
      <h1 className="text-white text-4xl mb-6">Leaderboard</h1>
      {message ? (
        <div className="text-white text-2xl">{message}</div>
      ) : (
        <div className="w-[430px] bg-[#222222] rounded-lg p-4">
          {leaderboardData &&
            leaderboardData.length > 0 &&
            leaderboardData.map((game, index) => {
              return (
                <div
                  key={game.id}
                  className="flex justify-between items-center p-4 bg-[#333333] mb-4 rounded-lg"
                >
                  <span className="text-white text-lg">{`${index + 1}. ${
                    game.user.displayName || game.user.name
                  }`}</span>
                  <span className="text-white text-lg">{game.score} pts</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}
