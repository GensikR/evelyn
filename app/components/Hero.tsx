"use client";

export default function Hero() {
  return (
    <section className="relative w-full h-screen">
      {/* Hero Image */}
      <img
        src="/images/landing.png"
        alt="Evelyn Hair Studio"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-6 text-center text-white">
        {/* Salon Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
          Evelyn's Hair Salon
        </h1>

        {/* Boutique Info */}
        <p className="text-lg md:text-xl drop-shadow-md max-w-md mb-2">
          Pretty Boutique Evelyn Castano
        </p>
        <p className="text-sm md:text-base drop-shadow-md max-w-md mb-4">
          1565 W Main St, Lewisville, TX 75067, Suite 425 #26
        </p>

        {/* Phone / Appointment */}
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <a
            href="tel:+12148700515"
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition shadow"
          >
            📞 Call
          </a>
          <a
            href="sms:+12148700515"
            className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition shadow"
          >
            💬 Text
          </a>
        </div>

        {/* Hours & Promo */}
        <p className="text-sm md:text-base drop-shadow-md mb-1">
          Closed Sunday & Monday | Open Tue-Fri 10 AM - 5 PM | Sat 9 AM - 5 PM
        </p>
        <p className="text-sm md:text-base drop-shadow-md mb-4">
          By appointment only
        </p>

        {/* First-time promo */}
        <div className="bg-[#D4AF37]/90 text-gray-900 px-4 py-2 rounded-full font-semibold shadow-lg">
          15% off your first service!
        </div>
      </div>
    </section>
  );
}
