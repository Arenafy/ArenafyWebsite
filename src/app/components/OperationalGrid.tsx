import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function OperationalGrid() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], [45, -10]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          opacity,
          perspective: '1000px',
        }}
      >
        <motion.div
          style={{
            rotateX,
            scale,
            transformStyle: 'preserve-3d',
          }}
          className="relative w-full h-full"
        >
          {/* 3D Grid */}
          <svg className="w-full h-full" viewBox="0 0 800 600">
            <defs>
              <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--color-arenafy-green)" stopOpacity="0.1" />
                <stop offset="50%" stopColor="var(--color-arenafy-green)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="var(--color-arenafy-green)" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Horizontal grid lines */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.line
                key={`h-${i}`}
                x1="0"
                y1={i * 30}
                x2="800"
                y2={i * 30}
                stroke="url(#gridGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.05 }}
              />
            ))}

            {/* Vertical grid lines */}
            {Array.from({ length: 26 }).map((_, i) => (
              <motion.line
                key={`v-${i}`}
                x1={i * 30}
                y1="0"
                x2={i * 30}
                y2="600"
                stroke="url(#gridGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: i * 0.05 }}
              />
            ))}

            {/* Pulsing nodes at intersections */}
            {Array.from({ length: 15 }).map((_, i) => {
              const x = (i * 3 + 2) * 30;
              const y = (i * 2 + 3) * 30;
              return (
                <g key={`node-${i}`}>
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="4"
                    fill="var(--color-arenafy-green)"
                    animate={{
                      r: [4, 8, 4],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill="none"
                    stroke="var(--color-arenafy-green)"
                    strokeWidth="1"
                    animate={{
                      r: [8, 16, 8],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                </g>
              );
            })}
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}
