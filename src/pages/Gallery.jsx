import { useEffect, useState } from "react";
import gallery from "../data/gallery.json";

export default function Gallery() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500); // simulasi loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-xl font-semibold mb-4">Galeri</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`
                  bg-gray-200 animate-pulse rounded-xl
                  ${i % 6 === 0 ? "md:col-span-2 md:row-span-2" : ""}
                `}
              />
            ))
          : gallery.images.map((img, index) => (
              <div
                key={index}
                className={`
                  relative overflow-hidden rounded-xl
                  group
                  ${index % 6 === 0 ? "md:col-span-2 md:row-span-2" : ""}
                `}
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
      </div>
    </div>
  );
}
