"use client";

export default function Footer() {
  return (
    <footer className="bg-[#222222] text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About / Address */}
        <div>
          <h3 className="text-xl font-bold mb-2">Evelyn's Hair Salon</h3>
          <p className="text-gray-300 mb-1">
            Pretty Boutique Evelyn Castano
          </p>
          <p className="text-gray-300 mb-1">
            1565 W Main St, Lewisville, TX 75067, Suite 425 #26
          </p>
        </div>

        {/* Hours */}
        <div>
          <h3 className="text-xl font-bold mb-2">Hours</h3>
          <p className="text-gray-300 mb-1">Tue-Fri: 10 AM - 5 PM</p>
          <p className="text-gray-300 mb-1">Sat: 9 AM - 5 PM</p>
          <p className="text-gray-300 mb-1">Sun & Mon: Closed</p>
          <p className="text-gray-300 mt-2">By appointment only</p>
        </div>

        {/* Contact / Call to Action */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <div className="flex flex-col sm:flex-row sm:justify-center md:flex-col gap-2">
            <a
              href="tel:+12148700515"
              className="bg-[#D4AF37] text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition shadow"
            >
              📞 Call
            </a>
            <a
              href="sms:+12148700515"
              className="bg-[#D4AF37] text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition shadow"
            >
              💬 Text
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Evelyn's Hair Salon. All rights reserved.
      </div>
    </footer>
  );
}
