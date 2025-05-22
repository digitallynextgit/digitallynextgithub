"use client";
import React from "react";
// import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import ConsultationForm from "@/app/components/contact/ConsultationForm";
// import Image from "next/image";

const ContactPage = () => {
  return (
    <main className="min-h-[110vh] bg-white flex items-center justify-center py-24 flex-col px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Heading, Testimonial, CTA */}
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-3xl md:text-5xl font-extrabold text-center md:text-left text-[#d90429] mb-8 leading-tight">
            Let&apos;s start a project
            <br />
            together
          </h1>
          {/* Testimonial */}
          <div className="bg-red-50 rounded-xl p-6 mb-8 shadow-sm">
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              “Highly happy with a design delivered by Digitally Next.
              Definitely will keep working with them. Great quality and smooth
              communication.”
            </p>
            <div className="flex items-center gap-3">
              {/* <Image src="/avatar.webp" alt="Testimonial" width={48} height={48} className="rounded-full" /> */}
              <div>
                <div className="font-bold text-gray-900">Deepak Goel</div>
                <div className="text-gray-500 text-sm">
                  Founder & CEO @DigiNext
                </div>
              </div>
            </div>
          </div>
          {/* CTA */}
          <div className="mt-6">
            <div className="text-2xl font-bold mb-2 text-gray-900 text-center md:text-left">
              Book a free strategy call.
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#d90429] text-white font-semibold text-sm md:text-lg shadow hover:bg-[#b90323] transition-colors"
            >
              Schedule 20 minute call <FaArrowRight />
            </a>
          </div>
        </div>
        {/* Right Side: Form Card */}
        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-8 border border-gray-100">
            <ConsultationForm />
          </div>
          <div className="flex   md:items-start md:justify-between gap-2 ">
            <div className="text-gray-500 text-sm">Hate contact forms?</div>
            <a
              href="mailto:contact@digitallynext.com"
              className="text-[#d90429] font-semibold underline underline-offset-2"
            >
              contact@digitallynext.com
            </a>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className="h-[500px] w-[1400px] rounded-[20px] overflow-hidden mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.3093439530144!2d77.21608587517684!3d28.560472187350033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce24216964c5d%3A0xc9e228c6a9ed2bad!2sDigitally%20Next!5e0!3m2!1sen!2sin!4v1736675722060!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};

export default ContactPage;
