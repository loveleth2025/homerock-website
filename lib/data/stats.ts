export type Stat = {
  value: string;
  label: string;
};

/** Homepage trust indicators — carried over verbatim from the legacy site. */
export const homeStats: Stat[] = [
  { value: "500+", label: "Families Helped Buy" },
  { value: "1000+", label: "Investors Trained" },
  { value: "50+", label: "Properties Invested" },
  { value: "20+ yrs", label: "Industry Experience" },
];
