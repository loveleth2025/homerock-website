type VideoPlaceholderProps = {
  label: string;
};

/**
 * Reserved slot for a video embed that isn't ready yet. Swap the contents
 * for a real <iframe>/<video> once the promotional video is delivered.
 */
export function VideoPlaceholder({ label }: VideoPlaceholderProps) {
  return (
    <div className="relative aspect-video w-full bg-navy rounded-xs overflow-hidden flex items-center justify-center border border-gray-light">
      <div className="text-center px-lg">
        <div
          aria-hidden
          className="mx-auto mb-md w-16 h-16 rounded-full bg-gold/15 border-2 border-gold flex items-center justify-center text-2xl text-gold"
        >
          ▶
        </div>
        <p className="text-white text-sm font-semibold uppercase tracking-[0.08em] mb-0">{label}</p>
        <p className="text-white/60 text-xs mt-xs mb-0">Video coming soon</p>
      </div>
    </div>
  );
}
