"""First AgentBay recall with the Python SDK.

Verified on 2026-05-16 in a fresh virtualenv:

    python3 -m venv /tmp/agentbay-example-python
    . /tmp/agentbay-example-python/bin/activate
    pip install --no-cache-dir agentbay==1.8.1
    AGENTBAY_API_KEY=ab_live_... AGENTBAY_PROJECT_ID=proj_... python examples/python/first_recall.py

Expected output:

    stored: ok
    recall: ok
    cleanup: ok

Note: the first local/offline recall may download embedding model files. After
that first run, local embedding is cached.
"""

from __future__ import annotations

import os
import time

from agentbay import AgentBay


def required_env(name: str) -> str:
    value = os.environ.get(name)
    if not value:
        raise SystemExit(f"Set {name} before running this example.")
    return value


def main() -> None:
    project_id = required_env("AGENTBAY_PROJECT_ID")
    marker = f"agentbay-python-example-{int(time.time())}"

    brain = AgentBay(project_id=project_id)
    entry = brain.store(
        f"{marker}: Cursor stores this project memory and Claude Code can recall it.",
        title="AgentBay Python first recall example",
        tags=["example"],
    )
    entry_id = getattr(entry, "id", None) or entry.get("id")
    print("stored: ok")

    hits = brain.recall(marker, limit=3)
    if not hits:
        raise SystemExit("recall returned no results")
    print("recall: ok")

    brain.forget(entry_id)
    print("cleanup: ok")


if __name__ == "__main__":
    main()
