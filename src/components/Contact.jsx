import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      await new Promise(r => setTimeout(r, 1200))
      setStatus('Thanks — I will be in touch soon!')
    } catch (e) {
      setStatus('Something went wrong.')
    }
  }

  return (
    <section id="contact" className="relative bg-black py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-3xl border border-pink-500/20 bg-white/5 backdrop-blur-xl p-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-3xl font-black text-pink-100 mb-3">Let’s create</h3>
              <p className="text-pink-200/80">Have a project in mind? Tell me a little about it.</p>
              <div className="mt-6 grid gap-3 text-sm text-pink-200/80">
                <div className="px-3 py-2 bg-black/40 border border-pink-500/20 rounded-lg">Based in: Remote / GMT</div>
                <div className="px-3 py-2 bg-black/40 border border-pink-500/20 rounded-lg">Email: you@example.com</div>
                <div className="px-3 py-2 bg-black/40 border border-pink-500/20 rounded-lg">Social: @yourhandle</div>
              </div>
            </div>
            <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid gap-4">
              <input required placeholder="Your name" className="px-4 py-3 rounded-xl bg-black/40 border border-pink-500/30 text-pink-100 placeholder-pink-300/50 focus:outline-none focus:border-pink-400" />
              <input required type="email" placeholder="Email" className="px-4 py-3 rounded-xl bg-black/40 border border-pink-500/30 text-pink-100 placeholder-pink-300/50 focus:outline-none focus:border-pink-400" />
              <textarea required rows="5" placeholder="Project details" className="px-4 py-3 rounded-xl bg-black/40 border border-pink-500/30 text-pink-100 placeholder-pink-300/50 focus:outline-none focus:border-pink-400" />
              <button className="px-6 py-3 rounded-xl bg-pink-500 text-black font-semibold shadow-[0_10px_30px_rgba(236,72,153,0.35)] hover:shadow-[0_10px_40px_rgba(236,72,153,0.5)] transition">Send</button>
              <div className="text-sm text-pink-300/80">{status}</div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
