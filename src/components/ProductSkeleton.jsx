export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-sm p-3 animate-pulse">
      {/* Image */}
      <div className="w-full h-48 bg-gray-200 rounded-sm" />

      {/* Content */}
      <div className="mt-3 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-5 bg-gray-200 rounded w-1/2" />

        <div className="mt-4 h-4 bg-gray-200 rounded w-2/3" />
      </div>
    </div>
  );
}
