"use client";

import services from "./services.json";

export default function Services() {
  return (
    <section className="py-20 bg-[#F9F9F9] text-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-[#222222]">
          Professional Hair Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              {/* Accent bar */}
              <div className="w-12 h-1 bg-[#D4AF37] mb-4 mx-auto rounded-full" />

              <h3 className="text-2xl font-semibold mb-4 text-[#222222]">{service.name}</h3>
              <p className="text-gray-700 mb-8">{service.description}</p>

              <a
                href="tel:+1234567890"
                className="inline-block px-6 py-3 bg-[#222222] text-white font-semibold rounded-full shadow-md hover:bg-[#D4AF37] transition-colors duration-300"
              >
                Book Now
              </a>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#D4AF37] transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
