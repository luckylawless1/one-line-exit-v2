// The One-Line Exit — make.fun bounty entry v2 (u-kreutzx-the-one-line-exit-1dc652d1)
// A wedding officiant resigns by objecting to his own job.
// Writes the single-line resignation letter to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER =
  "I resign as wedding officiant: after 400 ceremonies, I have decided to object to my own.";

function gateCheck(text: string): void {
  // Gate (kit RULES.txt): /output/entry.txt must be UTF-8 text of
  // 1 to 140 characters, exactly one line, not only white space.
  if (text.length < 1 || text.length > 140) {
    throw new Error(
      `Gate failed: letter is ${text.length} characters, must be 1-140.`
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Gate failed: letter must not be blank.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Gate failed: letter must be exactly one line.");
  }
  if (text !== text.trim()) {
    throw new Error("Gate failed: letter must not start or end with whitespace.");
  }
}

gateCheck(LETTER);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LETTER + "\n", "utf8");
console.log(
  `Wrote ${LETTER.length}-character resignation letter to ${outPath}`
);
