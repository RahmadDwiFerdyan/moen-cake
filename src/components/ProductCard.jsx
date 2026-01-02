export default function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        flex flex-col
        bg-white
        rounded-sm
        cursor-pointer transition-all
        group duration-300 ring-1 ring-transparent hover:ring-2 hover:ring-primary hover:shadow-md hover:-translate-y-0.5
      "
    >
      {/* IMAGE */}
      <img
        src={product.thumbnail}
        alt={product.name}
        className="
          object-cover
          w-full h-48
          rounded-t-sm
        "
      />

      {/* CONTENT */}
      <div
        className="
          flex flex-col flex-1
          p-3
        "
      >
        <h3
          className="
            font-medium text-xl leading-snug
          "
        >
          {product.name}
        </h3>

        <p
          className="
            mt-1
            text-primary font-bold text-xl
          "
        >
          Rp {product.variants[0].price}
        </p>

        {/* <p
          className="
            mt-1
            text-sm text-gray-500
            line-clamp-2
          "
        >
          {product.variants[0].description}
        </p> */}

        {/* PUSH TO BOTTOM */}
        <div
          className="
            flex
            mt-auto pt-4
            justify-center
          "
        >
          <span
            className="
              inline-flex
              text-sm font-medium text-gray-500
              items-center gap-1 group-hover:text-primary transition
            "
          >
            Lihat variasi harga
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="
                w-3 h-3
                transition-transform
                group-hover:translate-x-1
              "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
