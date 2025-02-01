import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

gsap.registerPlugin(ScrollTrigger);

const teamCategories = [
  {
    title: "CHIEF-PATRON",
    members: [
      { name: "Shri Sunil Sharma", role: "(Chairman)" },
      { name: "Dr. Sudhanshu", role: "(Chief Mentor)" },
    ],
  },
  {
    title: "PATRON",
    members: [{ name: "Hon'ble President", role: "Dr. Arunansu Haldar" }],
  },
  {
    title: "CO-PATRON",
    members: [{ name: "Hon'ble Pro-President", role: "Dr. Ritu Gilhotra" }],
  },
  {
    title: "ORGANIZING COMMITTEE",
    members: [
      { name: "Prof.(Dr.) Manish Sharma", role: "(Organizing Secretary)" },
      { name: "Prof.(Dr.) A.S. Shekhawat" },
      { name: "Prof.(Dr.) Gaurav Sharma" },
      { name: "Prof.(Dr.) Shruti Tiwari" },
      { name: "Prof.(Dr.) Suraj Singh" },
      { name: "Prof.(Dr.) Mukesh Gupta" },
      { name: "Prof.(Dr.) Kingshuk" },
      { name: "Prof.(Dr.) Gaurav Agarwal" },
      { name: "Prof.(Dr.) Hitesh Kinger" },
      { name: "Prof.(Dr.) Nagendra Sawarnkar" },
      { name: "Prof.(Dr.) Neeraj Kumar" },
      { name: "Prof.(Dr.) Sandhya Sharma" },
      { name: "Prof.(Dr.) Ravindra Budania" },
    ],
  },
  {
    title: "CONTACT US",
    members: [
      { name: "Mr. Zaid Khan - 7870048760" },
      { name: "Ketan Bhaskar - 6201519951" },
      { name: "Raj Gaurav - 9341547640" },
    ],
  },
  {
    title: "Technical",
    members: [
      {
        name: "Kavya Sinsinwar",
        role: "Developer",
        image: "/assets/images/kavya.jpg",
      },
      {
        name: "Gaurav Sharma",
        role: "Developer",
        image: "/assets/images/gaurav.jpg",
      },
      {
        name: "Ayush Kumar",
        role: "Developer",
        image: "/assets/images/ayush.jpg",
      },
      {
        name: "Ekta Verma",
        role: "Developer",
        image: "/assets/images/ekta.jpg",
      },
    ],
  },
];

const Team = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const categories = gsap.utils.toArray(
      section.querySelectorAll(".team-category")
    );

    categories.forEach((category) => {
      const members = category.querySelectorAll(".team-member");

      gsap.to(category, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: category,
          start: "top 80%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
          scrub: 0.3,
        },
      });

      gsap.to(members, {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: category,
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
          scrub: 0.3,
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="team"
      className="min-h-screen py-12 bg-gray-900"
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <div className="mb-12 text-center">
            <h2 className="mb-12 text-4xl font-bold text-center text-white sm:text-5xl">
              Our <u>Team</u>
            </h2>
          </div>

          {/* Chief Patron Section */}
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-xl font-bold">CHIEF-PATRON</h3>
            <div className="flex justify-center gap-20">
              <div>
                <p className="font-medium">Shri Sunil Sharma</p>
                <p className="text-sm">(Chairman)</p>
              </div>
              <div>
                <p className="font-medium">Dr. Sudhanshu</p>
                <p className="text-sm">(Chief Mentor)</p>
              </div>
            </div>
          </div>

          {/* Patron Section */}
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-xl font-bold">PATRON</h3>
            <p className="font-medium">Hon'ble President</p>
            <p className="text-sm">Dr. Arunansu Haldar</p>
          </div>

          {/* Co-Patron Section */}
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-xl font-bold">CO-PATRON</h3>
            <p className="font-medium">Hon'ble Pro-President</p>
            <p className="text-sm">Dr. Ritu Gilhotra</p>
          </div>

          {/* Organizing Committee */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-center">
              ORGANIZING COMMITTEE
            </h3>
            <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-3">
              {teamCategories[3].members.map((member, index) => (
                <div key={index} className="mb-2">
                  <p className="text-sm">{member.name}</p>
                  {member.role && <p className="text-xs">{member.role}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-bold text-center">CONTACT US</h3>
            <div className="flex items-center justify-between px-4">
              <p className="text-sm">{teamCategories[4].members[0].name}</p>
              <p className="text-sm">{teamCategories[4].members[1].name}</p>
              <p className="text-sm">{teamCategories[4].members[2].name}</p>
            </div>
          </div>

          {/* Technical Team */}
          {teamCategories[5].title === "Technical" && (
            <div className="mb-8">
              <h3 className="mb-4 text-xl font-bold text-center">
                Technical Team
              </h3>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {teamCategories[5].members.map((member, index) => (
                  <div key={index} className="text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-2">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <p className="font-medium">{member.name}</p>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
