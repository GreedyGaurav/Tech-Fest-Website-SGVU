/* eslint-disable no-unused-vars */
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
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
  { name: "Ayush Kumar", role: "Developer", image: "/assets/images/ayush.jpg" },

  { name: "Ekta Verma", role: "Developer", image: "/assets/images/ekta.jpg" },
];

const Team = () => {
  return (
    <section id="team" className="py-12 bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-8 text-4xl font-bold text-white sm:text-5xl">
            Technical Team
          </h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-2">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <p className="font-medium text-white">{member.name}</p>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
