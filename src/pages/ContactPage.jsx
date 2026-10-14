import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-[#090a0f] text-white pt-28 pb-32 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal-left">
            <span className="text-[#c5a880] uppercase tracking-[0.25em] text-xs font-bold mb-3 block">Private Advisory</span>
            <h1 className="font-serif-luxury fluid-display font-light mb-6">
              Let’s Go On A <br />
              <span className="italic text-[#c5a880]">Project Together.</span>
            </h1>
            <p className="text-zinc-400 font-light fluid-body-lead mb-10 max-w-md">
              Schedule an exclusive consultation with an Aventine asset director. Guaranteed discretion for family offices, trusts, and commercial sponsors.
            </p>

            <div className="space-y-6 border-l border-zinc-800 pl-6">
              <div>
                <p className="font-serif-luxury text-xl font-medium text-white">San Francisco (HQ)</p>
                <p className="text-zinc-400 text-sm font-light mt-1">Montgomery Tower, Suite 3200<br />San Francisco, CA 94104</p>
              </div>
              <div>
                <p className="font-serif-luxury text-xl font-medium text-white">Direct Line</p>
                <p className="text-zinc-400 text-sm font-light mt-1">+1 (415) 890-4420</p>
              </div>
            </div>
          </div>

          <div className="reveal-right bg-zinc-900/80 border border-zinc-800 p-6 sm:p-10 md:p-12 rounded-2xl shadow-2xl">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-16 h-16 text-[#c5a880] mx-auto mb-4" />
                <h3 className="font-serif-luxury text-3xl font-light mb-2">Transmission Confirmed</h3>
                <p className="text-zinc-400 text-sm font-light max-w-sm mx-auto mb-6">
                  Your inquiry has been assigned to our primary partner desk under strict confidentiality.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-editorial px-6 py-2.5 text-xs font-bold uppercase tracking-widest border border-white/20 text-white rounded-sm cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2 font-medium">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Harrison Sterling"
                    className="w-full bg-[#090a0f] border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2 font-medium">Confidential Email</label>
                  <input
                    type="email"
                    required
                    placeholder="harrison@sterlingassets.com"
                    className="w-full bg-[#090a0f] border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-400 mb-2 font-medium">Estate Scope</label>
                  <textarea
                    rows={4}
                    placeholder="Details regarding property type, acreage, or commercial footprint..."
                    className="w-full bg-[#090a0f] border border-zinc-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#c5a880] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold-ring w-full py-3.5 rounded-lg text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Confidential Request</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
