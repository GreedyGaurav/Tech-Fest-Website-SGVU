/* eslint-disable no-unused-vars */
import React, { useEffect, lazy, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AnimatedBackground from "./components/AnimatedBackground";
import LoadingSpinner from "./components/LoadingSpinner";
import Contact from "./components/Contact";

gsap.registerPlugin(ScrollTrigger);

const About = lazy(() => import("./components/About"));
const Team = lazy(() => import("./components/Team"));
const Events = lazy(() => import("./components/Events"));
const Register = lazy(() => import("./components/Register"));
const Venue = lazy(() => import("./components/Venue")); // Add Venue component

function App() {
  useEffect(() => {
    const sections = gsap.utils.toArray(".section");

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        animation: gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
        }),
        toggleActions: "play none none reverse",
      });
    });

    ScrollTrigger.refresh(); // Refresh ScrollTrigger when new elements are added
  }, []);

  return (
    <div className="relative min-h-screen font-sans text-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Home />
          <Suspense fallback={<LoadingSpinner />}>
            <About />
            <Team />
            {/* <Events /> */}
            <Venue />
            <Register />
            <Contact></Contact>
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default App;
