---
name: "React Components"
description: "Use when creating or editing React components in src/components, including props, layout, navigation, and Tailwind styling."
applyTo: "src/components/**/*.tsx"
---

# Component Guidelines

- Write React components in TypeScript using `.tsx`; export components by name to match the existing project pattern.
- Add prop types when a component accepts props. Use `ReactNode` for renderable `children`; avoid adding types where TypeScript can infer them.
- Keep shared page chrome in `Layout`. Render nested route content with React Router's `<Outlet />` and use `Link` or `NavLink` for in-app navigation.
- Use Tailwind CSS v4 utility classes for styling. Preserve existing visual choices and avoid changing design unless the task asks for it.
- Keep components focused on reusable interface elements; page-specific content belongs in `src/pages`.
- Run `npm run lint` and `npm run build` after meaningful component changes when practical.