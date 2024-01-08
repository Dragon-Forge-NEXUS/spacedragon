/*
 * This maps the necessary packages to a version.
 * This improves performance significantly over fetching it from the npm registry.
 */
export const dependencyVersionMap = {
  // TailwindCSS
  tailwindcss: "^3.3.5",
  "@astrojs/tailwind": "^5.1.0",
} as const;
export type AvailableDependencies = keyof typeof dependencyVersionMap;
