import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

// Just use the image paths for the carousel
const testimonialImages = [
    "/testi/2.png",
    "/testi/3.png",
    "/testi/2.png",
    "/testi/3.png",
    "/testi/2.png",
    "/testi/3.png",
];

const firstRow = testimonialImages.slice(0, testimonialImages.length / 2);
// const secondRow = testimonialImages.slice(testimonialImages.length / 2);

// Simple image component for the carousel
const TestimonialImage = ({ src }: { src: string }) => {
    return (
        <div className="relative h-[500px] w-[500px] mx-4 overflow-hidden rounded-xl">
            <Image 
                src={src} 
                alt="Testimonial" 
                fill 
                className="object-contain"
            />
        </div>
    );
};

export function Testimonials() {
    return (
        <section className="overflow-hidden mt-[-20px] p-4 text-center">
            <div className="relative flex w-full flex-col items-center justify-center py-8 gap-0">
                <p className="uppercase tracking-wider text-sm font-semibold">Happy Clients</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2">
                Why They Believe in Us?
                </h2>
                <div className="w-full">
                    <Marquee className="[--duration:20s]" pauseOnHover={true}>
                        {firstRow.map((img, index) => (
                            <TestimonialImage key={index} src={img} />
                        ))}
                    </Marquee>
                </div>

                {/* <div className="w-full mt-2">
                    <Marquee className="[--duration:15s]" pauseOnHover={true} reverse={true}>
                        {secondRow.map((img, index) => (
                            <TestimonialImage key={index} src={img} />
                        ))}
                    </Marquee>
                </div> */}

                {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white z-10"></div> */}
            </div>
        </section>
    );
}
