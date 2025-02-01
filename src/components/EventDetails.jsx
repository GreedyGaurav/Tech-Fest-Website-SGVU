import React from "react";

const EventDetails = ({ event, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-blue-800 text-white flex flex-col items-center justify-center py-10">
      <div className="container mx-auto max-w-4xl p-6 bg-blue-950 rounded-lg shadow-lg">
        <button
          onClick={onBack}
          className="px-6 py-3 mb-6 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
        >
          ← Back to Events
        </button>
        <h1 className="text-5xl font-extrabold text-center mb-6">
          {event.title}
        </h1>
        <div className="relative">
          <img
            src={event.imageUrl}
            alt={event.title}
            className="w-full rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
        </div>
        <div className="mt-8">
          <p className="text-lg text-gray-300 leading-relaxed">
            {event.details}
          </p>
          <div className="mt-6 space-y-2">
            <p className="text-lg font-semibold">
              📍 Location:{" "}
              <span className="text-blue-300">{event.location}</span>
            </p>
            <p className="text-lg font-semibold">
              🕒 Time: <span className="text-blue-300">{event.time}</span>
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <a
              href={event.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-lg font-medium bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              Register for Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
