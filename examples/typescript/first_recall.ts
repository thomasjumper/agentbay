/**
 * First AgentBay recall with the TypeScript SDK.
 *
 * Verified on 2026-05-16 in a clean npm project:
 *
 *   npm install agentbay@1.1.8 tsx
 *   AGENTBAY_API_KEY=ab_live_... AGENTBAY_PROJECT_ID=proj_... npx tsx examples/typescript/first_recall.ts
 *
 * Expected output:
 *
 *   stored: ok
 *   recall: ok
 *   cleanup: ok
 *
 * Note: agentbay@1.1.8 can store through the SDK. This example uses the
 * documented REST recall endpoint for the read path because the packaged
 * TypeScript recall helper is being patched to match the deployed API.
 */

import { AgentBay } from "agentbay";

const apiKey = process.env.AGENTBAY_API_KEY;
const projectId = process.env.AGENTBAY_PROJECT_ID;
const baseUrl = process.env.AGENTBAY_BASE_URL ?? "https://www.aiagentsbay.com";

if (!apiKey) {
  throw new Error("Set AGENTBAY_API_KEY before running this example.");
}

if (!projectId) {
  throw new Error("Set AGENTBAY_PROJECT_ID before running this example.");
}

const brain = new AgentBay({ projectId });
const marker = `agentbay-typescript-example-${Date.now()}`;

type StoreResult = {
  id?: string;
  knowledgeId?: string;
  entry?: { id?: string };
};

function entryId(result: StoreResult): string {
  const id = result.id ?? result.knowledgeId ?? result.entry?.id;
  if (!id) {
    throw new Error("Store response did not include a memory id.");
  }
  return id;
}

async function main() {
  const stored = await brain.add(
    `${marker}: Cursor stores this project memory and Claude Code can recall it.`,
    { projectId, tags: ["example"] },
  ) as StoreResult;
  const id = entryId(stored);
  console.log("stored: ok");

  const url = new URL(`/api/v1/projects/${projectId}/memory`, baseUrl);
  url.searchParams.set("q", marker);
  url.searchParams.set("limit", "3");

  const recallResponse = await fetch(url, {
    headers: { Authorization: `Bearer ${apiKey}` },
  });
  if (!recallResponse.ok) {
    throw new Error(`Recall failed: ${recallResponse.status}`);
  }
  const recallBody = await recallResponse.json();
  const hits = Array.isArray(recallBody)
    ? recallBody
    : (recallBody.results ?? recallBody.entries ?? []);
  if (!Array.isArray(hits) || hits.length === 0) {
    throw new Error("Recall returned no results.");
  }
  console.log("recall: ok");

  const forgetResponse = await fetch(
    new URL(`/api/v1/projects/${projectId}/memory`, baseUrl),
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ knowledgeId: id }),
    },
  );
  if (!forgetResponse.ok) {
    throw new Error(`Cleanup failed: ${forgetResponse.status}`);
  }
  console.log("cleanup: ok");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
