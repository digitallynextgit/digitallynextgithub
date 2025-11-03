'use client'
import { motion } from 'framer-motion';

export default function PrivacyClient() {
  return (
    <div className="min-h-screen bg-white py-[8vh] px-[6vw] mt-[6vw]">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-[8vw] md:text-[4vw] font-bold mb-[4vh] text-red-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Privacy Policy
        </motion.h1>

        <motion.div 
          className="space-y-[3vh] text-[2.5vw] md:text-[1.2vw] text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <section className="mb-[4vh]">
            <h2 className="text-[4vw] md:text-[2vw] font-semibold mb-[2vh] text-black">Information Collection & Use</h2>
            <p>We collect and use your information to provide and improve our services. This includes:</p>
            <ul className="list-disc pl-[2vw] mt-[1vh] space-y-[1vh]">
              <li>Contact details for communication</li>
              <li>Usage data to enhance user experience</li>
              <li>Payment information for transactions</li>
            </ul>
          </section>

          <section className="mb-[4vh]">
            <h2 className="text-[4vw] md:text-[2vw] font-semibold mb-[2vh] text-black">Data Protection</h2>
            <p>Your data security is our priority. We implement industry-standard measures to protect your information and never share it without your consent.</p>
          </section>

          <section className="mb-[4vh]">
            <h2 className="text-[4vw] md:text-[2vw] font-semibold mb-[2vh] text-black">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-[2vw] mt-[1vh] space-y-[1vh]">
              <li>Access and control your data</li>
              <li>Request data deletion</li>
              <li>Opt-out of communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[4vw] md:text-[2vw] font-semibold mb-[2vh] text-black">Contact</h2>
            <p>
              Questions about privacy? Email us:{' '}
              <a href="mailto:privacy@digitallynext.com" className="text-red-600 hover:underline">
                privacy@digitallynext.com
              </a>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}