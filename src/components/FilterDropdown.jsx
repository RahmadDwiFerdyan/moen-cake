import { useState, useRef, useEffect } from "react";

export default function FilterDropdown({ value, options, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="
        relative
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className={`
          flex
          w-40
          px-4 py-2
          bg-white
          rounded-full border-2
          items-center justify-between transition hover:border-primary
          ${
            value !== "Semua" && value !== "Urutkan"
              ? "border-primary text-primary"
              : "border-gray-300 text-gray-700"
          }
        `}
      >
        <span
          className="
            overflow-hidden
            max-w-30
            whitespace-nowrap
            truncate
          "
        >
          {value}
        </span>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`
            w-4 h-4
            transition
            ${open ? "rotate-180" : ""}
          `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <div
          className="
            z-50
            w-full
            mt-2
            bg-white
            rounded-lg border
            shadow-md
            absolute
          "
        >
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className="
                block
                w-full
                px-4 py-2
                text-left
                rounded-t-lg
                last:rounded-b-lg hover:bg-gray-100
              "
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
