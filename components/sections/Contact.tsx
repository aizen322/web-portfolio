'use client';

import { useState, FormEvent } from 'react';
import Script from 'next/script';
import { SectionWrapper } from '@/components/layout/SectionWrapper';
import { Button } from '@/components/ui/Button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulated form submission - replace with actual form handler
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    
    // Reset status after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Let&apos;s Work Together
        </h2>
        <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          Ready to automate your workflows? Send me a message or book a call.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Contact Form */}
        <div className="bg-card border border-card-border rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border border-card-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg border border-card-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-card-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
                placeholder="Tell me about your automation needs..."
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full gap-2"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </>
              )}
            </Button>
            {status === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-sm text-center">
                Message sent successfully! I&apos;ll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>

        {/* Calendly Embed */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Book a Call
          </h3>
          <div className="bg-card border border-card-border rounded-2xl overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/josephvalesna/30min"
              style={{ minWidth: '320px', height: '700px' }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="lazyOnload"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

