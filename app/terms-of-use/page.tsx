'use client'
import { motion } from 'framer-motion';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white py-[8vh] px-[6vw] mt-[6vw]">
      <div className="max-w-7xl mx-auto">
        <motion.h1 
          className="text-[8vw] md:text-[4vw] font-bold mb-[4vh] text-red-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Terms of Use
        </motion.h1>

        <motion.div 
          className="space-y-[3vh] text-[2.5vw] md:text-[1.2vw] text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <section className="mb-[4vh]">
            <h2 className="text-[4vw] md:text-[2vw] font-semibold mb-[2vh] text-black">Agreement</h2>
            <p>
              By using our website and services, you agree to these terms. Please read them carefully.
            </p>
          </section>

          <section className="mb-[4vh]">
            <h2 className="text-[4vw] md:text-[2vw] font-semibold mb-[2vh] text-black">Usage Rules</h2>
            <ul className="list-disc pl-[2vw] space-y-[1vh]">
              <li>Use content for personal, non-commercial purposes only</li>
              <li>Do not modify or distribute our materials without permission</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-[4vh]">
            <h2 className="text-[4vw] md:text-[2vw] font-semibold mb-[2vh] text-black">Liability</h2>
            <p>
              We provide our services &quot;as is&quot; without warranties. We&apos;re not liable for any damages
              arising from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-[4vw] md:text-[2vw] font-semibold mb-[2vh] text-black">Contact</h2>
            <p>
              Questions about these terms? Email us:{' '}
              <a href="mailto:legal@digitallynext.com" className="text-red-600 hover:underline">
                legal@digitallynext.com
              </a>
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfUse;
