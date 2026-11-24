import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence startup pitch for make.fun's "Ridiculous at First Glance,
// Real by the Second": a dating app that matches people by what's rotting
// in their fridge — bizarre at first glance, but the matching signal is
// real: shared habits are what compatibility actually is.
// Revision 2: drop "both" — "two people who forgot the same yoghurt"
// already carries the shared lapse, and the shorter clause lands harder.
const text =
  "We run a dating app that matches singles by what's rotting in their fridge, because two people who forgot the same yoghurt are already compatible.";

if ([...text].length < 1 || [...text].length > 200) {
  throw new Error("entry text out of range");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
