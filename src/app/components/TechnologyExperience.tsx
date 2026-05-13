import { motion } from 'motion/react';

const technologies = [
  { name: 'Snowflake', category: 'Data Platform' },
  { name: 'Sigma Computing', category: 'Analytics' },
  { name: 'NetSuite', category: 'ERP' },
  { name: 'SAP Ariba', category: 'Procurement' },
  { name: 'UKG', category: 'HCM' },
  { name: 'Fivetran', category: 'Data Integration' },
  { name: 'Azure', category: 'Cloud Platform' },
  { name: 'AWS', category: 'Cloud Platform' },
  { name: 'Jira', category: 'Project Management' },
];

export function TechnologyExperience() {
  return (
    <section id="technology" className="relative py-32 bg-black">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4" style={{ fontSize: '2.5rem', fontWeight: 500, letterSpacing: '-0.02em' }}>
            Technology Experience
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>
            Deep expertise across modern data platforms, enterprise systems, and cloud infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="group relative p-6 bg-gradient-to-br from-white/[0.02] to-transparent border border-white/10 hover:border-[--color-arenafy-green]/30 rounded-sm transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  <div className="mb-2" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
                    {tech.name}
                  </div>
                  <div className="text-white/40" style={{ fontSize: '0.8125rem' }}>
                    {tech.category}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[--color-arenafy-green]/0 group-hover:border-[--color-arenafy-green]/50 transition-all duration-300 rounded-tr-sm" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center text-white/40"
          style={{ fontSize: '0.875rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Technology experience does not imply official partnerships or vendor endorsements
        </motion.div>
      </div>
    </section>
  );
}
