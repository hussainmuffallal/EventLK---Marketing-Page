import { motion } from "motion/react";
import { useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
  direction: number;
}

export function BackgroundAnimation() {
  // Generate random particles
  const particles = useMemo(() => {
    const colors = [
      "rgba(147, 51, 234, 0.8)", // purple - increased opacity
      "rgba(168, 85, 247, 0.8)", // violet - increased opacity
      "rgba(59, 130, 246, 0.8)", // blue - increased opacity
      "rgba(147, 197, 253, 0.8)", // light blue - increased opacity
      "rgba(192, 132, 252, 0.8)", // light purple - increased opacity
    ];

    return Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 3, // increased size
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      direction: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 dark:from-black dark:via-purple-950/20 dark:to-blue-950/20">
      {/* Moving particles */}
      {particles.map((particle) => {
        const moveX = Math.cos(particle.direction) * 150; // increased movement
        const moveY = Math.sin(particle.direction) * 150;

        return (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            }}
            animate={{
              x: [0, moveX, 0],
              y: [0, moveY, 0],
              opacity: [0.3, 1, 0.3], // increased min opacity
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Larger floating orbs */}
      {Array.from({ length: 20 }, (_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 120 + 60; // increased size
        const duration = Math.random() * 25 + 20;
        const delay = Math.random() * 3;

        return (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [1, 1.3, 1],
              background: [
                "rgba(147, 51, 234, 0.25)", // increased opacity
                "rgba(59, 130, 246, 0.25)",
                "rgba(168, 85, 247, 0.25)",
                "rgba(147, 51, 234, 0.25)",
              ],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Connection lines between particles */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(147, 51, 234, 0.4)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.4)" />
            <stop offset="100%" stopColor="rgba(168, 85, 247, 0.4)" />
          </linearGradient>
        </defs>
        {particles.slice(0, 15).map((particle, i) => {
          const nextParticle = particles[(i + 1) % 15];
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${particle.x}%`}
              y1={`${particle.y}%`}
              x2={`${nextParticle.x}%`}
              y2={`${nextParticle.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
              animate={{
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Twinkling dots */}
      {Array.from({ length: 80 }, (_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute w-2 h-2 rounded-full" // increased size
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: Math.random() > 0.5 
              ? "rgba(147, 51, 234, 0.9)" // increased opacity
              : "rgba(59, 130, 246, 0.9)",
            boxShadow: Math.random() > 0.5
              ? "0 0 8px rgba(147, 51, 234, 0.8)"
              : "0 0 8px rgba(59, 130, 246, 0.8)",
          }}
          animate={{
            opacity: [0.3, 1, 0.3], // increased min opacity
            scale: [0.8, 1.8, 0.8],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}