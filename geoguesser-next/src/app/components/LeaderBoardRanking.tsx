import React from "react";

interface LeaderboardRankingProps {
  rank: number;
  name: string;
  points: number;
  bgColor: string;
}

const LeaderboardRanking: React.FC<LeaderboardRankingProps> = ({ rank, name, points, bgColor }) => {
  return (
    <div className="absolute w-[371px] h-[41px] top-[604px] left-[29px] bg-[#2f2f2f] rounded-[50px_12px_12px_50px] overflow-hidden">
          <div className="absolute w-[77px] h-[41px] top-0 left-0 bg-[#ececec] rounded-[50px] overflow-hidden border-4 border-solid border-[#2f2f2f]">
            <div className="top-1 left-8 [font-family:'Outfit-ExtraBold',Helvetica] font-extrabold text-black absolute text-xl tracking-[0] leading-[normal]">
              {rank}
            </div>
          </div>
          <div className="top-[9px] left-24 [font-family:'Outfit-Regular',Helvetica] font-normal absolute text-white text-base tracking-[0] leading-[normal]">
            {name}
          </div>
          <div className="top-[9px] left-[292px] [font-family:'Outfit-Regular',Helvetica] font-normal absolute text-white text-base tracking-[0] leading-[normal]">
            {points}
          </div>
        </div>
  );
};

export default LeaderboardRanking;
