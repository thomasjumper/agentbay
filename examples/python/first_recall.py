"""First StremAI recall with the Python SDK.

Verified in a fresh virtualenv:

    python3 -m venv /tmp/stremai-example-python
    . /tmp/stremai-example-python/bin/activate
    pip install --no-cache-dir stremai
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

from stremai import StremAI


def required_env(name: str) -> str:
    value = os.environ.get(name)
    if not value:
        raise SystemExit(f"Set {name} before running this example.")
    return value


def main() -> None:
    project_id = required_env("AGENTBAY_PROJECT_ID")
    marker = f"stremai-python-example-{int(time.time())}"

    brain = StremAI(project_id=project_id)
    entry = brain.store(
        f"{marker}: Cursor stores this project memory and Claude Code can recall it.",
        title="StremAI Python first recall example",
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
