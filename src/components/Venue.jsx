/* eslint-disable react/prop-types */
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
      "Join the ultimate BGMI gaming showdown! Compete, conquer, and claim victory in an intense battle for glory!",
    time: "9:00 AM - 5:00 PM",
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScGlsHrmDRQxgK2SArAVXilc8iWEvGexKwl50kM4b_14-MdjA/viewform",
    imageUrl: "/assets/images/3.avif",
    details: "Step into the world of BGMI and compete in an adrenaline-pumping tournament! Players will showcase their strategic thinking, sharp reflexes, and teamwork to secure a place at the top. Whether you're a pro or a beginner, join for a fun-filled battle for the ultimate victory!",
  },
  {
    id: 2,
    title: "Project and Model Expo",
    location: "SGVU",
    description:
      "Showcase your innovation at the Project & Model Expo! Present your ideas, inspire minds, and demonstrate creativity.",
    time: "9:00 AM - 05:00 PM",
    registerUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScGlsHrmDRQxgK2SArAVXilc8iWEvGexKwl50kM4b_14-MdjA/viewform",
    imageUrl: "/assets/images/1.avif",
    details: "The Project and Model Expo is an opportunity for students to showcase their innovative creations. Whether it's a technical project or a creative model, participants will present their ideas and prototypes, demonstrating their ingenuity. It's a platform to explore new technologies, exchange ideas, and inspire others.",
  },
  {
    id: 3,
    title: "Innovative Ideas",
    location: "SGVU",
    description: "Unleash creativity at the Innovative Ideas event! Present groundbreaking concepts and inspire the future with your vision.",
    time: "9:00 AM - 5:00 PM",
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScGlsHrmDRQxgK2SArAVXilc8iWEvGexKwl50kM4b_14-MdjA/viewform",
    imageUrl: "/assets/images/2.jpg",
    details: "The Innovative Ideas event invites participants to present creative and forward-thinking solutions to modern challenges. Whether it's technology, sustainability, or community-focused innovation, the event celebrates fresh ideas that have the potential to shape the future. This is your chance to turn your concepts into reality.",
  },

  {
    id: 4,
    title: "Robotics Competition",
    location: "SGVU",
    description:
      "Gear up for the Robotics Competition! Build, battle, and showcase your engineering skills in an exciting tech showdown.",
    time: "9:00 AM - 5:00 PM",
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScGlsHrmDRQxgK2SArAVXilc8iWEvGexKwl50kM4b_14-MdjA/viewform",
    imageUrl: "/assets/images/4.jpg",
    details: "In the Robotics Competition, teams will design, build, and program robots to perform specific tasks and challenges. It's a test of technical skill, teamwork, and creativity, where participants push the boundaries of engineering and robotics to create functional and innovative machines.",
  },
  {
    id: 5,
    title: "Code Crunch",
    location: "SGVU",
    description:
      "Test your coding skills at Code Crunch! Solve challenges, compete with the best, and prove your programming prowess.",
    time: "9:00 AM - 5:00 PM",
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScGlsHrmDRQxgK2SArAVXilc8iWEvGexKwl50kM4b_14-MdjA/viewform",
    imageUrl: "/assets/images/5.png",
    details: "Code Crunch is a coding challenge where participants tackle algorithmic puzzles and real-world problems using programming languages. The event is designed to test problem-solving abilities, speed, and coding proficiency in a competitive environment. Whether you're a beginner or a seasoned coder, it's the perfect platform to show off your skills.",
  },
  {
    id: 6,
    title: "Poster Maker",
    location: "SGVU",
    description:
      "Unleash your creativity in the Poster Maker contest! Design, inspire, and showcase your artistic vision.",
    time: "9:00 AM - 5:00 PM",
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScGlsHrmDRQxgK2SArAVXilc8iWEvGexKwl50kM4b_14-MdjA/viewform",
    imageUrl: "/assets/images/6.png",
    details: "The Poster Maker competition invites creative minds to design visually striking and informative posters on a chosen theme. Participants will use their design skills to communicate messages through impactful visuals, typography, and color schemes. It's a great way to explore digital and print media design.",
  },
  {
    id: 7,
    title: "Flavour of India",
    location: "SGVU",
    description:
      "Experience the rich flavors of India! Celebrate diverse cuisines, traditions, and cultural heritage in a delightful feast.",
    time: "9:00 AM - 5:00 PM",
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScGlsHrmDRQxgK2SArAVXilc8iWEvGexKwl50kM4b_14-MdjA/viewform",
    imageUrl: "/assets/images/7.jpg",
    details: "Flavour of India brings the rich diversity of Indian cuisine to life! Participants will showcase traditional and modern dishes from across the country, offering a taste of different cultures, flavors, and culinary techniques. It's a celebration of India’s food heritage, featuring everything from street food to gourmet delights.",
  },
  {
    id: 8,
    title: "Waste to Worth",
    location: "SGVU",
    description:
      "Turn trash into treasure at Waste to Worth! Showcase innovative ideas for recycling and sustainability.",
    time: "9:00 AM - 5:00 PM",
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScGlsHrmDRQxgK2SArAVXilc8iWEvGexKwl50kM4b_14-MdjA/viewform",
    imageUrl: "/assets/images/8.png",
    details: "Waste to Worth is all about sustainability and recycling. Participants will come up with creative solutions to transform waste materials into valuable products. The event promotes environmental consciousness and innovation in recycling, offering a platform to present ideas that reduce waste and promote sustainability.",
  },
  {
    id: 9,
    title: "Rider Mania",
    location: "SGVU",
    description:
      "Feel the thrill at Rider Mania! A celebration of speed, adventure, and the spirit of biking.",
    time: "9:00 AM - 5:00 PM",
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScGlsHrmDRQxgK2SArAVXilc8iWEvGexKwl50kM4b_14-MdjA/viewform",
    imageUrl: "/assets/images/9.webp",
    details: "Rider Mania is an exciting event for biking enthusiasts! Whether it's a race, stunt performance, or group ride, participants will show off their riding skills and passion for motorcycles. It’s a celebration of freedom, adventure, and the biking community, bringing together riders from all over.",
  },
  {
    id: 10,
    title: "Character Design Competition",
    location: "SGVU",
    description:
      "Bring your imagination to life at the Character Design Competition! Create, sketch, and showcase your unique characters.",
    time: "9:00 AM - 5:00 PM",
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScGlsHrmDRQxgK2SArAVXilc8iWEvGexKwl50kM4b_14-MdjA/viewform",
    imageUrl: "/assets/images/10.jpg",
    details: "The Character Design Competition invites artists to create unique, original characters for various media. Participants will use their imagination and artistic skills to design characters with distinct personalities, visual styles, and backstories. It’s a chance to bring your creations to life and showcase your design talent.",
  },
  {
    id: 11,
    title: "Bridge Building Competition",
    location: "SGVU",
    description:
      "Test your engineering skills at the Bridge Building Competition! Design, construct, and compete for the strongest and most innovative bridge.",
    time: "9:00 AM - 5:00 PM",
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScGlsHrmDRQxgK2SArAVXilc8iWEvGexKwl50kM4b_14-MdjA/viewform",
    imageUrl: "/assets/images/11.webp",
    details: "The Bridge Building Competition challenges participants to design and construct functional bridges using limited resources. The focus is on engineering, creativity, and problem-solving skills. Participants will test their bridges for strength, durability, and efficiency, competing for the title of the best-designed and strongest bridge.",
  },
  {
    id: 12,
    title: "3D Printing Design",
    location: "SGVU",
    description:
      "Unleash your creativity at the 3D Printing Design competition! Transform your ideas into reality with cutting-edge technology.",
    time: "9:00 AM - 5:00 PM",
    registerUrl: "https://docs.google.com/forms/d/e/1FAIpQLScGlsHrmDRQxgK2SArAVXilc8iWEvGexKwl50kM4b_14-MdjA/viewform",
    imageUrl: "/assets/images/12.png",
    details: "In the 3D Printing Design competition, participants will design models that are brought to life through 3D printing technology. It's an opportunity to explore the world of prototyping, digital fabrication, and design innovation. Whether it's art, engineering, or product design, this event showcases the potential of 3D printing to transform ideas into tangible objects.",
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
      <div className="container px-6 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center text-white sm:text-5xl">
          Explore Our Exciting Events
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden text-blue-100 transition-transform duration-300 transform bg-black shadow-lg hover:scale-105 hover:shadow-2xl"
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
              <CardFooter className="flex gap-4 p-6">
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
