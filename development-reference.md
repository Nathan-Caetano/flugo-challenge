---
description: Scripts, source layout, and extension points.
icon: code
---

# Development reference

## Development reference

### Scripts

Use the following npm scripts from the project root:

| Command           | Purpose                                 |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Starts the development server with HMR. |
| `npm run build`   | Creates a production build in `dist/`.  |
| `npm run preview` | Serves the local production build.      |
| `npm run lint`    | Runs ESLint.                            |

### Source layout

```
src/
├─ components/  # Reusable tables, modals, and stepper components
├─ pages/       # List and form pages
├─ services/    # Firestore employee CRUD access
├─ layout/      # Sidebar and top-bar layout
├─ firebase/    # Firebase configuration
└─ types/       # TypeScript types, including Employee
```

### Styling

Material UI provides the component system. Update layout tokens and theme styling in `src/theme.ts`.

### Navigation

React Router v7 handles application navigation. Keep page components in `src/pages/` and shared layout elements in `src/layout/`.

### Planned improvements

The following improvements are identified for future work:

* Add Firebase Authentication.
* Use `react-hook-form` or `zod` for richer validation.
* Add pagination, sorting, search, and department filters.
