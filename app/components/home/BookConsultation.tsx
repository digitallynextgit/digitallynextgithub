import React from 'react'
import Image from 'next/image';

const projects = [
  
    {
      name: 'Small/Medium Business',
      tags: 'Branding + UX/UI + Mobile App',
      img: '/home/consultation/1.webp',
      bg: '#58ffd0',
      desc: 'Crafted user-centric mobile applications that simplify internal workflows and customer engagement for SMBs.',
    },
    {
      name: "MNC's",
      tags: 'UX Strategy + Enterprise Web + Next.js',
      img: '/home/consultation/2.webp',
      bg: '#ff4255',
      desc: 'Delivered scalable enterprise-grade platforms tailored for global collaboration, learning, and process efficiency.',
    },
    {
      name: 'Education Entity',
      tags: 'EdTech + UI Design',
      img: '/home/consultation/3.webp',
      bg: '#3fd0ff',
      desc: 'Developed digital tools and engaging print materials to elevate academic accessibility and learner experience.',
    },
    {
      name: 'Startups',
      tags: 'UX/UI + Web App',
      img: '/home/consultation/4.webp',
      bg: '#a259ff',
      desc: 'Built rapid MVPs with intuitive interfaces and branding to help startups launch and iterate quickly.',
    },
    {
      name: 'Portfolio Making',
      tags: 'B2C + B2B + D2C',
      img: '/home/consultation/5.webp',
      bg: '#ffe680',
      desc: 'Created visually compelling and responsive portfolio sites to highlight individual talent and creative work.',
    },
    {
      name: 'Self-Employed',
      tags: 'Web Presence + Optimization',
      img: '/home/consultation/6.webp',
      bg: '#ff6b35',
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.name}
            className="relative min-h-[500px] flex items-center group"
          >
            {/* Chevron background */}
            <div
              className="absolute left-0 top-0 w-full h-full z-0"
              style={{
                background: p.bg,
                clipPath:
                  'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%, 30% 50%)',
              }}
            />
            {/* Content (scales on hover) */}
            <div className="relative z-10 text-left p-8 w-full max-w-[300px] lg:left-12 flex flex-col items-start justify-end transition-transform duration-300 ml-10 group-hover:scale-110">
              <Image
                src={p.img}
                alt={p.name}
                width={1200}
                height={100}
                className="w-[250px] h-[250px]  object-cover  mb-6"
              />
              <h3 className="mt-0 mb-2 font-bold text-3xl">{p.name}</h3>
              <p className="text-sm text-black opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300 mb-2 h-0 group-hover:h-auto overflow-hidden">{p.desc}</p>
              <div className="text-xs font-semibold tracking-wider text-[#231942]">{p.tags}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BookConsultation