"use client";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// List of all 30 images
const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/11.jpg",
  "/images/gallery/12.jpg",
  "/images/gallery/13.jpg",
  "/images/gallery/14.jpg",
  "/images/gallery/15.jpg",
  "/images/gallery/16.jpg",
  "/images/gallery/17.jpg",
  "/images/gallery/18.jpg",
  "/images/gallery/19.jpg",
  "/images/gallery/20.jpg",
  "/images/gallery/21.jpg",
  "/images/gallery/22.jpg",
  "/images/gallery/23.jpg",
  "/images/gallery/24.jpg",
  "/images/gallery/25.jpg",
  "/images/gallery/26.jpg",
  "/images/gallery/27.jpg",
  "/images/gallery/28.jpg",
  "/images/gallery/29.jpg",
  "/images/gallery/30.jpg",
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((i) => (i + 1) % images.length);

  return (
    <section className="py-16 bg-gray-50">
      {/* Carousel */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full cursor-pointer flex justify-center"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="max-h-96 md:max-h-[500px] object-contain rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Carousel Arrows */}
        <button
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 rounded-full p-4 hover:bg-black/70 transition"
          onClick={prev}
        >
          <ChevronLeft size={48} color="#D4AF37" />
        </button>
        <button
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 rounded-full p-4 hover:bg-black/70 transition"
          onClick={next}
        >
          <ChevronRight size={48} color="#D4AF37" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === currentIndex ? "bg-[#D4AF37]" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setLightboxOpen(false)}
          >
            <X size={32} />
          </button>

          {/* Left / Right */}
          <button
            className="absolute left-6 bg-black/50 rounded-full p-2 hover:bg-black/70"
            onClick={prev}
          >
            <ChevronLeft size={48} color="#D4AF37" />
          </button>
          <img
            src={images[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-h-[90vh] max-w-full md:max-w-[80vw] rounded-lg shadow-2xl object-contain"
          />
          <button
            className="absolute right-6 bg-black/50 rounded-full p-2 hover:bg-black/70"
            onClick={next}
          >
            <ChevronRight size={48} color="#D4AF37" />
          </button>
        </div>
      )}
    </section>
  );
}
