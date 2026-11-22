"""
Mega-Batch 63 Topics Generator - Part B
- 100 UHS MBBS (Pakistan) topics (2,000 -> 2,100)
- 100 HAAD / DHA (UAE) topics (2,000 -> 2,100) [ALL 11 TRACKS >= 2,100!]
- 100 PLAB / UKMLA (UK) topics (2,100 -> 2,200) [2.2k WAVE LAUNCH!]
"""

import os
import sys

from scripts.create_mega63_b import UHS_TOPICS, HAAD_TOPICS, PLAB_TOPICS, validate_topics

if __name__ == "__main__":
    validate_topics(UHS_TOPICS, "UHS MBBS")
    validate_topics(HAAD_TOPICS, "HAAD / DHA")
    validate_topics(PLAB_TOPICS, "PLAB / UKMLA")
    print("All Part B topics validated.")
