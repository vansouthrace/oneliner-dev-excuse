import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "The code compiled on the first try, which is how I knew something was deeply wrong.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
