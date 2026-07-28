export type TimelineStep = {
  title: string;
  description: string;
};

export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="my-2xl">
      {steps.map((step, index) => (
        <div key={step.title} className="flex gap-lg mb-xl last:mb-0">
          <div className="relative shrink-0">
            <div className="min-w-10 w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy font-semibold">
              {index + 1}
            </div>
            {index < steps.length - 1 && (
              <div className="absolute left-1/2 top-10 bottom-[-1.5rem] w-0.5 -translate-x-1/2 bg-gray-light" />
            )}
          </div>
          <div>
            <h4 className="font-semibold text-navy mb-md mt-0">{step.title}</h4>
            <p className="mb-0">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
