"""
Mega-Batch 62 Topics Generator - Part B
- 100 MRCP (UK) topics (2,000 -> 2,100)
- 100 FCPS (Pakistan) topics (2,000 -> 2,100)
- 100 NLE (Pakistan) topics (2,000 -> 2,100) [CENTURY BATCH 300!]
"""

import os
import sys

from scripts.create_mega62_b import MRCP_TOPICS, FCPS_TOPICS, NLE_TOPICS, validate_topics

if __name__ == "__main__":
    validate_topics(MRCP_TOPICS, "MRCP")
    validate_topics(FCPS_TOPICS, "FCPS")
    validate_topics(NLE_TOPICS, "NLE")
    print("All Part B topics validated.")
