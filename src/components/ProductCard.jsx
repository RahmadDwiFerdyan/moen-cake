export default function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        bg-white
        rounded-sm
        cursor-pointer transition-all
        duration-300 ring-1 ring-transparent hover:ring-2 hover:ring-primary hover:shadow-md group hover:-translate-y-0.5
      "
    >
      <img
        src={product.thumbnail}
        alt={product.name}
        className="
          object-cover
          w-full h-48
          rounded-t-sm
        "
      />

      <div
        className="
          p-4
        "
      >
        <h3
          className="
            font-medium text-xl text-gray-700
          "
        >
          {product.name}
        </h3>

        <p
          className="
            mt-1
            text-primary text-2xl font-bold
          "
        >
          Rp {product.variants[0].price}
        </p>
        <p
          className="
            mt-1
            text-gray-500 text-xs font-medium
          "
        >
          {product.variants[0].description}
        </p>

        <div
          className="
            flex
            mt-6
            justify-center
          "
        >
          <span
            className="
              inline-flex
              text-sm font-medium text-gray-500
              transition-all
              items-center gap-1 duration-200 group-hover:text-primary
            "
          >
            Lihat variasi harga
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="
                w-4 h-4
                transition-transform
                duration-200 group-hover:translate-x-1
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
