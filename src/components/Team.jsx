/* eslint-disable no-unused-vars */
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaLinkedin } from "react-icons/fa"; // LinkedIn icon

const teamMembers = [
  {
    name: "Kavya Sinsinwar",
    role: "CSE Final Year",
    image: "/assets/images/kavya.jpg",
    linkedinUrl: "https://www.linkedin.com/in/kavya-sinsinwar-a80b52283",
  },
  {
    name: "Gaurav Sharma",
    role: "CSE Final Year",
    image: "/assets/images/gaurav.jpg",
    linkedinUrl: "https://www.linkedin.com/in/greedygaurav",
  },
  {
    name: "Ayush Kumar",
    role: "CSE Final Year",
    image: "/assets/images/ayush.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ayushk1203",
  },

  {
    name: "Ekta Verma",
    role: "CSE Final Year",
    image: "/assets/images/ekta.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ekta03",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-12 bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold text-white sm:text-5xl">
            Web Team
          </h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative text-center group">
                <Avatar className="w-20 h-20 mx-auto mb-2">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="font-medium text-white">{member.name}</p>
                <p className="text-sm text-gray-400">{member.role}</p>

                {/* LinkedIn Icon Appears on Hover */}
                <a
                  href={member.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-lg bg-opacity-80 group-hover:bg-blue-600 group-hover:opacity-90">
                    <FaLinkedin className="text-2xl text-blue-600 group-hover:text-white" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
