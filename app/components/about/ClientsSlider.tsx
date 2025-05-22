"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
// import Image from "next/image";
import LogoSlider from "../about/LogoSlider";

// Client logos imported from LogoSlider component


export default function ClientsSlider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="max-w-5xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-7xl font-bold mb-6">Our Clients</h2>
            <div className="h-1 w-16 bg-red-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We&apos;re proud to work with amazing brands across various industries.
              Here are some of the clients who trust us with their digital
              presence.
            </p>
          </motion.div>
        </div>

        {/* Client logos slider using the animate-marquee class from globals.css */}
        <LogoSlider />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-medium mb-6">
            Ready to join our growing list of satisfied clients?
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg transition-colors duration-300 shadow-md"
          >
            Let&apos;s Work Together
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      {/* <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-red-50 opacity-70"></div>
      <div className="absolute top-20 -left-20 w-64 h-64 rounded-full bg-red-50 opacity-70"></div> */}
    </section>
  );
}
