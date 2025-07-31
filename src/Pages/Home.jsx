import React from "react";
import { Card, Skeleton } from "@heroui/react";
import StarIcon from "@mui/icons-material/Star";
import AccessAlarm from "@mui/icons-material/AccessAlarm";
import Accessibility from "@mui/icons-material/Accessibility";
import { Button } from "@heroui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center overflow-hidden bg-black text-white relative">
      <div className="relative min-h-screen w-full bg-blue-100">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('/Images/bg.png')] bg-contain bg-no-repeat opacity-50 z-0" />

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black z-10" />

        {/* Main content on top */}
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 gap-1 md:px-8 lg:px-16 lg:mt-25 py-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white">
            Lorem Ipsum
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary-400 to-primary-900 bg-clip-text text-transparent my-2 mb-5 pb-2">
            Powering Smarter Choices
          </h1>

          <p className="w-full max-w-3xl text-center text-base sm:text-lg md:text-xl text-gray-400 mb-5 pb-2">
            Discover and compare the best products from top brands across Pakistan — all in one place. ACME helps you shop smarter with real-time pricing, quality insights, and personalized filters tailored to your needs.
          </p>

          <h2 className="text-xl sm:text-2xl font-bold text-center text-white">
            Lorem Ipsum is simply dummy text of the printing
          </h2>
          <h2 className="text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-primary-400 to-primary-900 bg-clip-text mb-10 text-transparent">
            Where can I get some
          </h2>

          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <Button
              size="lg"
              className="rounded-full bg-primary-300 text-lg font-semibold px-7 py-2"
            >
              START FREE TRIAL
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="rounded-full bg-transparent text-primary-300 text-lg font-semibold px-7 py-4"
            >
              SEE HOW IT WORKS
            </Button>
          </div>

          {/* Gradient block (card effect) */}
          <div className="flex justify-center lg:px-8 md:px-5 sm:px-4 px-3">
          <div className="transition-all duration-300 ease-in-out w-96 h-60 sm:w-96 sm:h-52 md:w-[56rem] md:h-120 lg:w-[82rem] lg:h-160 rounded-md bg-gradient-to-r from-primary-200 to-primary-600" />
        </div>
        </div>
      </div>
    </div>
  );
}
