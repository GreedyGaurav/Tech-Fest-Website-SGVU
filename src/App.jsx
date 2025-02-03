/* eslint-disable no-unused-vars */
import React, { useEffect, useState, lazy, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AnimatedBackground from "./components/AnimatedBackground";
import LoadingSpinner from "./components/LoadingSpinner";
import Footer from "./components/Footer"; // Import the Footer component

gsap.registerPlugin(ScrollTrigger);

const About = lazy(() => import("./components/About"));
const Team = lazy(() => import("./components/Team"));
const Venue = lazy(() => import("./components/Venue"));
const Register = lazy(() => import("./components/Register"));
const EventDetails = lazy(() => import("./components/EventDetails")); // Lazy loading EventDetails

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".section");
    sections.forEach((section) => {
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
    ScrollTrigger.refresh();
  }, []);

  const handleViewChange = (view, event = null) => {
    setCurrentView(view);
    setSelectedEvent(event);
  };

  return (
    <div className="relative min-h-screen font-sans text-white">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          {currentView === "home" && (
            <>
              <Home />
              <Suspense fallback={<LoadingSpinner />}>
                <About />
                <Venue
                  onEventInfoClick={(event) =>
                    handleViewChange("details", event)
                  }
                />
                <Register />
                {/* <Contact /> */}
              </Suspense>
            </>
          )}

          {currentView === "details" && selectedEvent && (
            <Suspense fallback={<LoadingSpinner />}>
              <EventDetails
                event={selectedEvent}
                onBack={() => handleViewChange("home")}
              />
            </Suspense>
          )}
        </main>
        <Suspense fallback={<LoadingSpinner />}>
          <Team />
        </Suspense>
        <Footer /> {/* Include the Footer component */}
      </div>
    </div>
  );
}

export default App;
