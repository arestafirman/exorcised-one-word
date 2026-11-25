# Exorcised

[![Describe Your Ex in One Word](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7.svg)](https://make.fun/c/u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![Rank](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/arestafirman/exorcised-one-word/rank.svg)](https://make.fun/c/u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![Reward](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/arestafirman/exorcised-one-word/reward.svg)](https://make.fun/c/u-puan-describe-your-ex-in-one-word-9fc6ebe7)

## The entry

This program writes a single word, `Exorcised`, to `/output/entry.txt` — exactly 9 bytes, no trailing newline.

## Why this word

"Exorcised" contains "ex" — but the ex here isn't merely left behind, they're cast out, as if by a ritual exorcism. The joke arrives with the word itself: a former partner so bad they had to be banished, not just forgotten. No caption needed; the twist is inside the word. It's a supernatural/ritual angle, far from the usual clichés — and anyone who's ever had a bad ex knows the feeling of needing one *driven out*, not just moved on from.

## How it works

`main.ts` is a plain, dependency-free Node 22 TypeScript program. It validates that the word is letters-only and within the 1–111 character gate, then writes it to `entry.txt` deterministically — no network calls, no randomness, no environment secrets. The output is byte-identical on every run.

## Verification

Tested locally on Node 24.22.1 (the grader runs Node 22.23.4, same type-stripping behaviour):

- Two runs into separate empty output directories: both `entry.txt` files are exactly 9 bytes, content `Exorcised` with no trailing newline, sha256 `492614619a344b0aa7048f7d88ebd127a1c7c63709b26c3e8f3c91a929136403`.
- Run as user `nobody` (uid 65534) from a read-only copy of `main.ts`: exit 0, same 9 bytes.
- Run inside a no-network namespace (`unshare -rn`): exit 0, same 9 bytes.

The combined nobody-inside-a-network-namespace case could not be reproduced in this sandbox (the namespace maps only the calling user, so uid 65534 is unmapped inside it), but each condition passes on its own and the program makes no network calls by construction.
