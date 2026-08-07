import { getPodcastEpisodes } from "@/lib/youtube/getPodcastEpisodes";
import { fallbackYoutubeId } from "@/lib/content/podcast";

/**
 * Embeds the latest episode from the same YouTube playlist that powers
 * <EpisodeList> — both read through the cached, deduplicated
 * `getPodcastEpisodes()` call, so this never triggers a second API request.
 * Falls back to a known-good video if the playlist is unavailable, rather
 * than rendering a broken/empty embed.
 */
export async function PodcastFeed() {
  const result = await getPodcastEpisodes();
  const latest = result.status === "success" ? result.episodes[0] : undefined;

  const videoId = latest?.videoId ?? fallbackYoutubeId;
  const title = latest?.title ?? "Sugar Spice & Spirits";

  return (
    <div className="bg-cream p-lg rounded-sm mb-lg">
      <h3 className="mt-0 mb-sm">Latest Episode: {title}</h3>
      <p className="text-navy text-sm mb-lg">Hosted by Natalie Pilkinton, Mindy Price and Kelly Williams | New episodes weekly | New episodes weekly</p>
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-sm">
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          loading="lazy"
        />
      </div>
    </div>
  );
}
