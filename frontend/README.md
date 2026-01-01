# Programming Helper

A modern, dark-mode programming resource website for mastering LeetCode patterns, system design, programming languages, frameworks, DevOps, and AI/ML.

## � Table of Contents

- [How to Run](#-how-to-run)
- [Project Structure](#-project-structure)
- [Data Flow & Architecture](#-data-flow--architecture)
- [How to Add New Content](#-how-to-add-new-content)
- [Tech Stack & Libraries](#-tech-stack--libraries)

---

## � How to Run

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   - Navigate to [http://localhost:3000](http://localhost:3000)
   - Hot reload is enabled - changes will reflect automatically

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Other Commands

```bash
# Run ESLint
npm run lint
```

---

## 📁 Project Structure

```
frontend/
├── app/                          # Next.js App Router (file-based routing)
│   ├── layout.tsx               # Root layout - adds Navbar globally
│   ├── page.tsx                 # Home page (/)
│   ├── globals.css              # Global styles & theme variables
│   │
│   ├── leetcode/                # Section: LeetCode (/leetcode)
│   │   ├── page.tsx            # Redirects to first topic
│   │   └── [topic]/            # Dynamic routes (/leetcode/prefix-sum)
│   │       └── page.tsx        # Topic content page
│   │
│   ├── system-design/           # Section: System Design
│   ├── languages/               # Section: Languages
│   ├── frameworks/              # Section: Frameworks
│   ├── devops/                  # Section: DevOps
│   └── ai-ml/                   # Section: AI/ML
│
├── components/                   # Reusable React components
│   ├── navbar.tsx               # Top navigation bar
│   ├── sidebar.tsx              # Sidebar navigation
│   ├── hero-section.tsx         # Landing page hero
│   ├── content-layout.tsx       # Layout wrapper for content pages
│   └── ui/                      # shadcn/ui components
│
├── lib/                          # Utilities and configuration
│   ├── sections.ts              # 🔑 Central config for all sections/topics
│   ├── cn.ts                    # Tailwind class merger utility
│   └── utils.ts                 # Other helper functions
│
├── public/                       # Static assets (images, fonts, etc.)
│
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
└── README.md                     # This file
```

### Key Files Explained

| File | Purpose |
|------|---------|
| `lib/sections.ts` | **Single source of truth** - defines all sections, topics, and navigation |
| `components/navbar.tsx` | Top navigation - auto-generates links from `sections.ts` |
| `components/sidebar.tsx` | Sidebar navigation - receives section data as props |
| `components/content-layout.tsx` | Wraps all content pages with consistent layout |
| `app/[section]/[topic]/page.tsx` | Template for all topic pages |

---

## 🏗️ Data Flow & Architecture

### Architecture Overview

This project uses a **configuration-driven architecture** where all navigation and routing is controlled by a single configuration file.

```
┌─────────────────────────────────────────────────────────────┐
│                    lib/sections.ts                           │
│              (Single Source of Truth)                        │
│  - Defines all sections (LeetCode, System Design, etc.)     │
│  - Defines all topics (Prefix Sum, Binary Search, etc.)     │
│  - Provides helper functions                                 │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ├──────────────────┬──────────────────────┐
                     ▼                  ▼                      ▼
              ┌─────────────┐   ┌──────────────┐    ┌─────────────────┐
              │   Navbar    │   │   Sidebar    │    │  Page Routes    │
              │             │   │              │    │                 │
              │ Maps all    │   │ Shows topics │    │ /[section]/     │
              │ sections to │   │ for current  │    │ [topic]         │
              │ nav links   │   │ section      │    │                 │
              └─────────────┘   └──────────────┘    └─────────────────┘
                     │                  │                      │
                     └──────────────────┴──────────────────────┘
                                        │
                                        ▼
                              ┌──────────────────┐
                              │   User sees      │
                              │ fully rendered   │
                              │     page         │
                              └──────────────────┘
```

### Data Flow Example

Let's trace what happens when a user navigates to `/leetcode/prefix-sum`:

1. **URL Request**: User clicks on "Prefix Sum" in sidebar
   
2. **Next.js Routing**: Matches pattern `/leetcode/[topic]`
   - Executes: `app/leetcode/[topic]/page.tsx`
   
3. **Page Component**:
   ```typescript
   // Gets section from config
   const section = getSectionById('leetcode');
   
   // Gets topic from URL params
   const { topic } = await params; // 'prefix-sum'
   
   // Finds matching subsection
   const subsection = section.subsections.find(s => s.id === topic);
   ```

4. **ContentLayout Component**:
   - Receives section data
   - Renders Sidebar with all LeetCode topics
   - Highlights active topic (Prefix Sum)

5. **Final Render**: User sees page with navigation + content

### Component Architecture

```
App (layout.tsx)
├── Navbar (always visible)
│   └── Maps sections.ts → nav links
│
└── Page Content
    └── ContentLayout (for section pages)
        ├── Sidebar
        │   └── Maps subsections → topic links
        └── Main Content Area
            └── Your content here
```

### Key Design Patterns

1. **Configuration-Driven**
   - All structure in `sections.ts`
   - Components read from config, don't hardcode

2. **Composition Over Inheritance**
   - Components composed together
   - No complex class hierarchies

3. **Props Down, Events Up**
   - Data flows down via props
   - User interactions bubble up

4. **Type Safety**
   - TypeScript interfaces for all data
   - Auto-complete for section/topic IDs

---

## ➕ How to Add New Content

### Adding a New Topic to Existing Section

**Example**: Add "Union Find" to LeetCode

1. Open `lib/sections.ts`
2. Find the `leetcode` section
3. Add to `subsections` array:

```typescript
{
  id: 'leetcode',
  name: 'LeetCode',
  subsections: [
    // ... existing topics ...
    { 
      id: 'union-find', 
      name: 'Union Find',
      description: 'Disjoint set data structure'
    },
  ],
}
```

**That's it!** The topic will automatically:
- ✅ Appear in the sidebar
- ✅ Have a route at `/leetcode/union-find`
- ✅ Be statically generated at build time

### Adding a New Section

**Example**: Add "Databases" section

**Step 1**: Add to `lib/sections.ts`

```typescript
export const sections = [
  // ... existing sections ...
  {
    id: 'databases',
    name: 'Databases',
    icon: 'Database', // optional
    subsections: [
      { id: 'sql', name: 'SQL', description: 'Structured Query Language' },
      { id: 'nosql', name: 'NoSQL', description: 'Non-relational databases' },
      { id: 'orm', name: 'ORM', description: 'Object-Relational Mapping' },
    ],
  },
] as const;
```

**Step 2**: Create section redirect page

Create `app/databases/page.tsx`:

```typescript
import { sections } from "@/lib/sections";
import { redirect } from "next/navigation";

export default function DatabasesPage() {
  const section = sections.find(s => s.id === 'databases');
  if (!section) redirect('/');
  redirect(`/databases/${section.subsections[0].id}`);
}
```

**Step 3**: Create topic page template

Create `app/databases/[topic]/page.tsx`:

```typescript
import { sections } from "@/lib/sections";
import { ContentLayout } from "@/components/content-layout";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const section = sections.find(s => s.id === 'databases');
  if (!section) return [];
  return section.subsections.map((subsection) => ({
    topic: subsection.id,
  }));
}

export default async function DatabaseTopicPage({ 
  params 
}: { 
  params: Promise<{ topic: string }> 
}) {
  const { topic } = await params;
  const section = sections.find(s => s.id === 'databases');
  
  if (!section) notFound();
  const subsection = section.subsections.find(s => s.id === topic);
  if (!subsection) notFound();

  return (
    <ContentLayout section="databases" subsections={section.subsections}>
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">{subsection.name}</h1>
        {/* Add your content here */}
      </div>
    </ContentLayout>
  );
}
```

**Done!** The section will automatically appear in the navbar.

### Customizing Page Content

Each topic page has placeholder content. Replace it with your own components:

```tsx
// Create reusable content components
components/content/
├── code-block.tsx
├── concept-card.tsx
└── problem-list.tsx

// Use in pages
import { CodeBlock } from "@/components/content/code-block";
import { ConceptCard } from "@/components/content/concept-card";

<ContentLayout section="leetcode" subsections={section.subsections}>
  <ConceptCard title="Time Complexity" description="..." />
  <CodeBlock code={exampleCode} language="python" />
</ContentLayout>
```

### Helper Functions

Use these instead of manual searches:

```typescript
import { getSectionById, getSubsectionById } from "@/lib/sections";

// Get a section
const leetcode = getSectionById('leetcode');

// Get a specific subsection  
const dp = getSubsectionById('leetcode', 'dp');

// Get all topic IDs for a section
const topicIds = getSubsectionIds('leetcode');
```

---

## 🛠️ Tech Stack & Libraries

### Core Framework
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
  - Server Components
  - File-based routing
  - Static generation
  - Hot reload development
  
- **[React 19](https://react.dev/)** - UI library
  - Latest features and performance improvements

- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
  - Catch errors at compile time
  - Auto-completion in IDE
  - Better refactoring

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
  - No CSS files to manage
  - Responsive design utilities
  - Dark mode support
  - Custom design tokens in `globals.css`

- **[shadcn/ui](https://ui.shadcn.com/)** - Component library
  - Copy-paste components
  - Built on Radix UI primitives
  - Fully customizable

- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
  - Smooth page transitions
  - Staggered animations
  - Gesture support
  - Aceternity UI-inspired effects

### Icons & Utilities
- **[Lucide React](https://lucide.dev/)** - Icon library
  - 1000+ consistent icons
  - Tree-shakeable
  - Customizable size and color

- **[clsx](https://github.com/lukeed/clsx)** - Conditional class names
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes
  - Handles conflicting classes intelligently

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **Geist Font** - Modern sans-serif and monospace fonts

### Architecture Patterns Used

| Pattern | Implementation |
|---------|----------------|
| **Configuration-driven** | `sections.ts` controls all structure |
| **Component composition** | Reusable, props-based components |
| **File-based routing** | Next.js App Router |
| **Static generation** | `generateStaticParams` for all pages |
| **Type safety** | TypeScript throughout |
| **Utility-first CSS** | Tailwind for all styling |
| **Server Components** | Default in Next.js 16 |

### Project Features

| Feature | Implementation |
|---------|----------------|
| **Dark Mode** | CSS variables + Tailwind dark mode |
| **Responsive Design** | Tailwind breakpoints (sm, md, lg, xl) |
| **Animations** | Framer Motion for page transitions |
| **Navigation** | Auto-generated from config |
| **Type-safe Routes** | TypeScript validates section/topic IDs |
| **SEO-friendly** | Static generation + metadata |

### Design Tokens

Theme customization via CSS variables in `app/globals.css`:

```css
.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  /* ... more colors */
}
```

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ JavaScript features
- CSS Grid and Flexbox

---

## 📚 Content Sections

The website covers:

1. **LeetCode** - 16 coding pattern topics
2. **System Design** - 4 architecture topics  
3. **Languages** - Python, TypeScript, Java
4. **Frameworks** - 7 web/backend frameworks
5. **DevOps** - Cloud, containers, testing
6. **AI/ML** - Agents, NLP, CV, ML

All sections follow the same modular structure for consistency.

---

## 🎯 Next Steps

1. **Add actual content** to topic pages
2. **Create content components** for code examples, diagrams, etc.
3. **Add search functionality**
4. **Implement progress tracking**
5. **Add authentication** (optional)

---

## � License

This project is open source and available for educational purposes.
