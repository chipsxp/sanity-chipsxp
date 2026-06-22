# Bug Log

Bugs encountered and their solutions. Keep entries brief. Add new entries at the top.

## Format

```
### YYYY-MM-DD - Brief Description
- **Issue**: What went wrong
- **Root Cause**: Why it happened
- **Solution**: How it was fixed
- **Prevention**: How to avoid it in the future (optional)
```

---

### 2026-06-19 - Next-Sanity Typegen Naming Mismatch
- **Issue**: TypeScript error `has no exported member named 'PAGE_QUERYResult'` after running Sanity Typegen.
- **Root Cause**: `sanity typegen` uses the exact casing of the query constant (e.g. `const PAGE_QUERY`). If the constant is all caps with an underscore, it generates `PAGE_QUERY_RESULT`, not `PAGE_QUERYResult`.
- **Solution**: Changed type imports in components to explicitly use `PAGE_QUERY_RESULT` instead of assuming camelCase `Result` suffix.
- **Prevention**: Always check the generated `sanity.types.ts` file for the exact name of the generated type, rather than guessing the suffix.

<!-- Add entries here as bugs are encountered and resolved -->
