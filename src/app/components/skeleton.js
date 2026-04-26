export default function SkeletonCard() {
  return (
    <div className="animate-pulse border rounded-lg p-4 bg-white dark:bg-gray-800 transition">
      <div className="h-40 bg-gray-300 dark:bg-gray-700 mb-4 rounded"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 mb-2 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 dark:bg-gray-700 mb-2 rounded w-1/2"></div>
      <div className="h-10 bg-gray-300 dark:bg-gray-700 mb-4 rounded"></div>
    </div>
  );
}
