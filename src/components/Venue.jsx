import React, { useEffect, useRef } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    id: 1,
    title: "BGMI Gaming",
    location: "SGVU",
    description:
      "Participate in a 24-hour IoT hackathon and build smart solutions.",
    time: "5:00 PM - 6:00 PM",
    registerUrl: "https://iothackathon.com/register",
    imageUrl: "/assets/images/3.avif",
    details: "Detailed information about the IoT Hackathon...",
  },
  {
    id: 2,
    title: "Project and Model Expo",
    location: "SGVU",
    description:
      "Learn about cutting-edge AI technologies from industry experts.",
    time: "10:00 AM - 12:00 PM",
    registerUrl:
      "https://unstop.com/p/code-crunch-india-is-innovating-suresh-gyan-vihar-university-1380259",
    imageUrl: "/assets/images/1.avif",
    details: "Detailed information about the AI Innovation Workshop...",
  },
  {
    id: 3,
    title: "Innovative Ideas",
    location: "SGVU",
    description: "Showcase your robotics skills and win exciting prizes.",
    time: "2:00 PM - 4:00 PM",
    registerUrl: "https://roboticscompetition.com/register",
    imageUrl: "/assets/images/2.jpg",
    details: "Detailed information about the Robotics Competition...",
  },

  {
    id: 4,
    title: "Robotics Competition",
    location: "SGVU",
    description:
      "Participate in a 24-hour IoT hackathon and build smart solutions.",
    time: "5:00 PM - 6:00 PM",
    registerUrl: "https://iothackathon.com/register",
    imageUrl: "/assets/images/4.jpg",
    details: "Detailed information about the IoT Hackathon...",
  },
  {
    id: 5,
    title: "Code Crunch",
    location: "SGVU",
    description:
      "Participate in a 24-hour IoT hackathon and build smart solutions.",
    time: "5:00 PM - 6:00 PM",
    registerUrl: "https://iothackathon.com/register",
    imageUrl: "/assets/images/5.png",
    details: "Detailed information about the IoT Hackathon...",
  },
  {
    id: 6,
    title: "Poster Maker",
    location: "SGVU",
    description:
      "Participate in a 24-hour IoT hackathon and build smart solutions.",
    time: "5:00 PM - 6:00 PM",
    registerUrl: "https://iothackathon.com/register",
    imageUrl: "/assets/images/6.png",
    details: "Detailed information about the IoT Hackathon...",
  },
  {
    id: 7,
    title: "Flavour of India",
    location: "Room C, Innovation Center",
    description:
      "Participate in a 24-hour IoT hackathon and build smart solutions.",
    time: "5:00 PM - 6:00 PM",
    registerUrl: "https://iothackathon.com/register",
    imageUrl: "/assets/images/7.jpg",
    details: "Detailed information about the IoT Hackathon...",
  },
  {
    id: 8,
    title: "Waste to Worth",
    location: "SGVU",
    description:
      "Participate in a 24-hour IoT hackathon and build smart solutions.",
    time: "5:00 PM - 6:00 PM",
    registerUrl: "https://iothackathon.com/register",
    imageUrl: "/assets/images/8.png",
    details: "Detailed information about the IoT Hackathon...",
  },
  {
    id: 9,
    title: "Rider Mania",
    location: "SGVU",
    description:
      "Participate in a 24-hour IoT hackathon and build smart solutions.",
    time: "5:00 PM - 6:00 PM",
    registerUrl: "https://iothackathon.com/register",
    imageUrl: "/assets/images/9.webp",
    details: "Detailed information about the IoT Hackathon...",
  },
  {
    id: 10,
    title: "Character Design Competition",
    location: "SGVU",
    description:
      "Participate in a 24-hour IoT hackathon and build smart solutions.",
    time: "5:00 PM - 6:00 PM",
    registerUrl: "https://iothackathon.com/register",
    imageUrl: "/assets/images/10.jpg",
    details: "Detailed information about the IoT Hackathon...",
  },
  {
    id: 11,
    title: "Bridge Building Competition",
    location: "SGVU",
    description:
      "Participate in a 24-hour IoT hackathon and build smart solutions.",
    time: "5:00 PM - 6:00 PM",
    registerUrl: "https://iothackathon.com/register",
    imageUrl: "/assets/images/11.webp",
    details: "Detailed information about the IoT Hackathon...",
  },
  {
    id: 12,
    title: "3D Printing Design",
    location: "SGVU",
    description:
      "Participate in a 24-hour IoT hackathon and build smart solutions.",
    time: "5:00 PM - 6:00 PM",
    registerUrl: "https://iothackathon.com/register",
    imageUrl: "/assets/images/12.png",
    details: "Detailed information about the IoT Hackathon...",
  },
];

const Venue = ({ onEventInfoClick }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (section) {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top center",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} id="events" className="min-h-screen py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="mb-12 text-4xl font-bold text-center text-white sm:text-5xl">
          Explore Our Exciting Events
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden shadow-lg transform bg-black hover:scale-105 hover:shadow-2xl transition-transform duration-300 text-blue-100"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="object-cover w-full h-48"
              />
              <CardHeader className="p-6">
                <CardTitle className="text-2xl font-semibold">
                  {event.title}
                </CardTitle>
                <p className="mt-2 text-blue-200">{event.location}</p>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4">{event.description}</p>
                <p className="font-semibold text-blue-300">
                  Time: {event.time}
                </p>
              </CardContent>
              <CardFooter className="p-6 flex gap-4">
                <Button
                  className="w-full py-2 text-sm font-medium bg-blue-600 rounded hover:bg-blue-700"
                  onClick={() => window.open(event.registerUrl, "_blank")}
                >
                  Register Now
                </Button>
                <Button
                  className="w-full py-2 text-sm font-medium bg-gray-700 rounded hover:bg-gray-800"
                  onClick={() => onEventInfoClick(event)}
                >
                  More Info
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Venue;
