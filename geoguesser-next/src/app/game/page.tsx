"use client"
import Appbar from "../components/Appbar";
import MapComponent from "../components/map";
import ImageViewer from "../components/imageViewer";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { finishGame } from "@/services/userActions";

interface ImageObject {
    src: string;
    index: number;
    attachedLocation: {
      latitude: number;
      longitude: number;
    };
    inputLocation: {
      latitude: number;
      longitude: number;
    };
    score: number;
  }


const GamePage = () => {
    const [score, setScore] = useState(0);
  const [time, setTime] = useState(600);
  const [imageTracker, setImageTracker] = useState(0);
  const [markerLocation, setMarkerLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [imageObjects, setImageObjects] = useState<ImageObject[]>([
    {
      src: "https://source.unsplash.com/random/800x600",
      index: 0,
      attachedLocation: {
        latitude: 30.356822708934217,
        longitude: 76.36370500954598,
      },
      inputLocation: {
        latitude: 0,
        longitude: 0,
      },
      score: 0,
    },
    {
      src: "https://source.unsplash.com/random/800x600",
      index: 1,
      attachedLocation: {
        latitude: 30.356822708934217,
        longitude: 76.36370500954598,
      },
      inputLocation: {
        latitude: 0,
        longitude: 0,
      },
      score: 0,
    },
    {
      src: "https://source.unsplash.com/random/800x600",
      index: 2,
      attachedLocation: {
        latitude: 30.356822708934217,
        longitude: 76.36370500954598,
      },
      inputLocation: {
        latitude: 0,
        longitude: 0,
      },
      score: 0,
    },
  ]);

  const router = useRouter();
  const handleScoreUpdate = (imageObjectsTemp: ImageObject[]) => {
    var score = 0;
    imageObjectsTemp.forEach((imageObject) => {
      score = score + imageObject.score;
    });

    setScore(score);
    setMarkerLocation({
      latitude: 0,
      longitude: 0,
    });
  };

  const handleFinish = async () => {
    const userId = localStorage.getItem("userId");
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    const displayName = localStorage.getItem("displayName");

    const Finish = await finishGame(userId!, email!, score);
    router.push("/leaderboard");
  }

  const handleScoreCalculation = (imageObject: ImageObject) => {
    console.log("Image Object", imageObject);

    // Calculate distance using a larger scaling factor
    const distance = Math.sqrt(
      Math.pow(
        imageObject.attachedLocation.latitude -
          imageObject.inputLocation.latitude,
        2
      ) +
        Math.pow(
          imageObject.attachedLocation.longitude -
            imageObject.inputLocation.longitude,
          2
        )
    );

    // Adjust sensitivity by scaling up the distance multiplier
    const scaledDistance = distance * 100000;

    // Calculate score with the adjusted distance
    var score = Math.max(0, Math.floor(1000 - scaledDistance)) - 900;

    score = score < 0 ? 0 : score;

    imageObject.score = score;

    setScore((prevScore) => prevScore + score);

    var imageObjectsTemp;

    setImageObjects((prevImageObjects) => {
      const newImageObjects = prevImageObjects.map((prevImageObject) => {
        if (prevImageObject.index === imageObject.index) {
          return imageObject;
        } else {
          return prevImageObject;
        }
      });

      imageObjectsTemp = newImageObjects;
      handleScoreUpdate(newImageObjects);
      return newImageObjects;
    });

    console.log("Score", score, "Distance", distance);
    return score;
  };

  const handleImageChange = (selectedIndex: number) => {
    console.log("Image Changed handleImageChangepp", selectedIndex , imageTracker);
    if (!imageObjects) {
    }

    const imageObject = imageObjects[selectedIndex];

    if (!imageObject) {
      console.log("No Image Found");
      return;
    }

    if (markerLocation.latitude === 0 && markerLocation.longitude === 0) {
      console.log("No Marker Location Found");
      return;
    }

    imageObject.inputLocation = markerLocation
      ? markerLocation
      : imageObject.inputLocation;

    console.log("Image Changed", selectedIndex);

    handleScoreCalculation(imageObject);

    console.log("Image Changed", selectedIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const user = (localStorage.getItem("user") || "");
    if (user == "") {
      console.log("User", user);
      // router.push("/credentials");
    }
  }, []);
    
    return (
        <div className="bg-[#121212] h-screen w-screen flex flex-col relative">
  <div className="mt-4">
    <Appbar />
  </div>

  <div className="flex justify-between mt-4">
    <div className="ml-8">
      <div className="text-white font-outfit text-base font-medium leading-normal">
        Timer:
      </div>
      <div className="inline-flex px-[22px] py-[6px] justify-center items-center rounded-md border-3 border-[#525252] bg-white text-[#F62121]">
        {time}
      </div>
    </div>

    <div className="mr-8">
      <div className="text-white font-outfit text-base font-medium leading-normal ml-7">
        Score:
      </div>
      <div className="inline-flex px-[28px] py-1.5  justify-center items-center rounded-md border-3 border-[#525252] bg-white text-[#15A6DD] ml-4">
        {score}
      </div>
    </div>
  </div>

  <div className="flex-grow p-6 z-10 relative">
    <MapComponent
      selectedLocation={""}
      view={""}
      selectedValue={""}
      selectedTime={""}
      latitude={0}
      longitude={0}
      imageTracker={imageTracker}
      setMarkerLocation={setMarkerLocation}
    />

    <div className="absolute bottom-4 right-4 w-[203px] h-[135px] z-20">
      <ImageViewer
        setImageTracker={setImageTracker}
        imageTracker={imageTracker}
        handleImageChangeProp={handleImageChange}
      />
    </div>
  </div>
        
  <div className="flex justify-center mb-4 z-20">
    <button className="flex w-[196px] px-[67px] py-[10px] justify-center items-center rounded-md bg-[#15A6DD] shadow-md hover:bg-[#035778]" onClick={handleFinish}>
      Finish
    </button>
  </div>
</div>

    );
};

export default GamePage;
