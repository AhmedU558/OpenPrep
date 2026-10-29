# Rea and skill audit

Audit date: 2026-10-29. Everything below was checked on this machine. Nothing is assumed from memory.

## 1. What "Rea" actually is here

| Item | Verified value |
|---|---|
| Package | `rea-agents` **6.8.0**, installed globally with npm (`%APPDATA%\npm\node_modules\rea-agents`) |
| CLI | `rea` / `rea-agents` → `scripts/rea.mjs` (`rea --version` prints `6.8.0`) |
| License | **MIT** (`LICENSE`). Third-party components are listed in `THIRD_PARTY_NOTICES.md` and `licenses/`. |
| Description | "Reverse engineer anything from your terminal or agent with one CLI and MCP server." |
| Shipped skills | **One**: `skills/reverse-engineer-anything/SKILL.md` (metadata version 49, `tool_count: 229`) |
| MCP server | Registered in this Claude Code session as `rea`, exposing 229 `mcp__rea__*` tools. It reconnected during this session after one connection timeout. |
| Disclaimer | `DISCLAIMER.md` limits use to artifacts and systems you own or are authorized to examine. It explicitly excludes circumventing DRM, license checks, access controls, and unauthorized testing. |

**Rea is not a general skill library.** It has no skills for frontend, backend, UI/UX, database design, accessibility, documentation, or open-source setup. Its single skill covers reverse engineering of binaries, packaged apps, firmware, and browser and Electron runtimes. The skill itself says (line 11–15): *"For ordinary analysis of a complete source repository, use normal repository tools and do not run REA readiness or provider commands."*

### How Rea is invoked
- **MCP:** tools such as `mcp__rea__capture_browser_scenario` and `mcp__rea__inspect_web_page` are loaded with ToolSearch and called directly.
- **CLI:** `rea <command> --json`, for example `rea analyze-javascript-application <path> --json`.
- **Skill:** `reverse-engineer-anything` (instructions only). Installing it does not register the MCP server.

### Rea tools that could apply to this project, and how they were used
| Tool | Possible role | Used? | Why |
|---|---|---|---|
| `inspect_web_page`, `capture_browser_scenario`, `capture_web_screenshot` | Observe public web pages | **No** | The built-in browser pane reads public pages directly. Recording uworld.com's runtime, network traffic, or scripts would go beyond observing its public feature descriptions, and the scope rule below forbids that. |
| `inspect_sqlite_database` | Inspect a SQLite snapshot | No | The project uses PostgreSQL. |
| `analyze_javascript_application` | Analyze our *own* built bundle | Optional | Only relevant for auditing our own production bundle. Not needed. |

**Scope rule for this project:** Rea is never pointed at UWorld's application code, bundles, network traffic, or authenticated areas. The product requirements come only from publicly readable marketing and help pages (see `product-requirements.md`), which stays within the Rea disclaimer and the project brief.

## 2. Skills available in this Claude Code session

These skills are registered in this session's skill list. "Used" is filled in only for skills actually invoked; see `progress.md` for when.

| Role | Skill (exact name) | Source | Intended use here | Used |
|---|---|---|---|---|
| Web reconnaissance | built-in browser pane (`mcp__Claude_Browser__*`) | Claude desktop | Read UWorld's public pages | yes |
| Frontend / UI | `21st-ui-build`, `design-review`, `design-consultation` | gstack / 21st | Build and critique the UI | see progress.md |
| Browser QA / E2E | `qa`, `qa-only`, `browse` | gstack | Click through flows, find bugs | see progress.md |
| Security | `cso`, `security-review` | gstack / Claude Code | Threat model, OWASP checks | see progress.md |
| Code review | `review`, `code-review`, `ponytail:ponytail-review` | gstack / Claude Code / ponytail | Diff review | see progress.md |
| Testing discipline | `superpowers:test-driven-development`, `superpowers:verification-before-completion` | superpowers | Test-first, verify before claiming done | see progress.md |
| Performance | `benchmark` | gstack | Page performance | optional |
| Docs | `document-generate` | gstack | Fill documentation gaps | optional |

### Limitations
- Each skill is a set of instructions for the agent. It doesn't install dependencies or prove that a feature works. Tests and the browser do that.
- gstack skills that drive a separate browser binary (`browse`, `qa`) need that binary installed. Where it isn't available, the built-in browser pane and Playwright are used instead, and this is reported.
- No skill here generates medical content. All seed questions are original and labeled as demo content.

## 3. Dependency license and security review
Done again at install time. See `docs/architecture.md` → *Dependencies and licenses*.
