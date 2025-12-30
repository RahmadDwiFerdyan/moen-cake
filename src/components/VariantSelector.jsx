export default function VariantSelector({
  variants,
  selectedVariant,
  onSelect,
}) {
  return (
    <div className="mt-4 space-y-2">
      {variants.map((variant, index) => (
        <button
          key={index}
          onClick={() => onSelect(variant)}
          className={`w-full p-3 rounded border text-left transition
            ${
              variant === selectedVariant
                ? "border-primary text-primary"
                : "border-gray-300"
            }`}
        >
          <div className="flex justify-between items-center">
            <span className="text-sm">{variant.description}</span>
            <span className="font-semibold">
              Rp {variant.price}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}
