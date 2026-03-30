# AGENTS.md - Shadisaj Codebase Guidelines

## Project Overview

Shadisaj is a React SPA for an Indian wedding services B2B marketplace. Built with:
- **Framework**: React 19.2.0 with React Router DOM 7.13
- **Build Tool**: Vite 7.3.1
- **Styling**: Tailwind CSS 3.4.19
- **Icons**: Lucide React
- **Module System**: ES Modules

## Build, Lint, and Test Commands

```bash
# Development server (with HMR)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint all files
npm run lint

# Lint specific file
npx eslint src/pages/Home.jsx

# Lint with auto-fix
npx eslint . --fix
```

### Testing

**No test framework is currently configured.** If adding tests, consider Vitest (recommended for Vite projects):

```bash
# Future test commands (not yet configured)
npm run test              # Run all tests
npm run test <file>       # Run single test file
npx vitest src/pages/Home.test.jsx  # Single test
```

## Project Structure

```
src/
├── App.jsx           # Root component with routing
├── main.jsx          # Entry point
├── index.css         # Global Tailwind styles
├── components/       # Reusable UI components
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/            # Page-level components (route targets)
│   ├── Home.jsx
│   ├── VendorProducts.jsx
│   └── ...
└── data/             # Static data files
    ├── blogs.js
    ├── categories.js
    └── budgetCategories.js
```

## Code Style Guidelines

### File Naming

- **Components**: PascalCase with `.jsx` extension (`VendorProducts.jsx`)
- **Data files**: camelCase with `.js` extension (`budgetCategories.js`)
- **Config files**: lowercase with `.js` extension (`vite.config.js`)

### Component Structure

```jsx
// 1. External imports (react, libraries)
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// 2. Icon imports (from lucide-react)
import { Heart, ShoppingCart, Menu } from 'lucide-react';

// 3. Internal imports (relative paths)
import { blogs } from '../data/blogs';

// 4. Constants (defined before component)
const categories = [
  { slug: 'decorations', label: 'Decorations' },
];

// 5. Component definition (export default function)
export default function ComponentName() {
  // Hooks first
  const [state, setState] = useState(false);
  const location = useLocation();

  // Return JSX
  return (
    <div>...</div>
  );
}
```

### Import Order

1. React and React hooks
2. Third-party libraries (react-router-dom, etc.)
3. Icon imports from lucide-react
4. Internal components
5. Internal data/utilities

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `VendorProducts`, `BlogDetail` |
| Functions | camelCase | `setCategory`, `getBlogBySlug` |
| Constants | camelCase (arrays/objects) | `sidebarCategories`, `blogs` |
| CSS classes | Tailwind utilities | `bg-brand-interactive` |
| URL params | kebab-case | `vendor/products`, `privacy-policy` |

### Export Style

- **Components**: `export default function ComponentName()`
- **Data**: Named exports (`export const blogs = [...]`)
- **Utilities**: Named exports (`export function getBlogBySlug()`)

### JSX Conventions

- Use double quotes for JSX attributes: `className="..."`
- Use single quotes for JavaScript strings: `'Hello'`
- Self-close empty tags: `<input />`
- Use fragments when no wrapper needed: `<>...</>`

### Tailwind CSS Guidelines

Use the custom color palette defined in `tailwind.config.js`:

```jsx
// Brand colors
className="bg-brand-interactive"      // Gold (#d4af37)
className="text-brand-primary"        // Red (#d31023)
className="text-brand-logo"           // Maroon (#83242d)

// Background colors
className="bg-background-main"        // Beige (#f5f5dc)
className="bg-background-card"        // White (#ffffff)

// Text colors
className="text-text-primary"         // Brown (#5c4033)
className="text-text-primary/70"      // With opacity

// Utility colors
className="border-utility-border"     // Olive (#8b8000)

// Hover states
className="hover:bg-alternative-interactiveDark"  // Dark gold
```

### Responsive Design

Mobile-first approach with Tailwind breakpoints:

```jsx
// Stack on mobile, row on desktop
className="flex flex-col md:flex-row"

// Hidden on mobile, visible on desktop
className="hidden md:flex"

// Mobile-only visibility
className="md:hidden"
```

### Common UI Patterns

```jsx
// Rounded card with border
className="bg-background-card rounded-2xl border-2 border-utility-border/30"

// Interactive button
className="bg-brand-interactive text-white px-6 py-3 rounded-2xl font-semibold hover:bg-alternative-interactiveDark transition-all duration-300"

// Link styling
className="text-text-primary hover:text-brand-interactive transition"
```

### Error Handling

- No try-catch blocks currently in use (static data)
- Use optional chaining for potentially undefined values:
  ```jsx
  const activeName = categories.find(c => c.slug === active)?.label ?? 'Default';
  ```

### State Management

- Local state with `useState` for component-level state
- URL state with `useSearchParams` for filterable/shareable state
- No global state management (Redux/Zustand) currently

### Data Patterns

Static data files export arrays and helper functions:

```javascript
// data/blogs.js
export const blogs = [
  { slug: 'example', title: 'Example', ... }
];

export function getBlogBySlug(slug) {
  return blogs.find(b => b.slug === slug);
}
```

### ESLint Rules

Configured in `eslint.config.js` (flat config format):

- Extends: `@eslint/js` recommended, React Hooks, React Refresh
- `no-unused-vars`: Error, but ignores vars starting with uppercase or `_`
- Target files: `**/*.{js,jsx}`
- Ignores: `dist/` directory

### Git Commit Style

Use conventional commits:
```
feat: add budget planner page
fix: correct mobile navbar toggle
style: update card hover effects
refactor: extract category constants
```

## Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.2.0 | UI framework |
| react-router-dom | ^7.13.1 | Client-side routing |
| lucide-react | ^0.575.0 | Icon library |
| tailwindcss | ^3.4.19 | Utility-first CSS |
| vite | ^7.3.1 | Build tool |
| eslint | ^9.39.1 | Linting |

## Quick Reference

```bash
# Start dev server
npm run dev

# Check for lint errors
npm run lint

# Build for production
npm run build
```
