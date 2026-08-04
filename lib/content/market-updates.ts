import type { BlogSection } from "./blog";

export type MarketUpdate = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  /** Short teaser shown on the Market Updates index card and in metadata. */
  summary: string;
  content: BlogSection[];
};

export const marketUpdates: MarketUpdate[] = [
  {
    slug: "houston-market-update-august-2026",
    title: "Houston's Market Just Shifted. Here's What the Numbers Are Actually Saying.",
    date: "August 5, 2026",
    readTime: "6 min",
    summary:
      "Inventory tightened, prices held steady, and homes are sitting a little longer than they used to. None of that is an accident — and none of it means what most headlines say it does.",
    content: [
      {
        paragraphs: [
          "Every month the same four numbers get thrown around — inventory, price, days on market, and who technically has the upper hand. Most people skim past them. Here's what they actually mean this month, and why the story underneath them is more interesting than the headline.",
        ],
      },
      {
        type: "stats",
        items: [
          { label: "Inventory", value: "4,200 Homes", trend: "12%", direction: "down" },
          { label: "Average Price", value: "$389,000", trend: "2%", direction: "up" },
          { label: "Days on Market", value: "38 Days", trend: "steady", direction: "flat" },
          { label: "Buyer Power", value: "6 / 10", trend: "leaning buyer", direction: "flat" },
        ],
      },
      {
        heading: "Fewer Homes on the Market Doesn't Mean What It Used to Mean",
        paragraphs: [
          "Inventory dropped 12% this month, which used to be shorthand for \"bidding wars are back.\" That's not really what's happening. Fewer new listings are hitting the market because sellers who don't have to move right now are choosing to wait it out. The homes that are listed are staying up for 38 days on average — not a fire-sale number, but not a stalled one either. It's a market that's thinner, not hotter.",
        ],
      },
      {
        heading: "Prices Aren't Racing. They're Holding.",
        paragraphs: [
          "The average price ticked up 2%, which is close enough to flat that it's barely worth the word \"up.\" That's the real story of 2026 so far: Houston isn't in a price war in either direction. Sellers aren't getting bailed out by appreciation, and buyers aren't getting rescued by a correction. Pricing a home accurately, on day one, matters more now than it has in years — because there's no rising tide left to cover a mistake.",
        ],
      },
      {
        type: "pullquote",
        quote: "The Houston market isn't becoming more competitive. It's becoming more intentional.",
      },
      {
        heading: "A 6-Out-Of-10 Buyer Market Is a Real Opening",
        paragraphs: [
          "Buyer power sitting at 6 out of 10 doesn't sound dramatic, but it's the first time in a while the needle has leaned this direction. Combined with 38 days of average market time, buyers finally have room to ask for inspection credits, negotiate on price, and not feel like every offer has to be their best and final. It won't stay this way indefinitely — it rarely does in Houston — but right now, patience is an actual advantage instead of a risk.",
        ],
      },
      {
        heading: "The Market Isn't One Market",
        paragraphs: [
          "Citywide numbers flatten out what's really three or four different markets running at once. Spring, The Woodlands, and Sugar Land are each telling a slightly different story this month, and the difference matters more than the metro-wide average does if you're actually buying or selling in one of them.",
        ],
      },
      {
        type: "neighborhoods",
        items: [
          { name: "Spring", price: "$185 / sqft", status: "growing" },
          { name: "The Woodlands", price: "$195 / sqft", status: "stable" },
          { name: "Sugar Land", price: "$175 / sqft", status: "cooling" },
        ],
      },
      {
        heading: "What This Actually Means, Depending on Which Side You're On",
        paragraphs: [
          "A market like this doesn't call for the same advice for everyone in it. Buyers and sellers are working with different leverage right now, and pretending otherwise is how people leave money — or opportunity — on the table.",
        ],
      },
      {
        type: "compare",
        columns: [
          {
            heading: "For Buyers",
            variant: "light",
            items: [
              "Push for inspection contingencies",
              "Negotiate closing costs",
              "Keep the appraisal contingency",
              "Use the extra negotiating room — it's real right now",
            ],
          },
          {
            heading: "For Sellers",
            variant: "dark",
            items: [
              "Price it correctly from day one",
              "Start preparing the home now",
              "Aim to launch in early September",
              "Invest in professional marketing — it's not optional in this market",
            ],
          },
        ],
      },
      {
        type: "takeaways",
        items: [
          "Inventory is down 12%, but that's easing urgency, not creating a bidding war",
          "Average price sits at $389K — essentially flat, not a signal in either direction",
          "Homes are averaging 38 days on market, giving buyers real room to negotiate",
          "Spring remains the strongest of the three spotlighted areas this month",
          "Buyers have regained meaningful leverage for the first time in a while",
          "Sellers need a real pricing and marketing strategy — the market won't cover for guesswork",
        ],
      },
    ],
  },
];
