'use client'
import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  '360° Performance Marketing',
  'Digital Branding',
  'Complete Online Demand Generation',
  'Influencer Marketing & Digital PR',
  'Online Community Building & Development',
  'Social CRM/Analytics Integration & Management',
  'Disruptive Digital Campaigns',
  'Digital Marketing Campaigns–Publish and Promote',
  'Digital Marketing Campaigns Assets Creation',
];

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-4 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
        {/* Logo + tagline + social */}
        <div className="flex flex-col gap-6">
          <Image src="/logo-white.webp" alt="Digitally Next Logo" width={180} height={80} className="mb-2" />
          <p className="text-gray-300 text-base max-w-xs">
            Empowering businesses with next-generation digital solutions and innovative strategies.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-[#b92b27] transition"><FaFacebookF size={22} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#b92b27] transition"><FaInstagram size={22} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#b92b27] transition"><FaLinkedinIn size={22} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-[#b92b27] transition"><FaYoutube size={22} /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-xl mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#b92b27] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#b92b27] transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#b92b27] transition">Services</Link></li>
            <li><Link href="/case-studies" className="hover:text-[#b92b27] transition">Case Studies</Link></li>
            <li><Link href="/careers" className="hover:text-[#b92b27] transition">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-[#b92b27] transition">Contact</Link></li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h4 className="font-bold text-xl mb-4">Services</h4>
          <ul className="space-y-2 text-gray-200 text-base">
            {services.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </div>
        {/* Contact Us */}
        <div>
          <h4 className="font-bold text-xl mb-4">Contact Us</h4>
          <div className="mb-3">
            <span className="font-bold">Address:</span>
            <p className="text-gray-300 text-base mt-1">
              268 Business India Complex, Uday Park, Adjacent to August Kranti Marg, Delhi 110 049. Nearest Metro Station – Green Park/South Ex.
            </p>
          </div>
          <div className="mb-3">
            <span className="font-bold">Email:</span>
            <p className="text-gray-300 text-base mt-1">contact@digitallynext.com</p>
          </div>
          <div>
            <span className="font-bold">Phone:</span>
            <p className="text-gray-300 text-base mt-1">+91 981-040-9943</p>
          </div>
        </div>
      </div>
      {/* Bottom row */}
      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-2">
        <span>2025 Digitally Next. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-[#b92b27] transition">Privacy Policy</Link>
          <Link href="/terms-of-use" className="hover:text-[#b92b27] transition">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;