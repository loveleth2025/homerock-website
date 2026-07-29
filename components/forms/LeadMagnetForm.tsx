"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const inputClasses =
  "w-full p-md border border-gray-light rounded-xs text-base font-sans focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,162,39,0.1)]";

type LeadMagnetFormProps = {
  /** Identifies which gated resource this submission is for (e.g. "buyer-checklist"). */
  resource: string;
  /** Called after a successful submission so the parent can reveal the gated content. */
  onSuccess: () => void;
};

export function LeadMagnetForm({ resource, onSuccess }: LeadMagnetFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          resource,
          honeypot: form.get("company"),
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      onSuccess();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-md">
      <input type="text" name="name" placeholder="Full Name" required className={inputClasses} />
      <input type="email" name="email" placeholder="Email Address" required className={inputClasses} />
      {/* Honeypot — hidden from real visitors, bots tend to fill every field. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] w-px h-px opacity-0"
      />
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Get the Checklist →"}
      </Button>
      {status === "error" && (
        <p className="text-sm text-red-700 mb-0">Something went wrong — please try again in a moment.</p>
      )}
    </form>
  );
}
