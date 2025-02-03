import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Home = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Basic fade-in and slide-up animation for the elements on the homepage
    gsap.fromTo(
      [titleRef.current, subtitleRef.current, buttonRef.current],
      {
        opacity: 0,
        y: 50, // Slide up from below
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5, // Duration of the animation
        stagger: 0.3, // Delay between the animations of the elements
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-space-900"
    >
      <div className="px-4 space-y-6 text-center">
        <h1
          ref={titleRef}
          className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-blue-200 to-purple-500"
        >
          India <span className="text-yellow-400">is</span> Innovating
        </h1>
        <p
          ref={subtitleRef}
          className="mb-8 text-lg text-white sm:text-xl md:text-2xl"
        >
          Explore the intersection of technology and space in India's innovation
          landscape
        </p>
        {/* <button
          ref={buttonRef}
          className="px-8 py-4 text-lg font-semibold text-white transition duration-300 transform rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
        >
          Launch Your Journey
        </button> */}
      </div>
    </section>
  );
};

export default Home;
