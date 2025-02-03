/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 30%",
        toggleActions: "play none none none",
        scrub: 0.5,
        markers: false,
        once: true,
      },
    });

    timeline
      .fromTo(
        section.querySelectorAll(".content-block h3"),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.2,
        }
      )
      .fromTo(
        section.querySelectorAll(".content-block p"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          stagger: 0.2,
        },
        "-=0.5"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 section">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
      <h2 className="mb-8 text-4xl font-bold text-center text-white sm:text-5xl">
            About The Event
          </h2>

        {/* First image with text */}
        <div className="flex flex-col items-center justify-between space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
          <div className="space-y-6 lg:w-1/2">
            <img
              src="/assets/images/fest1.jpg"
              alt="India is Innovating Event"
              className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            />
            <p className="mt-4 text-sm italic text-center text-blue-300 transition-colors duration-300 sm:text-base hover:text-blue-100">
              Experience the future of innovation at our event
            </p>
          </div>
          <div className="space-y-6 lg:w-1/2">
            <div className="content-block">
              <h3 className="mb-3 text-xl font-semibold text-blue-200 transition-colors duration-300 sm:text-2xl hover:text-blue-100">
                Innovating for Tomorrow
              </h3>
              <p className="text-base text-blue-200 transition-colors duration-300 sm:text-lg hover:text-blue-100">
                "India is Innovating" is a prestigious event showcasing the
                cutting-edge innovations and technological advancements emerging
                from India. This event brings together brilliant minds, industry
                leaders, and visionaries to explore the future of technology and
                its impact on society.
              </p>
            </div>
          </div>
        </div>

        {/* Second image with text */}
        <div className="flex flex-col items-center justify-between mt-16 space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
          <div className="space-y-6 lg:w-1/2">
            <div className="content-block">
              <h3 className="mb-3 text-xl font-semibold text-blue-200 transition-colors duration-300 sm:text-2xl hover:text-blue-100">
                A Hub of Creativity
              </h3>
              <p className="text-base text-blue-200 transition-colors duration-300 sm:text-lg hover:text-blue-100">
                Join us for an inspiring journey through India's innovation
                landscape, featuring keynote speeches, panel discussions, and
                interactive exhibitions that highlight the country's
                contributions to global progress.
              </p>
            </div>
          </div>
          <div className="space-y-6 lg:w-1/2">
            <img
              src="/assets/images/fest2.jpg"
              alt="India is Innovating Event"
              className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            />
            <p className="mt-4 text-sm italic text-center text-blue-300 transition-colors duration-300 sm:text-base hover:text-blue-100">
              Discover groundbreaking ideas in the tech industry
            </p>
          </div>
        </div>

        {/* Third image with text */}
        <div className="flex flex-col items-center justify-between mt-16 space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
          <div className="space-y-6 lg:w-1/2">
            <img
              src="/assets/images/fest3.jpg"
              alt="India is Innovating Event"
              className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            />
            <p className="mt-4 text-sm italic text-center text-blue-300 transition-colors duration-300 sm:text-base hover:text-blue-100">
              Be part of the next big leap in innovation
            </p>
          </div>
          <div className="space-y-6 lg:w-1/2">
            <div className="content-block">
              <h3 className="mb-3 text-xl font-semibold text-blue-200 transition-colors duration-300 sm:text-2xl hover:text-blue-100">
                Networking Opportunities
              </h3>
              <p className="text-base text-blue-200 transition-colors duration-300 sm:text-lg hover:text-blue-100">
                Connect with like-minded innovators, potential collaborators,
                and industry experts. Our event provides ample networking
                opportunities to foster partnerships and drive innovation
                forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
