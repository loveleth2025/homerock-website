"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";

type NewsletterProps = {
  className?: string;
  /** Adjusts input/label coloring for use on a dark (navy) background vs. light. */
  onDark?: boolean;
};

export function Newsletter({ className, onDark = true }: NewsletterProps) {
  const [submitted, setSubmitted] = useState(false);
  const inputId = useId();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className={onDark ? "text-cream mb-0" : "text-gray-dark mb-0"}>
        Thanks for subscribing — watch your inbox for real estate insights.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <label htmlFor={inputId} className="sr-only">
        Email address
      </label>
      <div className="flex gap-sm max-w-md max-sm:flex-col">
        <input
          id={inputId}
          type="email"
          required
          placeholder="Your email address"
          className={
            onDark
              ? "flex-1 min-w-0 px-md py-sm rounded-xs bg-white/10 border border-white/25 text-white placeholder:text-cream/60 text-sm focus:outline-none focus:border-gold"
              : "flex-1 min-w-0 px-md py-sm rounded-xs border border-gray-light text-sm focus:outline-none focus:border-gold"
          }
        />
        <Button type="submit" size="small" variant={onDark ? "outline-light" : "primary"}>
          Subscribe
        </Button>
      </div>
    </form>
  );
}
