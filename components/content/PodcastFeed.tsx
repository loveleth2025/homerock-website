"use client";

import { useEffect, useState } from "react";
import { fallbackYoutubeId } from "@/lib/content/podcast";

export function PodcastFeed() {
  const [videoId, setVideoId] = useState(fallbackYoutubeId);
  const [title, setTitle] = useState("Sugar Spice & Spirits");

  useEffect(() => {
    let cancelled = false;
    fetch("/api/latest-episode")
      .then((res) => res.json())
      .then((data: { videoId: string | null; title: string | null }) => {
        if (!cancelled && data.videoId) {
          setVideoId(data.videoId);
          if (data.title) setTitle(data.title);
        }
      })
      .catch(() => {
        // Keep the fallback video — matches the legacy page's failure behavior.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="bg-cream p-lg rounded-[4px] mb-lg">
      <h3 className="mt-0 mb-sm">Latest Episode: {title}</h3>
      <p className="text-navy text-sm mb-lg">Hosted by Natalie Pilkinton | New episodes weekly</p>
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-[4px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full border-0"
          src={`https://www.youtube.com/embed/${videoId}`}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </div>
  );
}
