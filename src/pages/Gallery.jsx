import gallery from "../data/gallery.json";

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-xl font-semibold mb-4">Galeri</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[200px] gap-4">
        {gallery.images.map((img, index) => (
          <div
            key={index}
            className={`
              relative overflow-hidden rounded-xl group
              ${index % 6 === 0 ? "md:col-span-2 md:row-span-2" : ""}
            `}
          >
            <img
              src={img}
              alt="Gallery"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                Lihat Foto
              </span>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
