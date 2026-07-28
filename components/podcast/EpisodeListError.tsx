type EpisodeListErrorProps = {
  /** Technical detail — only ever shown in development, never to real visitors. */
  detail?: string;
};

/** Shown when the playlist couldn't be fetched (missing config, API/network failure). */
export function EpisodeListError({ detail }: EpisodeListErrorProps) {
  return (
    <div className="border border-gray-light bg-cream rounded-xs p-lg text-center text-gray-dark" role="alert">
      <p className="mb-0 font-semibold text-navy">Episodes are temporarily unavailable.</p>
      <p className="mb-0 text-sm">Please check back shortly, or visit the channel directly on YouTube.</p>
      {process.env.NODE_ENV === "development" && detail && (
        <p className="mb-0 text-xs text-gray-dark/70 mt-md font-mono">Dev detail: {detail}</p>
      )}
    </div>
  );
}
