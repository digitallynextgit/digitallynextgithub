"use client"


export default function Banner() {
  return (
    <section className="relative inset-0 w-screen h-screen  flex items-center justify-center overflow-hidden ">

      {/* Center: Banner Text and CTA */}
      <div className="relative  flex flex-col items-center mt-[10vw]">
        <h1 className="text-[20vw] md:text-[14vw] font-extrabold text-[#E10600] text-center leading-none tracking-tight drop-shadow-lg font-[serif]">
          WHAT<br />WE DO
        </h1>
        <a
          href="#services-list"
          className="mt-10 text-lg text-center font-bold underline underline-offset-4 text-[#E10600] hover:text-white hover:bg-[#E10600] px-4 py-2 rounded transition-all"
        >
          CHECK OUT OUR SERVICES ↘
        </a>
      </div>
    </section>
  );
}
