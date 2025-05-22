'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const team = [
  {
    name: 'Sarah Johnson',
    position: 'CEO & Founder',
    bio: 'With over 15 years of experience in digital marketing, Sarah founded DigitallyNext with a vision to create impactful digital solutions that drive real business results.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Michael Chen',
    position: 'CTO',
    bio: 'Michael brings 12+ years of technology leadership experience, ensuring our technical solutions are innovative, robust, and scalable.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Emily Rodriguez',
    position: 'Creative Director',
    bio: 'Emily leads our creative team with her exceptional eye for design and 10 years of experience crafting compelling visual identities for brands.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'James Wilson',
    position: 'Head of Strategy',
    bio: 'James brings strategic insight and analytical expertise to every project, helping clients achieve their business objectives through data-driven approaches.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Priya Patel',
    position: 'Digital Marketing Lead',
    bio: 'Priya specializes in creating and implementing comprehensive digital marketing strategies that build brand awareness and drive conversions.',
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'David Thompson',
    position: 'Development Lead',
    bio: 'David oversees our development team, bringing technical excellence and innovative solutions to our clients" most complex challenges.',
    image: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3',
    socialLinks: {
      linkedin: '#',
      twitter: '#',
    },
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [, setActiveTeamMember] = useState<number | null>(null);
  
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <div className="h-1 w-16 bg-[#dc3333] mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our talented team of experts brings together a diverse range of skills and experience
              to deliver exceptional results for our clients.
            </p>
          </motion.div>
          
          {/* Team members grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group"
                onMouseEnter={() => setActiveTeamMember(index)}
                onMouseLeave={() => setActiveTeamMember(null)}
              >
                {/* Member image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Social links */}
                  <div className="absolute bottom-4 left-0 w-full flex justify-center gap-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a 
                      href={member.socialLinks.linkedin} 
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
                    >
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
                      </svg>
                    </a>
                    <a 
                      href={member.socialLinks.twitter} 
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors"
                    >
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.41 4.53 14.44 3.89 14.31C4.16 15.14 4.69 15.86 5.39 16.37C6.09 16.88 6.94 17.15 7.81 17.14C6.23 18.38 4.28 19.03 2.29 19C1.96 19 1.62 18.98 1.29 18.93C3.24 20.15 5.57 20.88 8 20.88C16 20.88 20.33 14.27 20.33 8.54C20.33 8.35 20.33 8.16 20.32 7.97C21.16 7.38 21.88 6.65 22.46 5.83V6Z" fill="currentColor"/>
                      </svg>
                    </a>
                  </div>
                </div>
                
                {/* Member info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#dc3333] font-medium mb-4">{member.position}</p>
                  <p className="text-gray-600 line-clamp-3">{member.bio}</p>
                </div>
                
                {/* Red accent */}
                <div className="h-1 w-0 bg-[#dc3333] transition-all duration-300 group-hover:w-full"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Join the team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-16 text-center"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                We&apos;e always looking for talented individuals to join our team. If you&apos;re passionate about digital
                innovation and want to work in a collaborative, creative environment, we&apos;d love to hear from you.
              </p>
              <a href="/careers" className="btn-primary py-3 px-8 text-base">View Open Positions</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 