// Exorcised — Describe Your Ex in One Word
//
// The entry is a single word: "Exorcised".
//
// Why this word: it contains "ex" — the ex is not merely left behind,
// but cast out, as in a ritual exorcism. The joke arrives with the word
// itself: a former partner so bad they had to be banished, not just
// forgotten. No caption is needed; the twist is inside the word.
//
// The program writes exactly those 9 bytes to <OUTPUT_DIR>/entry.txt,
// with NO trailing newline. That matters twice: the gate accepts 1–111
// characters, and the ranking tie-break prefers the smaller text, so
// every byte saved is a (tiny) advantage. A trailing "\n" would be a
// 10th byte for nothing.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Exorcised";

// Validation: exactly one word, letters only, well inside the 1–111
// character gate. If this ever fails, the program exits loudly instead
// of writing a bad entry.
if (!/^[A-Za-z]+$/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}
if (WORD.length < 1 || WORD.length > 111) {
  throw new Error(`entry word length out of range: ${WORD.length}`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
