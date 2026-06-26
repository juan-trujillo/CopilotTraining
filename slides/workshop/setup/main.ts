// Slidev resolves `setup/main.ts` relative to each deck file's directory,
// not the project root. This re-export ensures the canonical setup at
// slides/setup/main.ts is picked up by every deck under workshop/.
// Keep all four category shims (tech-talks, intro-talks, exec-talks, workshop)
// pointing at the same file. See slides/setup/main.ts for the actual logic.
export { default } from '../../setup/main'
