import { motion } from 'motion/react';

export function DataOrbit() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div className="relative w-full max-w-4xl aspect-square">
        {/* Central core */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[--color-arenafy-green] rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="absolute inset-0 bg-[--color-arenafy-green] rounded-full blur-xl opacity-50" />
        </motion.div>

        {/* Orbiting rings */}
        {[200, 300, 400].map((size, index) => (
          <motion.div
            key={`ring-${index}`}
            className="absolute top-1/2 left-1/2 border border-[--color-arenafy-green]/20 rounded-full"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
            }}
            animate={{
              rotate: index % 2 === 0 ? 360 : -360,
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              rotate: {
                duration: 20 + index * 10,
                repeat: Infinity,
                ease: 'linear',
              },
              opacity: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            {/* Orbiting particles */}
            {Array.from({ length: 3 + index }).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute top-0 left-1/2 w-2 h-2 bg-[--color-arenafy-green] rounded-full"
                style={{
                  marginLeft: -1,
                  marginTop: -1,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8 + index * 4,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: i * (8 / (3 + index)),
                }}
              >
                <div className="absolute inset-0 bg-[--color-arenafy-green] rounded-full blur-sm" />
              </motion.div>
            ))}
          </motion.div>
        ))}

        {/* Data flow paths */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-arenafy-green)" stopOpacity="0" />
              <stop offset="50%" stopColor="var(--color-arenafy-green)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--color-arenafy-green)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {Array.from({ length: 6 }).map((_, i) => {
            const angle = (i * 60 * Math.PI) / 180;
            const x1 = 50 + Math.cos(angle) * 10;
            const y1 = 50 + Math.sin(angle) * 10;
            const x2 = 50 + Math.cos(angle) * 45;
            const y2 = 50 + Math.sin(angle) * 45;

            return (
              <motion.line
                key={`flow-${i}`}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke="url(#flowGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: 'easeInOut',
                }}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
}
