// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const EventRegistration = () => {
//   const sectionRef = useRef(null);
//   const [purchaseHistory, setPurchaseHistory] = useState(null);

//   // Simulating fetch data after registration (e.g., from API or database)
//   const fetchPurchaseHistory = () => {
//     // Simulated purchase history data
//     const history = [
//       { id: 1, eventName: "Tech Conference 2025", date: "2025-02-01", amount: "$100" },
//       { id: 2, eventName: "Developer Summit", date: "2025-03-15", amount: "$150" },
//     ];
//     setPurchaseHistory(history);
//   };

//   useEffect(() => {
//     fetchPurchaseHistory(); // Call the function to fetch purchase history

//     const section = sectionRef.current;
//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: section,
//         start: "top 80%",
//         end: "bottom 20%",
//         toggleActions: "play none none reverse", // Play on scroll enter, reverse on leave
//         scrub: true, // Smooth animation with scrolling
//         markers: false, // Set to true for debugging scroll triggers
//       },
//     });

//     // Fade and slide in animations for elements within the Event Registration section
//     timeline
//       .from(section.querySelector("h2"), {
//         opacity: 0,
//         y: 50,
//         duration: 0.8,
//         ease: "power3.out",
//       })
//       .from(
//         section.querySelector(".purchase-history"),
//         {
//           opacity: 0,
//           x: -100,
//           scale: 0.95,
//           duration: 0.8,
//           ease: "power3.out",
//         },
//         "-=0.4" // Start this animation 0.4s before the previous one finishes
//       );
//   }, []);

//   return (
//     <section ref={sectionRef} id="event-registration" className="py-20 text-white bg-blue-900 section">
//       <div className="container px-6 mx-auto">
//         <h2 className="mb-12 text-3xl font-bold text-center text-blue-100 sm:text-4xl">
//           Event Registration and Purchase History
//         </h2>
//         <div className="flex flex-col gap-12 lg:flex-row">
//           <div className="lg:w-1/2">
//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="name" className="block mb-2 text-blue-200">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full px-4 py-2 text-white bg-blue-800 border border-blue-700 rounded-md focus:border-blue-500 focus:outline-none"
//                   required
//                   disabled
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-2 text-blue-200">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full px-4 py-2 text-white bg-blue-800 border border-blue-700 rounded-md focus:border-blue-500 focus:outline-none"
//                   required
//                   disabled
//                 />
//               </div>
//               <button
//                 type="button"
//                 className="w-full px-6 py-3 text-lg font-semibold text-white transition duration-300 transform bg-blue-500 rounded-full hover:bg-blue-600 hover:scale-105"
//                 onClick={() => alert("Event Registered!")}
//               >
//                 Register for Event
//               </button>
//             </div>
//           </div>

//           {/* Purchase History */}
//           <div className="lg:w-1/2">
//             <div className="purchase-history h-full min-h-[300px] rounded-lg overflow-hidden bg-blue-800 p-4">
//               <h3 className="text-xl font-bold text-blue-100">Purchase History</h3>
//               {purchaseHistory ? (
//                 <ul className="space-y-4 mt-4 text-blue-200">
//                   {purchaseHistory.map((purchase) => (
//                     <li key={purchase.id} className="flex justify-between">
//                       <span>{purchase.eventName}</span>
//                       <span>{purchase.date}</span>
//                       <span>{purchase.amount}</span>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-blue-200">No purchase history found.</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventRegistration;
