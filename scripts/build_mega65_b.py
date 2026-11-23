"""
Mega-Batch 65 Topics Generator - Part B
- 100 SMLE (Saudi Arabia) topics (2,100 -> 2,200)
- 100 UHS MBBS (Pakistan) topics (2,100 -> 2,200)
- 100 HAAD / DHA (UAE) topics (2,100 -> 2,200) [ALL 11 TRACKS >= 2,200!]
"""

import os
import sys

from scripts.create_mega65_b import SMLE_TOPICS, UHS_TOPICS, HAAD_TOPICS, validate_topics

if __name__ == "__main__":
    validate_topics(SMLE_TOPICS, "SMLE")
    validate_topics(UHS_TOPICS, "UHS MBBS")
    validate_topics(HAAD_TOPICS, "HAAD / DHA")
    print("All Part B topics validated.")
