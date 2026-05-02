// Resolve public/ assets respecting Vite's base path (needed for GitHub Pages subpath).
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\//, '')}`;
}
