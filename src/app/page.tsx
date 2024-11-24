"use client";
import ControlledLottie from "./components/ControlledLottie";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <h1 className="text-2xl text-black mb-4">Lottie Animation Controller</h1>
      <ControlledLottie animationPath="/lottie-redbot-v7.json" />
    </div>
  );
}
