import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function NewYearCelebration() {
  return (
    <section className="flex items-center justify-center py-10">
      <div className="space-y-10 relative">
        <div className="text-center font-semibold text-2xl absolute top-5 left-52 px-5 bg-white">
          Sell Your Car on PakWheels and Get the Best Price
        </div>
        {/* UPPER CONTAINER */}
        <div className="border flex items-center gap-32 px-12 py-10 ">
          {/* LEFT  */}
          <div className="space-y-6">
            <h1 className="text-[#233D7B] font-semibold text-2xl">
              Post your Ad on PakWheels
            </h1>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg
                  className="h-6 w-8 text-green-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Post your Ad for Free in 3 Easy Steps
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-6 w-8 text-green-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Get Genuine offers from Verified Buyers
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-6 w-8 text-green-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Sell your car Fast at the Best Price
              </li>
            </ul>
            <Button variant={"destructive"} className="bg-[#B73439] w-40 h-12">
              Post Your Ad
            </Button>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <h1 className="text-[#233D7B] font-semibold text-2xl">
              Try PakWheels Sell It For Me
            </h1>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg
                  className="h-6 w-8 text-green-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Dedicated Sales Expert to Sell your Car
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-6 w-8 text-green-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                We Bargain for you and share the Best Offer
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="h-6 w-8 text-green-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                We ensure Safe & Secure Transaction
              </li>
            </ul>
            <Button variant={"destructive"} className="bg-[#3674B3] w-40 h-12">
              Register Your Car
            </Button>
          </div>
        </div>

        {/* LOWER CELEBRATION IMAGE */}
        <Image
          src={"/image/New Year Image.jpg"}
          alt="New Year Celebration Image"
          width={1000}
          height={200}
        />
      </div>
    </section>
  );
}

export default NewYearCelebration;
