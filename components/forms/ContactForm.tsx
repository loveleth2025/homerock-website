"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const inputClasses =
  "w-full p-md border border-gray-light rounded-xs text-base font-sans focus:outline-none focus:border-gold focus:shadow-[0_0_0_3px_rgba(201,162,39,0.1)]";

const topics = ["Select Topic", "Home Buying", "Home Selling", "Investment", "Realtor Opportunity", "Other"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-cream border-l-4 border-gold p-lg rounded-xs">
        <p className="mb-0">Thanks for reaching out — Natalie&rsquo;s team will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-md">
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-md">
        <input type="text" placeholder="First Name" required className={inputClasses} />
        <input type="text" placeholder="Last Name" required className={inputClasses} />
      </div>
      <input type="email" placeholder="Email Address" required className={inputClasses} />
      <select required defaultValue="" className={inputClasses}>
        {topics.map((topic, index) => (
          <option key={topic} value={index === 0 ? "" : topic} disabled={index === 0}>
            {topic}
          </option>
        ))}
      </select>
      <textarea placeholder="Your Message" rows={5} required className={inputClasses} />
      <Button type="submit">Send Message</Button>
    </form>
  );
}
