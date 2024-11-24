"use client";
import { useEffect, useState } from "react";

export default function AnimationInspector() {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    const fetchLottieJson = async () => {
      const response = await fetch("/lottie-redbot-v7.json"); // Path to the Lottie JSON
      const data = await response.json();
      setAnimationData(data);
    };

    fetchLottieJson();
  }, []);

  const analyzeAnimation = (data: any) => {
    if (!data) return null;

    const numLayers = data.layers?.length || 0;
    const frameRate = data.fr || 0; // Frames per second
    const totalFrames = data.op || 0; // Total frames
    const duration = totalFrames / frameRate; // Animation duration in seconds
    const assetsCount = data.assets?.length || 0;

    return {
      numLayers,
      frameRate,
      totalFrames,
      duration,
      assetsCount,
      layerNames: data.layers?.map((layer: any) => layer.nm), // Layer names
    };
  };

  const animationInfo = animationData ? analyzeAnimation(animationData) : null;

  return (
    <div className="p-4 text-white bg-gray-800 min-h-screen">
      <h1 className="text-xl font-bold">Lottie Animation Inspector</h1>
      {animationInfo ? (
        <div className="mt-4">
          <p><strong>Number of Layers:</strong> {animationInfo.numLayers}</p>
          <p><strong>Frame Rate (fps):</strong> {animationInfo.frameRate}</p>
          <p><strong>Total Frames:</strong> {animationInfo.totalFrames}</p>
          <p><strong>Duration (seconds):</strong> {animationInfo.duration.toFixed(2)}</p>
          <p><strong>Number of Assets:</strong> {animationInfo.assetsCount}</p>
          <p><strong>Layer Names:</strong></p>
          <ul className="list-disc list-inside">
            {animationInfo.layerNames?.map((name : any, idx : any) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading animation data...</p>
      )}
    </div>
  );
}
