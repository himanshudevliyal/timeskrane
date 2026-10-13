export function extractHeadings(htmlContent) {
  const headingRegex = /<h([23])[^>]*>(.*?)<\/h\1>/gis;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const level = Number(match[1]); // 2 or 3
    const text = match[2].replace(/<[^>]*>/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

    headings.push({ text, id, level });
  }

  return headings;
}

export function addIdsToHeadings(htmlContent, headings) {
  let modifiedContent = htmlContent;

  headings.forEach(({ text, id }) => {
    const regex = new RegExp(`<h2([^>]*)>${text}</h2>`, "g");

    modifiedContent = modifiedContent.replace(
      regex,
      `<h2$1 id="${id}">${text}</h2>`
    );
  });

  return modifiedContent;
}

export function getReadingTime(content) {
  if (!content) return 1;
  const text = content.replace(/<[^>]*>/g, "");
  const words = text.split(" ").length;

  return Math.ceil(words / 200);
}

export function formatDate(dateString) {
  if (!dateString) return "N/A";

  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
