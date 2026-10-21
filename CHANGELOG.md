# Changelog

## 0.9.12 — 2026-10-22

- Clear all 8 open npm advisories from the dependency tree: `make-fetch-happen` 16, `marked-katex-extension` 5.1.13 with `katex` 0.18.11, `lint-staged` 17 (drops `braces`), plus overrides pinning `ip-address` / `brace-expansion` / `http-cache-semantics` to their fixed versions.
- `pnpm run build` no longer shells out to `npx rimraf`; `rimraf` is a devDependency run through `pnpm exec`, so the build no longer depends on whichever version npm happens to download.
- Repository tooling moved to pnpm (`pnpm-lock.yaml`, CI and release workflows), and `pnpm audit --audit-level=moderate` now runs in CI.

## 0.9.11 — 2026-09-04

- Use the OpenAI Responses API as CZON's AI inference upstream.
- Default inference through OpenAI LB at `https://openai.ntnl.io/v1` with model `gpt-5.6-luna`.
- Preserve explicit `OPENAI_BASE_URL` and `OPENAI_MODEL` overrides.
