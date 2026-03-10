# AGENTS.md - Coding Guidelines for TheForGivenOne Portfolio

## Project Overview
Next.js 16 portfolio built with Vinext (Vite-based Next.js replacement), React 19, TypeScript 5, and Tailwind CSS 4. Deploys to Cloudflare Workers (edge) or GitHub Pages (static).

## Build Commands

```bash
# Development
npm run dev              # Next.js dev server (port 3000)
npm run dev:vinext       # Vinext dev server (port 3001)

# Production builds
npm run build            # Next.js static build → dist/
npm run build:vinext     # Vinext build → dist/client + dist/server

# Deployment
npm run deploy:cf        # Deploy to Cloudflare Workers
npm run deploy:gh        # Build for GitHub Pages (creates dist/.nojekyll)

# Code quality
npm run lint             # ESLint with Next.js config
```

## Tech Stack
- **Framework:** Next.js 16.1.6 (App Router) + Vinext
- **Runtime:** React 19.2.4 + React DOM 19.2.4
- **Language:** TypeScript 5 (strict mode)
- **Styling:** Tailwind CSS 4
- **Deployment:** Cloudflare Workers (vinext deploy) or static export

## Code Style Guidelines

### TypeScript
- Use `strict: true` - no `any` types
- Prefer explicit return types for exported functions
- Use `React.FC` pattern or explicit props interfaces
- Path alias: `@/*` maps to root directory

### Naming Conventions
- **Components:** PascalCase (e.g., `Hero.tsx`, `ContactSection.tsx`)
- **Functions/Variables:** camelCase (e.g., `handleSubmit`, `isVisible`)
- **Constants:** UPPER_SNAKE_CASE for true constants
- **Files:** PascalCase for components, camelCase for utilities

### Imports (Order)
1. React/Next imports
2. Third-party libraries
3. Local components
4. Types/interfaces
5. Styles/CSS

Example:
```typescript
import { useEffect, useState } from "react"
import { Metadata } from "next"
import Hero from "./sections/Hero"
import "./globals.css"
```

### Component Structure
```typescript
"use client"  // If using hooks/browser APIs

import { useState } from "react"

export default function ComponentName() {
  // State hooks
  // Effects
  // Handlers
  
  return (
    <section>
      {/* JSX */}
    </section>
  )
}
```

### Styling (Tailwind CSS)
- Use arbitrary values sparingly: `bg-[#0a0a0f]`
- Custom CSS variables defined in `globals.css`:
  - `--background`, `--foreground`, `--accent-primary`
  - `--accent-secondary`, `--accent-glow`
- Component classes should be mobile-first with responsive variants
- Group related classes together

### Error Handling
- Use try/catch for async operations
- Provide fallback UI for error states
- Log errors to console in development
- Never expose sensitive error details in production

### Client Components
Mark with `"use client"` directive when using:
- React hooks (useState, useEffect, etc.)
- Browser APIs (window, document, localStorage)
- Event handlers requiring DOM access

### File Organization
```
app/
├── sections/        # Page sections (Hero, Services, etc.)
├── page.tsx         # Main page composition
├── layout.tsx       # Root layout with fonts/metadata
└── globals.css      # Global styles + CSS variables
worker/              # Cloudflare Workers handler
public/              # Static assets
```

### Environment
- ESM only (`"type": "module"` in package.json)
- Exclude `worker/` directory from TypeScript compilation
- Build outputs to `dist/` for static, `dist/client` + `dist/server` for Vinext

### Performance
- Use Next.js Image component for optimized images
- Lazy load below-fold sections
- Minimize client-side JavaScript - prefer Server Components
- Use CSS transitions over JS animations when possible

### Git
- Exclude: `.next/`, `dist/`, `node_modules/`, `.wrangler/`
- Commit message style: present tense, descriptive (e.g., "Add contact form validation")
