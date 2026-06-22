// Export all Review content to a single Markdown doc for proofreading.
import { REVIEW_DOMAINS } from "../src/review.js";
import { writeFileSync } from "node:fs";

const out = [];
out.push("# N444 Exam 2 — Review Content (proofreading export)");
out.push("");
out.push("_Every page in the app's Review section. Mark anything to change and send it back._");
out.push("");

function renderSections(sections, depth) {
  const h = "#".repeat(depth);
  for (const s of sections) {
    out.push(`${h} ${s.h}`);
    out.push("");
    for (const line of s.b) out.push(`- ${line}`);
    out.push("");
  }
}

for (const d of REVIEW_DOMAINS) {
  out.push("---");
  out.push("");
  out.push(`# ${d.title}`);
  out.push("");
  if (d.blurb) { out.push(`> ${d.blurb}`); out.push(""); }
  out.push("## Overview");
  out.push("");
  renderSections(d.sections, 3);
  if (d.topics) {
    for (const t of d.topics) {
      out.push(`## ${t.title}${t.strip ? " (rhythm strip)" : ""}`);
      out.push("");
      if (t.blurb) { out.push(`> ${t.blurb}`); out.push(""); }
      renderSections(t.sections, 3);
    }
  }
}

const md = out.join("\n");
const dest = process.argv[2] || "/Users/alextecson/Downloads/N444_Review_Content.md";
writeFileSync(dest, md);
const words = md.split(/\s+/).filter(Boolean).length;
console.log(`Wrote ${dest}`);
console.log(`${REVIEW_DOMAINS.length} domains, ${md.split("\n").length} lines, ~${words} words`);
