import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { useEffect } from "react";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.products.find((p) => p.id === id);
  const [variant, setVariant] = useState(product.variants[0]);

  useEffect(() => {
    setVariant(product.variants[0]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  return (
    <div
      className="
        py-6
        bg-white
      "
    >
      {/* BACK BUTTON */}
      <div
        className="
          max-w-5xl
          mx-auto mb-4 px-4
        "
      >
        <button
          onClick={() => navigate("/")}
          className="
            flex
            px-4 py-1
            text-gray-700
            bg-white
            rounded-lg border border-gray-300
            items-center gap-3 hover:bg-gray-100 transition
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="
              w-5 h-5
            "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>

          <span
            className="
              text-base font-medium
            "
          >
            Kembali ke katalog
          </span>
        </button>
      </div>

      {/* ================= DETAIL PRODUK ================= */}
      <div
        className="
          mx-auto px-4
          lg:max-w-5xl
        "
      >
        <div
          className="
            grid grid-cols-1
            gap-6
            lg:grid-cols-2
          "
        >
          {/* IMAGE */}
          <div>
            <div
              className="
                overflow-hidden
                bg-white
                rounded-xl
              "
            >
              <img
                src={variant.image}
                alt={product.name}
                className="
                  object-cover
                  w-full h-80 md:h-100
                "
              />
            </div>

            {/* Thumbnail */}
            <div
              className="
                flex
                mt-4
                gap-3
              "
            >
              {product.variants.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setVariant(v)}
                  className={`
                    overflow-hidden
                    w-12 h-12
                    rounded-sm border-2
                    ${v === variant ? "border-primary/90" : "border-gray-300"}
                  `}
                >
                  <img
                    src={v.image}
                    alt=""
                    className="
                      object-cover
                      w-full h-full
                    "
                  />
                </button>
              ))}
            </div>
          </div>

          {/* INFO */}
          <div>
            <h1
              className="
                text-2xl font-medium
              "
            >
              {product.name}
            </h1>
            <p
              className="
                mt-1
                text-2xl font-bold text-primary
              "
            >
              Rp{variant.price}
            </p>

            <div
              className="
                mt-4 space-y-3
              "
            >
              <p
                className="
                  text-sm font-medium
                "
              >
                Pilih varian harga
              </p>

              {product.variants.map((v, i) => (
                <button
                  key={i}
                  onClick={() => setVariant(v)}
                  className={`
                    flex
                    w-full
                    px-4 py-3
                    rounded-xl border
                    justify-between
                    ${
                      v === variant
                        ? "border-primary bg-primary/5 text-primary font-semibold"
                        : "border-gray-300 hover:border-primary/50"
                    }
                  `}
                >
                  <span
                    className="
                      text-xl font-semibold
                    "
                  >
                    Rp{v.price}
                  </span>
                  <span
                    className="
                      pl-8
                      text-right text-sm
                    "
                  >
                    {v.description}
                  </span>
                </button>
              ))}
            </div>

            <div
              className="
                flex
                mt-6
                justify-end
              "
            >
              <a
                href={`https://wa.me/6285795804537?text=${encodeURIComponent(
                  `Halo, saya ingin memesan produk berikut:

${product.name}
Harga: Rp ${variant.price}

Apakah bisa?`,
                )}`}
                target="_blank"
                className="
                  inline-flex
                  px-5 py-2.5
                  text-green-600 font-medium
                  rounded-full border border-green-500
                  items-center gap-2 hover:bg-green-50 transition
                "
              >
                Tanyakan lewat WA
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="
                    w-4 h-4
                  "
                >
                  <path d="M20.52 3.478A11.86 11.86 0 0 0 12.02 0C5.42 0 .06 5.37.06 12a11.93 11.93 0 0 0 1.62 6l-1.7 6.2 6.36-1.67a11.9 11.9 0 0 0 5.69 1.46h.01c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.52-8.49z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MENU LAINNYA ================= */}
      <div
        className="
          mt-16 py-10
          bg-gray-100
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto px-4
          "
        >
          <h3
            className="
              mb-4
              text-lg font-semibold
            "
          >
            Cek menu lainnya
          </h3>

          <div
            className="
              grid grid-cols-2
              gap-3
              md:grid-cols-3
              lg:grid-cols-5
            "
          >
            {products.products
              .filter((p) => p.id !== product.id)
              .map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  onClick={() => navigate(`/product/${item.id}`)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
