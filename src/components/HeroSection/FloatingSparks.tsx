import React from "react";
import { motion } from "motion/react";

export default function FloatingSparks() {
  const sparks = [
    { id: 1, left: "8%", delay: 0, duration: 15, size: 2.5 },
    { id: 2, left: "18%", delay: 3, duration: 22, size: 3.5 },
    { id: 3, left: "28%", delay: 1, duration: 18, size: 1.5 },
    { id: 4, left: "38%", delay: 5, duration: 25, size: 2.5 },
    { id: 5, left: "48%", delay: 2, duration: 20, size: 2 },
    { id: 6, left: "58%", delay: 4, duration: 16, size: 3 },
    { id: 7, left: "68%", delay: 7, duration: 24, size: 2 },
    { id: 8, left: "78%", delay: 1.5, duration: 19, size: 3.5 },
    { id: 9, left: "88%", delay: 5.5, duration: 21, size: 1.5 },
    { id: 10, left: "95%", delay: 3.5, duration: 17, size: 2.5 },
    { id: 11, left: "12%", delay: 6, duration: 23, size: 2 },
    { id: 12, left: "22%", delay: 2.5, duration: 15, size: 3 },
    { id: 13, left: "32%", delay: 8, duration: 26, size: 1.5 },
    { id: 14, left: "42%", delay: 0.5, duration: 19, size: 2.5 },
    { id: 15, left: "52%", delay: 4.5, duration: 21, size: 2.2 },
    { id: 16, left: "62%", delay: 1.8, duration: 18, size: 3.2 },
    { id: 17, left: "72%", delay: 5.2, duration: 25, size: 1.8 },
    { id: 18, left: "82%", delay: 3.2, duration: 20, size: 2.8 },
    { id: 19, left: "92%", delay: 7.2, duration: 22, size: 2 },
    { id: 20, left: "5%", delay: 2.1, duration: 16, size: 3.5 },
    { id: 21, left: "35%", delay: 6.5, duration: 24, size: 2 },
    { id: 22, left: "65%", delay: 0.8, duration: 17, size: 3 },
    { id: 23, left: "85%", delay: 4.8, duration: 23, size: 1.8 },
    { id: 24, left: "50%", delay: 3.8, duration: 19, size: 2.5 },
  ];

  return (
    <div className="absolute inset-x-0 bottom-0 top-1/4 z-15 pointer-events-none overflow-hidden hidden md:block">
      {sparks.map((spark) => (
        <motion.div
          key={spark.id}
          className="absolute bottom-0 bg-[#c5a059] rounded-full opacity-60 filter blur-[0.5px]"
          style={{
            left: spark.left,
            width: spark.size,
            height: spark.size,
            boxShadow: "0 0 8px #c5a059, 0 0 16px #c5a059",
            willChange: "transform, opacity",
          }}
          animate={{
            y: ["0vh", "-85vh"],
            x: ["0px", spark.id % 2 === 0 ? "40px" : "-40px"],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: spark.duration,
            repeat: Infinity,
            delay: spark.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
