import React from 'react'
import Image from 'next/image';

const projects = [
  
    {
      name: 'Small/Medium Business',
      tags: 'Branding + UX/UI + Mobile App',
      img: '/home/consultation/1.webp',
      bg: '#ff4255',
      desc: 'Crafted user-centric mobile applications that simplify internal workflows and customer engagement for SMBs.',
    },
    {
      name: "MNC's",
      tags: 'UX Strategy + Enterprise Web + Next.js',
      img: '/home/consultation/2.webp',
      bg: '#0ec9c5',
      desc: 'Delivered scalable enterprise-grade platforms tailored for global collaboration, learning, and process efficiency.',
    },
    {
      name: 'Education Entity',
      tags: 'EdTech + UI Design',
      img: '/home/consultation/3.webp',
      bg: '#ff4255',
      desc: 'Developed digital tools and engaging print materials to elevate academic accessibility and learner experience.',
    },
    {
      name: 'Startups',
      tags: 'UX/UI + Web App',
      img: '/home/consultation/4.webp',
      bg: '#0ec9c5',
      desc: 'Built rapid MVPs with intuitive interfaces and branding to help startups launch and iterate quickly.',
    },
    {
      name: 'Portfolio Making',
      tags: 'B2C + B2B + D2C',
      img: '/home/consultation/5.webp',
      bg: '#ff4255',
      desc: 'Created visually compelling and responsive portfolio sites to highlight individual talent and creative work.',
    },
    {
      name: 'Self-Employed',
      tags: 'Web Presence + Optimization',
      img: '/home/consultation/6.webp',
      bg: '#0ec9c5',
      desc: 'Empowered solo entrepreneurs with digital platforms to showcase services, attract clients, and scale their work.',
    }
];

const BookConsultation = () => {
  return (
    <section className="bg-white py-10 px-4">
      <div className="text-center mb-5">
        <h1 className="text-5xl md:text-[78px] font-black m-0 leading-none tracking-tight">Book</h1>
        <h2 className="text-5xl md:text-[78px] font-black m-0 leading-none tracking-tight text-[#231942]">
          <span className="text-[#231942]">A </span>
          <span className="text-transparent" style={{ WebkitTextStroke: '2px #231942' }}>Consultation</span>
        </h2>
        <p className="mt-4 text-sm md:text-lg text-[#231942] max-w-xl mx-auto">Book a consultation with our experts to discover how we can help you achieve your goals. Our team specializes in a variety of fields to ensure your success.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.name}
            className="relative min-h-[500px] flex items-center group cursor-pointer text-black"
          >

            {/* Content with enhanced animations */}
            <div className="relative z-10 text-left p-8 w-full  max-w-[350px] flex flex-col items-start justify-end transition-all duration-500 ease-in-out  group-hover:scale-110 shadow-lg rounded-lg">
              <div className="overflow-hidden rounded-lg mb-6 transform transition-transform duration-500 ease-in-out group-hover:scale-105">
                <Image
                  src={p.img}
                  alt={p.name}
                  width={1200}
                  height={100}
                  className=" object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
              <h3 className="mt-0 mb-2 font-bold text-3xl text-black transition-colors duration-300">{p.name}</h3>
              <p className="text-sm text-black opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out mb-2 h-0 group-hover:h-auto overflow-hidden">{p.desc}</p>
              <div className="text-xs font-semibold tracking-wider text-black transition-colors duration-300">{p.tags}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BookConsultation