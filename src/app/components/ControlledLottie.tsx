"use client";
import React, { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";

interface ControlledLottieProps {
  animationPath: string;
}

const animationSegments = {
  scrollingEyes: { start: 0, end: 150 },
  helloThumbsUp: { start: 151, end: 250 },
  bored: { start: 251, end: 300 },
  laughing: { start: 301, end: 350 },
  dizziness: { start: 351, end: 450 },
  screaming: { start: 451, end: 490 },
  thinking: { start: 491, end: 560 },
  shocked: { start: 561, end: 650 },
  sleeping: { start: 651, end: 890 },
  furiousFace: { start: 891, end: 960 },
  ohSit: { start: 961, end: 1010 },
  lookingAround: { start: 1011, end: 1070 },
  runComeBack: { start: 1175, end: 1241 },
};

const ControlledLottie: React.FC<ControlledLottieProps> = ({ animationPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lottieInstance, setLottieInstance] = useState<AnimationItem | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: animationPath,
      });
      setLottieInstance(anim);
      return () => anim.destroy();
    }
  }, [animationPath]);

  const playSegment = (segmentName: keyof typeof animationSegments) => {
    const segment = animationSegments[segmentName];
    if (lottieInstance && segment) {
      lottieInstance.playSegments([segment.start, segment.end], true);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-4 mb-8">
        {Object.keys(animationSegments).map((segmentName) => (
          <button
            key={segmentName}
            onClick={() => playSegment(segmentName as keyof typeof animationSegments)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition"
          >
            {segmentName
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())} 
          </button>
        ))}
      </div>
      <div
        ref={containerRef}
        className="w-[300px] h-[300px] fixed -bottom-4 left-0"
      ></div>
    </div>
  );
};

export default ControlledLottie;
