"use client"
import React, { useState } from "react";
import Image from "next/image";
import footer from "../../public/images/footer.png";
import Appbar from "./components/Appbar";
import { useRouter } from "next/navigation";
import { addUser } from "@/services/userActions";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    displayName: "",
    applicationNumber: "",
    email: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const { name, displayName, email } = formData;
      const user = await addUser(name, email, displayName);
      if(user === "Game is not started"){
        setError("Game is not started");
        alert("Game is not started");
        return;
      }
      localStorage.setItem("userId", user.id);
      localStorage.setItem("displayName", user.displayName);
      localStorage.setItem("name", user.name);
      localStorage.setItem("email", user.email);
      router.push("/game")
    } catch (err) {
      console.log(err);
      setError("Failed to create user");
      // router.push("/game")
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-[#121212]"
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-25 z-10"
        style={{
          backgroundImage:
            'url("https://s3-alpha-sig.figma.com/img/0ba5/388f/1c1edc96f7b02a20686bcd98d563db2e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPvrCFK1XOIXXUeiu-vnqGeA6aRL-Trn4T4syv4adrenln4XrZPqOCmHK8S63K5xqQ8LdJi5EwdGIJYuSeF-PfXT9sUinnhMLKbpQ8wj-dUHj-6VM8ve9TbYq7O5RO7EVG5bIrYoep-LuOGiYMPWchhRgj~LVBO4~x2gs-qv-9ZScI23rdgj379w~VI1KVkA893lgiBL6BIkXcvqL213ruB4-HhkI2gAYmNNKqwgKbdQC2LQfbNndttTVeYaagvsABd06LkaD~UIwclTtu0ohHHegTpTUQ6Zqx-pmIyqTDv54O-0vEQWi94dhf3xUBOaHms0996xCf1Y2GL2ywMlzg__")',
        }}
      />

      <div className="z-50">
        <div className="mb-32">
          <Appbar />
        </div>

        <h1
          style={{
            color: "#FFF",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            fontFamily: '"CorporationGames", sans-serif',
            fontSize: "40px",
            fontWeight: "400",
            lineHeight: "normal",
            letterSpacing: "1.2px",
          }}
          className="text-center mb-6"
        >
          GEOGUESSER
        </h1>

        <form className="mb-24 z-50" onSubmit={handleSubmit}>
          <div className="space-y-4 flex flex-col justify-center items-center z-50">
            <div>
              <label
                htmlFor="name"
                className="block text-white text-sm font-medium"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                className="inline-flex p-[10px] items-center rounded-md border-3 border-[#494141] bg-white text-black z-20"
                required
              />
            </div>

            <div>
              <label
                htmlFor="displayName"
                className="block text-white text-sm font-medium"
              >
                Display Name:
              </label>
              <input
                type="text"
                id="displayName"
                placeholder="Enter display name"
                value={formData.displayName}
                onChange={handleChange}
                className="inline-flex p-[10px] items-center rounded-md border-3 border-[#494141] bg-white text-black"
                required
              />
            </div>

            <div>
              <label
                htmlFor="applicationNumber"
                className="block text-white text-sm font-medium"
              >
                Application number:
              </label>
              <input
                type="text"
                id="applicationNumber"
                placeholder="Enter application number"
                value={formData.applicationNumber}
                onChange={handleChange}
                className="inline-flex p-[10px] items-center rounded-md border-3 border-[#494141] bg-white text-black"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-white text-sm font-medium"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="inline-flex p-[10px] items-center rounded-md border-3 border-[#494141] bg-white text-black"
                required
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="p-[10px] mt-4 w-[234px] bg-[#15A6DD] rounded-md text-white font-semibold leading-normal"
              disabled={loading}
            >
              {loading ? "Joining..." : "Join"}
            </button>
          </div>
        </form>

        {error && (
          <div className="text-red-500 text-center">
            {error}
          </div>
        )}

        <div className="mt-6 flex flex-col items-center mb-10">
          <div className="w-96 h-24 flex-shrink-0 relative">
            <Image src={footer} alt="Footer" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
