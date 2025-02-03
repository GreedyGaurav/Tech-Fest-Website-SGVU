import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Register = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const map = mapRef.current;
    const heading = section.querySelector("h2");

    // Ensure elements start hidden
    gsap.set([heading, form, map], { opacity: 0, y: 50 });

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(heading, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
        gsap.to(form, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
        });
        gsap.to(map, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
        });
      },
      onLeave: () => {
        gsap.set([heading, form, map], { opacity: 0, y: 50 }); // Reset elements when out of view
      },
      onEnterBack: () => {
        gsap.to(heading, { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
        gsap.to(form, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
        });
        gsap.to(map, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.3,
        });
      },
      onLeaveBack: () => {
        gsap.set([heading, form, map], { opacity: 0, y: 50 }); // Reset when scrolling back up
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="location"
      className="py-20 section bg-gradient-to-b from-cosmic-900 to-space-900"
    >
      <div className="container px-4 mx-auto">
      <h2 className="mb-12 text-4xl font-bold text-center text-white sm:text-5xl">
          Event Location 
        </h2>
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* <form
            ref={formRef}
            className="flex-1 p-8 rounded-lg shadow-lg bg-space-800"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-cosmic-300">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 text-white border rounded-md bg-space-700 border-cosmic-600 focus:outline-none focus:border-cosmic-400"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-cosmic-300">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 text-white border rounded-md bg-space-700 border-cosmic-600 focus:outline-none focus:border-cosmic-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white transition duration-300 transform rounded-md bg-cosmic-600 hover:bg-cosmic-700 hover:scale-105"
            >
              Register Now
            </button>
          </form> */}
          <div
            ref={mapRef}
            className="flex-1 p-8 rounded-lg shadow-lg bg-space-800"
          >
            <h3 className="mb-4 text-xl font-semibold text-cosmic-300">
              Suresh Gyan Vihar University
            </h3>
            <div className="w-full h-[400px] lg:h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.940830281869!2d75.85767039678957!3d26.810012599999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc832568c7fad%3A0xede86f1902a9ce10!2sSuresh%20Gyan%20Vihar%20University!5e0!3m2!1sen!2sin!4v1738132160628!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Suresh Gyan Vihar University Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
