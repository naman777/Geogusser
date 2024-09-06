"use server";

import  prismaConnect  from "@/db/prismaGenerate";

export async function addUser(
  username: string,
  email: string,
  displayName: string
) {

  const isGameStarted = await prismaConnect.admin.findUnique({
    where: {
      email: "nkundra_be23@thapar.edu"
    }
  })

  if(isGameStarted?.isGameStarted){
    return "Game is not started";
  }

  const user = await prismaConnect.user.create({
    data: {
      name: username,
      email: email,
      password: "password",
      displayName: displayName,
    },
  });
  return user;
}

export async function finishGame(userId: string,userEmail:string, score: number) {
  const user = await prismaConnect.game.create({
    data:{
      score: score,
      userId: userId,
      userEmail: userEmail
    }
  });
  return user;
}

export async function getLeaderBoard() {

  const isTrue = await prismaConnect.admin.findUnique({
    where: {
      email: "nkundra_be23@thapar.edu"
    },
    
  })

  if(isTrue?.isleaderBoardVisible ){
    return "LeaderBoard is not visible";
  }

  const games = await prismaConnect.game.findMany({
    take: 10,
    orderBy: {
      score: "desc",
    },
    include: {
      user: true,
    },
  });
  return games;
}
