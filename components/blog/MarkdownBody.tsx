import { Fragment } from "react";

/**
 * Renders the small markdown subset produced by bodyToMarkdown():
 * ## headings, - list items, ![alt](src) images and paragraphs.
 * Kept deliberately tiny so article bodies render as real HTML structure
 * (H2s, lists) without pulling in a markdown dependency.
 */
export function MarkdownBody({ markdown }: { markdown: string }) {
  const blocks = markdown.split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);

  return (
    <div className="article-body text-gray-700 leading-relaxed">
      {blocks.map((block, index) => {
        const heading = block.match(/^(#{2,3})\s+(.*)$/);
        if (heading) {
          return heading[1] === "##" ? (
            <h2 key={index} className="mt-2xl mb-md text-2xl font-bold text-navy">
              {heading[2]}
            </h2>
          ) : (
            <h3 key={index} className="mt-xl mb-sm text-xl font-bold text-navy">
              {heading[2]}
            </h3>
          );
        }

        const image = block.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
        if (image) {
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={index} src={image[2]} alt={image[1]} className="my-xl w-full h-auto rounded-lg" loading="lazy" />
          );
        }

        const lines = block.split("\n");
        if (lines.every((line) => line.startsWith("- "))) {
          return (
            <ul key={index} className="my-md list-disc pl-xl space-y-xs">
              {lines.map((line, i) => (
                <li key={i}>{line.slice(2)}</li>
              ))}
            </ul>
          );
        }

        return (
          <p key={index} className="my-md">
            {lines.map((line, i) => (
              <Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}
