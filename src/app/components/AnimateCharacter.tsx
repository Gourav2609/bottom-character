import React, { useState, useEffect } from "react";
import Image from "next/image";

const AnimatedCharacter = () => {
  const [message, setMessage] = useState("Hi! I'm your assistant.");
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 200) {
        setMessage("Welcome to the top of the page!");
        setAnimation("wave");
      } else if (scrollY > 200 && scrollY < 800) {
        setMessage("You're in the middle section!");
        setAnimation("bounce");
      } else {
        setMessage("You're near the bottom!");
        setAnimation("spin");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-4 left-4 md:left-auto md:right-4 z-50 flex flex-col items-center text-center space-y-2">
      {/* Character */}
      <div className={`w-16 h-16 bg-blue-500 rounded-full ${animation}`} />

      {/* Message */}
      <div className="bg-white shadow-lg px-3 py-2 rounded text-gray-800">
        {message}
      </div>

      <style jsx>{`
        .wave {
          animation: wave 1.5s infinite;
        }

        .bounce {
          animation: bounce 1.5s infinite;
        }

        .spin {
          animation: spin 2s linear infinite;
        }

        @keyframes wave {
          0%, 100% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(10deg);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedCharacter;
