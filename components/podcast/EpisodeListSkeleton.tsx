const SKELETON_ROW_COUNT = 6;

/**
 * Suspense fallback for <EpisodeList>. Mirrors the real row's dimensions so
 * there's no layout shift once the actual episodes stream in.
 */
export function EpisodeListSkeleton() {
  return (
    <ul className="grid grid-cols-2 max-md:grid-cols-1 gap-md" aria-hidden="true">
      {Array.from({ length: SKELETON_ROW_COUNT }).map((_, index) => (
        <li
          key={index}
          className="flex items-center gap-md p-md bg-white border border-gray-light rounded-xs animate-pulse"
        >
          <span className="shrink-0 w-10 h-10 rounded-full bg-gray-light" />
          <span className="h-4 flex-1 rounded-xs bg-gray-light" />
        </li>
      ))}
    </ul>
  );
}
