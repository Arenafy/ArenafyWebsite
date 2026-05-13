import { motion } from 'motion/react';
import { Mail, MapPin, FileText, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formId = FORMSPREE_FORM_ID?.trim();
    if (!formId) {
      setSubmitStatus('error');
      setSubmitMessage('This form is not configured yet. Add VITE_FORMSPREE_FORM_ID for production.');
      return;
    }

    setSubmitStatus('submitting');
    setSubmitMessage(null);

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization || '—',
          message: formData.message,
          _subject: `Arenafy.com contact: ${formData.name}`,
        }),
      });

      const data = (await res.json().catch(() => null)) as {
        error?: string;
        errors?: Record<string, string>;
      } | null;

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', organization: '', message: '' });
        setSubmitMessage('Thanks — your message was sent. We will get back to you soon.');
        return;
      }

      setSubmitStatus('error');
      const fieldErrors = data?.errors ? Object.values(data.errors).filter(Boolean).join(' ') : '';
      setSubmitMessage(
        data?.error || fieldErrors || 'Something went wrong. Please try again or email contact@arenafy.com.',
      );
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please try again or email contact@arenafy.com.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (submitStatus === 'success' || submitStatus === 'error') {
      setSubmitStatus('idle');
      setSubmitMessage(null);
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[--color-arenafy-green]/20 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-0 w-[450px] h-[450px] bg-[--color-arenafy-green]/18 rounded-full blur-[140px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.18, 0.3, 0.18] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[--color-arenafy-green]/12 rounded-full blur-[160px]"
          animate={{ scale: [1, 1.4, 1], opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 15, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,255,65,0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,255,65,0.4) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* Radial green glow from center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,255,65,0.08) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-1.5 bg-[--color-arenafy-green]/10 border border-[--color-arenafy-green]/30 rounded-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-[--color-arenafy-green]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
              GET IN TOUCH
            </span>
          </motion.div>
          <h2 className="mb-6 text-white" style={{ fontSize: '3rem', fontWeight: 600, letterSpacing: '-0.03em' }}>
            Let's Build Something Great
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto" style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
            Ready to modernize your data infrastructure? Get in touch to discuss your requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form - 3 columns */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-white" style={{ fontSize: '0.9375rem', fontWeight: 500 }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3.5 bg-zinc-900/50 backdrop-blur-sm border border-white/10 focus:border-[--color-arenafy-green]/50 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none transition-all duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-white" style={{ fontSize: '0.9375rem', fontWeight: 500 }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3.5 bg-zinc-900/50 backdrop-blur-sm border border-white/10 focus:border-[--color-arenafy-green]/50 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none transition-all duration-300"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block mb-2 text-white" style={{ fontSize: '0.9375rem', fontWeight: 500 }}>
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('organization')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3.5 bg-zinc-900/50 backdrop-blur-sm border border-white/10 focus:border-[--color-arenafy-green]/50 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none transition-all duration-300"
                  placeholder="Your organization"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-white" style={{ fontSize: '0.9375rem', fontWeight: 500 }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={6}
                  className="w-full px-4 py-3.5 bg-zinc-900/50 backdrop-blur-sm border border-white/10 focus:border-[--color-arenafy-green]/50 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your project or requirements..."
                  required
                />
              </div>

              {submitMessage && (
                <p
                  role={submitStatus === 'error' ? 'alert' : 'status'}
                  className={
                    submitStatus === 'success'
                      ? 'text-[--color-arenafy-green] text-sm'
                      : 'text-red-400 text-sm'
                  }
                >
                  {submitMessage}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="group relative w-full px-8 py-4 transition-all duration-300 rounded-xl overflow-hidden flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  backgroundColor: '#14e580',
                  color: '#000000'
                }}
                whileHover={submitStatus === 'submitting' ? undefined : { scale: 1.01 }}
                whileTap={submitStatus === 'submitting' ? undefined : { scale: 0.99 }}
              >
                <span className="relative z-10">
                  {submitStatus === 'submitting' ? 'Sending…' : 'Send Message'}
                </span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information - 2 columns */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Details */}
            <div className="p-8 bg-gradient-to-br from-zinc-900/90 to-black/90 backdrop-blur-xl border border-white/10 rounded-2xl">
              <h3 className="mb-6 text-white" style={{ fontSize: '1.25rem', fontWeight: 600 }}>
                Corporate Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="relative w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(20,229,128,0.15), rgba(20,229,128,0.05))', border: '1.5px solid rgba(20,229,128,0.4)', boxShadow: '0 0 15px rgba(20,229,128,0.3)' }}>
                    <Mail style={{ color: '#14e580' }} size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="mb-1 text-zinc-500" style={{ fontSize: '0.875rem' }}>
                      Email
                    </div>
                    <a
                      href="mailto:contact@arenafy.com"
                      className="text-white hover:text-[--color-arenafy-green] transition-colors"
                      style={{ fontSize: '1rem', fontWeight: 500 }}
                    >
                      contact@arenafy.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="relative w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(20,229,128,0.15), rgba(20,229,128,0.05))', border: '1.5px solid rgba(20,229,128,0.4)', boxShadow: '0 0 15px rgba(20,229,128,0.3)' }}>
                    <MapPin style={{ color: '#14e580' }} size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="mb-1 text-zinc-500" style={{ fontSize: '0.875rem' }}>
                      Location
                    </div>
                    <div className="text-white" style={{ fontSize: '1rem', fontWeight: 500 }}>
                      United States
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="relative w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, rgba(20,229,128,0.15), rgba(20,229,128,0.05))', border: '1.5px solid rgba(20,229,128,0.4)', boxShadow: '0 0 15px rgba(20,229,128,0.3)' }}>
                    <FileText style={{ color: '#14e580' }} size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <div className="mb-1 text-zinc-500" style={{ fontSize: '0.875rem' }}>
                      Capability Statement
                    </div>
                    <div className="text-zinc-400" style={{ fontSize: '1rem', fontWeight: 500 }}>
                      Available upon request
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Government Contracting */}
            <div className="relative p-8 bg-gradient-to-br from-[--color-arenafy-green]/10 to-transparent backdrop-blur-xl border border-[--color-arenafy-green]/20 rounded-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[--color-arenafy-green] to-transparent" />
              <h3 className="mb-3 text-white" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                Government Contracting
              </h3>
              <p className="text-zinc-400" style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
                Arenafy is actively developing capabilities for federal and state government engagements.
                Contact us to discuss your public sector modernization requirements.
              </p>
            </div>

            {/* Animated Visual Element */}
            <div className="relative h-40 bg-gradient-to-br from-zinc-900/50 to-black/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[--color-arenafy-green]/5 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-40">
                <svg className="w-full h-full" viewBox="0 0 300 160">
                  {[...Array(12)].map((_, i) => (
                    <motion.circle
                      key={i}
                      cx={30 + i * 24}
                      cy="80"
                      r="3"
                      fill="var(--color-arenafy-green)"
                      initial={{ opacity: 0.2 }}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{
                        duration: 2,
                        delay: i * 0.15,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
