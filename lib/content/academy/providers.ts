/**
 * Lenders Natalie recommends, shared by the Investor and Home Buyer guides.
 * Confirmed by Love on Oct 5, 2026; details from HomeRock Mortgage's own site.
 * Jet Lending is mentioned only through podcast episode 56, not as a recommendation.
 */

export const homeRockMortgage = {
  company: "HomeRock Mortgage",
  person: "Brian Lupton, Mortgage Loan Originator",
  role: "Mortgage broker",
  description:
    "Long-term financing for investors and homebuyers, including DSCR loans for rentals and refinances out of short-term debt. Brian co-presents Natalie's Home Buyer Masterclass.",
  website: "https://www.homerockmortgage.com",
  license: "NMLS #2035744 · Company NMLS #1691956",
};

/** Same lender, described for home buyers. */
export const homeRockMortgageForBuyers = {
  ...homeRockMortgage,
  description:
    "Conventional, FHA, VA and USDA financing, plus help finding the Texas down payment assistance programs you qualify for. Brian co-presents Natalie's Home Buyer Masterclass.",
};

export const lenderDisclosure =
  "HomeRock Mortgage is part of the HomeRock Group, the same group of companies as HomeRock Realty, Natalie's brokerage. You're free to choose any lender, and you should compare terms. Loan programs, rates and approval are set by the lender.";
