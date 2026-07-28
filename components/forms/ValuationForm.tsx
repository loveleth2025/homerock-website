"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const inputClasses =
  "w-full p-md border border-gray-light rounded-xs text-base font-sans focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,162,39,0.1)]";

export function ValuationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-cream border-l-4 border-gold p-lg rounded-xs">
        <p className="mb-0">Thanks — Natalie&rsquo;s team will follow up with your home value estimate shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-md">
      <input type="text" placeholder="Property Address" required className={inputClasses} />
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-md">
        <input type="text" placeholder="Full Name" required className={inputClasses} />
        <input type="email" placeholder="Email Address" required className={inputClasses} />
      </div>
      <input type="tel" placeholder="Phone Number" className={inputClasses} />
      <Button type="submit">Get My Free Valuation</Button>
    </form>
  );
}
