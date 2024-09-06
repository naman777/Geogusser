import React from "react";
import Image from "next/image";
import footer from "../../../public/images/footer.png";

const Signup = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#121212]"
    style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-25"
        style={{
          backgroundImage:
            'url("https://s3-alpha-sig.figma.com/img/0ba5/388f/1c1edc96f7b02a20686bcd98d563db2e?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mPvrCFK1XOIXXUeiu-vnqGeA6aRL-Trn4T4syv4adrenln4XrZPqOCmHK8S63K5xqQ8LdJi5EwdGIJYuSeF-PfXT9sUinnhMLKbpQ8wj-dUHj-6VM8ve9TbYq7O5RO7EVG5bIrYoep-LuOGiYMPWchhRgj~LVBO4~x2gs-qv-9ZScI23rdgj379w~VI1KVkA893lgiBL6BIkXcvqL213ruB4-HhkI2gAYmNNKqwgKbdQC2LQfbNndttTVeYaagvsABd06LkaD~UIwclTtu0ohHHegTpTUQ6Zqx-pmIyqTDv54O-0vEQWi94dhf3xUBOaHms0996xCf1Y2GL2ywMlzg__")',
        }}
      />

      <div className="" >
        <div  className="inline-flex items-center justify-between mb-48 gap-12">
          <img
            src="https://s3-alpha-sig.figma.com/img/436f/44bc/f1763620bc3484816ae325031d184550?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=agRapVkAelSkHoWXd1D79wRy2mam7sHBo1GMY-UHYbxxA7inSzLzpoufRCGmhfAQC3zHeuobJZEj1VoiOcMWkt0L1gE6QLHBNhGuLsDaFPeXYnPOLsv21xL8Dad20vJ1enn1CCPmiWULI0enja6sPTWk43UAquxYrFvj4idAHWHZqFKzn7GPVyGAmWU-NZlGX44mxN4gotjfBkFVBvexnSvr6YX3TNVslIlNDCn-kXw8VB~E3Cgvm-D-7YDV-RS00E2quB9uW1j3zHF-hKrEE9HlUTjKd1NMG4FTLKCbbHQneNJuDRE54s0aTC2pN-wdZUahAt3oaHinu2I08xXdXw__"
            alt="ACM Thapar"
            className="h-12 w-auto"
          />
            <h1
            style={{
            color: "#FFF",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            fontFamily: '"CorporationGames", sans-serif',
            fontSize: "30px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            letterSpacing: "1.2px",
            }}
            >
                GEOGUESSER
            </h1>
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

        {/* Input Fields */}
        <form className="mb-24">
        <div className="space-y-4 flex flex-col justify-center items-center">
            <div>
            <label
            htmlFor="username"
            className="block text-white text-sm font-medium"
            >
            Username:
            </label>
            <input
            type="text"
            id="username"
            placeholder="Enter username"
            className="inline-flex p-[10px] items-center rounded-md border-3 border-[#494141] bg-white text-black"
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
            className="inline-flex p-[10px] items-center rounded-md border-3 border-[#494141] bg-white text-black"
            />
            
        </div>
        
        </div>

            <div className="flex justify-center items-center">
            <button
                type="submit"
                className=" p-[10px] mt-4 w-[234px] bg-[#15A6DD] rounded-md text-white  font-semibold leading-normal "
                >
                Join
            </button>
            </div>
        </form>

        {/* Loading Bar and Footer Image */}
        <div className="mt-6 flex flex-col items-center">
         
          <div className="w-96 h-24 flex-shrink-0  relative">
            <Image
              src={footer}
              alt="Footer"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
