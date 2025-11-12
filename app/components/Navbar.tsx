"use client";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold text-gray-900">
        Evelyn
      </Link>
      <div className="flex gap-3">
        <a
          href="tel:+1234567890"
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          <Phone size={18} />
          Call
        </a>
        <a
          href="sms:+1234567890"
          className="flex items-center gap-2 bg-gray-200 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          <MessageCircle size={18} />
          Text
        </a>
      </div>
    </nav>
  );
}
