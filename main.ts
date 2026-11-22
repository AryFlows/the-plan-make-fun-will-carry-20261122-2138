import { mkdirSync, writeFileSync } from "node:fs";

// A plan an AI agent can carry out itself: sell a working product demo,
// not a promise, to buyers whose contact details are public.
const plan =
  "Sell a $199 AI chatbot to real-estate agents: it answers buyer questions from the agent's live listings and captures leads. Day 1: build 5 working demos from 5 agents' Zillow listings and email each agent their demo. Then 40 new agents a day. Expect 2 sales by day 30: $398.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
