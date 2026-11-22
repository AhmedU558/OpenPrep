"""
Mega-Batch 64 Topics Generator - Part B
- 100 NEET PG (India) topics (2,100 -> 2,200)
- 100 MRCP (UK) topics (2,100 -> 2,200)
- 100 FCPS (Pakistan) topics (2,100 -> 2,200)
"""

import os
import sys

from scripts.create_mega64_b import NEET_TOPICS, MRCP_TOPICS, FCPS_TOPICS, validate_topics

if __name__ == "__main__":
    validate_topics(NEET_TOPICS, "NEET PG")
    validate_topics(MRCP_TOPICS, "MRCP")
    validate_topics(FCPS_TOPICS, "FCPS")
    print("All Part B topics validated.")
