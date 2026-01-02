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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // halus, ga berasa delay

    return () => clearTimeout(timer);
  }, [id]);



  useEffect(() => {
    setVariant(product.variants[0]);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  return (
    <>
      {loading ? (
        // ================= SKELETON =================
        <div className="py-6">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="h-80 bg-gray-200 rounded-xl animate-pulse" />
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-2/3" />
                <div className="h-6 bg-gray-200 rounded w-1/3" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-6 bg-white">
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
                rounded-xl
                relative
              "
                >
                  <img
                    src={variant.image}
                    alt={product.name}
                    className="
                  object-cover
                  w-full h-80
                  md:h-100
                "
                  />

                  {/* Floating WhatsApp Button */}
                  <a
                    href={`https://wa.me/6285795804537?text=${encodeURIComponent(
                      `Halo, saya ingin pesan \n${product.name}\n harga Rp ${variant.price}, apakah bisa?`,
                    )}`}
                    className="
                  flex
                  px-4 py-2
                  text-sm font-medium text-white
                  bg-green-500
                  rounded-full
                  shadow-md
                  absolute bottom-3 right-3 items-center gap-2 backdrop-blur hover:bg-green-600 hover:text-white transition
                "
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="
                    w-4 h-4
                  "
                    >
                      <path d="M20.52 3.478A11.86 11.86 0 0 0 12.02 0C5.42 0 .06 5.37.06 12a11.93 11.93 0 0 0 1.62 6l-1.7 6.2 6.36-1.67a11.9 11.9 0 0 0 5.69 1.46h.01c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.52-8.49z" />
                    </svg>
                    <span
                      className="

                  "
                    >
                      Tanyakan produk ini
                    </span>
                  </a>
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
                <p
                  className="
                mt-2
                text-base text-gray-500
              "
                >
                  {variant.description}
                </p>

                <div
                  className="
                mt-4
              "
                >
                  <p
                    className="
                  mb-2
                  text-sm font-medium
                "
                  >
                    Pilih varian
                  </p>

                  <div
                    className="
                  flex flex-wrap
                  gap-3
                "
                  >
                    {product.variants.map((v, i) => (
                      <button
                        key={i}
                        onClick={() => setVariant(v)}
                        className={`
                      px-3 py-2
                      text-sm font-bold
                      rounded-lg border
                      transition
                      ${v === variant
                            ? "bg-primary/5 text-primary border-primary"
                            : "border-gray-300 text-gray-700 hover:bg-gray-100"
                          }
                    `}
                      >
                        Rp{v.price}
                      </button>
                    ))}
                  </div>

                  {/* <p
                className="
                  mt-2
                  text-sm text-gray-500
                "
              >
                {variant.description}
              </p> */}
                </div>

                {/* <div
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
            </div> */}
              </div>
            </div>
          </div>

          {/* ================= MENU LAINNYA ================= */}
          <div
            className="
          mt-10 py-4
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
      )}
    </>
  );

}
