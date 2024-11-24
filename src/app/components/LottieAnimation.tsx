import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface LottieAnimationProps {
  animationPath: string;
  loop?: boolean;       
  autoplay?: boolean;    
  style?: React.CSSProperties; 
  onClick?: () => void;  
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationPath,
  loop = true,
  autoplay = true,
  style,
  onClick,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      animationInstance.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop,
        autoplay,
        path: animationPath,
      });
    }

    return () => {
      animationInstance.current?.destroy(); 
    };
  }, [animationPath, loop, autoplay]);

  const playAnimation = () => animationInstance.current?.play();
  const pauseAnimation = () => animationInstance.current?.pause();
  const stopAnimation = () => animationInstance.current?.stop();
  const goToFrame = (frame: number, isPlay: boolean = false) =>
    animationInstance.current?.goToAndStop(frame, isPlay);

  
  useEffect(() => {
    const handleScroll = () => {
      if (animationInstance.current) {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = scrollY / maxScroll;
        const frame = Math.min(animationInstance.current.totalFrames * scrollFraction, animationInstance.current.totalFrames - 1);
        goToFrame(frame);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={style}
      onClick={() => {
        if (onClick) onClick();
        else playAnimation(); // Default click behavior
      }}
    ></div>
  );
};

export default LottieAnimation;
