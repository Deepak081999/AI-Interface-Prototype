# AI Interface Prototype

A complete frontend-only AI interface prototype built with Next.js, TypeScript, and Tailwind CSS.

## Research

### AI Platform Analysis

I reviewed 5 leading AI platforms to identify the most compelling features for this prototype:

**1. OpenAI Playground** - Clean parameter controls with visual sliders and real-time value display. Excellent model selection interface with clear context length indicators.

**2. Anthropic Claude UI** - Intuitive conversation flow with excellent message formatting. Strong copy/download functionality and conversation management.

**3. Hugging Face Spaces** - Comprehensive template system with save/load functionality. Great community-driven prompt sharing and categorization.

**4. Microsoft Copilot Lab** - Sophisticated parameter presets (Creative, Balanced, Precise, Code) that instantly configure multiple settings. Professional layout with collapsible panels.

**5. Google AI Studio** - Responsive design excellence across devices. Seamless dark/light mode transitions with proper theme persistence.

### Selected Features (6 Core Elements)

1. **Model Selector Dropdown** - Comprehensive model listing with provider info, context lengths, and performance indicators
2. **Template System** - Save/load prompt templates with associated parameter configurations and modal interfaces
3. **Interactive Parameter Controls** - Visual sliders for temperature and max tokens with real-time feedback and preset buttons
4. **Chat Interface with Actions** - Message bubbles with copy and download JSON functionality plus metadata display
5. **Responsive Layout** - Mobile-first design with adaptive grid system and collapsible sidebars
6. **Dark Mode Support** - System preference detection with manual toggle and persistent theme storage

## Design

### Figma Mockup

_[Placeholder for Figma link - Design mockup would be created showing the main interface layout, component library, and responsive breakpoints]_

### Tailwind CSS Mapping

**Color System:**

- `primary-*`: Main brand colors (#0ea5e9 blue family) for buttons, links, and interactive elements
- `secondary-*`: Neutral grays (#64748b family) for text, borders, and backgrounds
- `accent-*`: Complementary orange (#f59e0b family) for highlights and status indicators
- `error-*`: Red tones (#ef4444 family) for warnings and destructive actions
- `warning-*`: Amber shades (#f59e0b family) for cautions and notifications

**Typography:**

- `font-sans`: Inter for clean, readable body text and UI elements
- `font-mono`: JetBrains Mono for code, parameter values, and technical displays
- `text-xs` to `text-xl`: Hierarchical sizing for information density
- `font-medium` and `font-semibold`: Strategic weight usage for visual hierarchy

**Spacing & Layout:**

- `space-y-*` and `gap-*`: Consistent vertical rhythm using 4px base unit
- `p-4`, `p-6`: Standard padding for cards and containers
- `rounded-lg`: 8px border radius for modern, friendly appearance
- `shadow-sm`: Subtle elevation for layered interface depth

**Responsive Breakpoints:**

- Mobile: Default styles with single-column layout
- `md:`: 768px+ for tablet portrait with adjusted grid
- `lg:`: 1024px+ for desktop with full sidebar/main content split

### Design Translation Notes

Each mockup element was translated to code through systematic component decomposition:

- **Card Layouts**: Achieved with white backgrounds, subtle borders, and consistent padding
- **Interactive Elements**: Hover states with `transition-colors` for smooth feedback
- **Visual Hierarchy**: Strategic use of text sizing, weights, and color contrast ratios
- **Accessibility**: Focus rings, ARIA labels, and keyboard navigation patterns

## Features

### 🎯 Model Selector

- Dropdown interface to choose between different AI models
- Support for OpenAI (GPT-3.5, GPT-4), Anthropic (Claude), and Google (Gemini) models
- Model details including context length and provider information
- Responsive design with dark mode support

### ✍️ Prompt Editor

- Large text area for prompt input with character count
- Template system with save/load functionality
- Pre-built templates for different use cases:
  - Creative Writing Assistant
  - Code Review Expert
  - Business Strategy Consultant
- Modal interfaces for template management

### ⚙️ Parameters Panel

- Interactive sliders for temperature (0-1) and max tokens (0-4000)
- Real-time parameter value display
- Quick preset buttons (Creative, Balanced, Precise, Code)
- Parameter guidelines and warnings
- Visual feedback with custom styled sliders

### 🎨 UI/UX Features

- Fully responsive layout using Tailwind CSS flex/grid utilities
- Dark mode support with system preference detection
- Custom color palette with primary, secondary, accent colors
- Smooth animations and transitions
- Accessible focus states and keyboard navigation
- Modern, polished design with proper spacing and typography

## Development

### Implementation Notes

**Architecture Decisions:**

- Next.js App Router for modern routing and API routes
- TypeScript strict mode for enhanced type safety and developer experience
- Component-first architecture with reusable UI building blocks
- Custom Tailwind configuration for consistent design system
- Mock API routes (/api/\*) for realistic data flow simulation

**Key Implementation Details:**

1. **Component Library**

   - Built 4 core components (Button, Slider, Modal, ChatBubble) with full Storybook documentation
   - Consistent prop interfaces and TypeScript definitions
   - Accessibility features including ARIA labels, focus management, and keyboard navigation
   - Responsive design patterns with mobile-first approach

2. **State Management**

   - React useState hooks for local component state
   - Centralized theme management with localStorage persistence
   - Real-time parameter synchronization between components
   - Proper loading states and error handling

3. **Mock API Integration**
   - `/api/models` - Returns available AI models with metadata
   - `/api/templates` - CRUD operations for prompt templates
   - `/api/generate` - Simulates AI response generation with realistic delays
   - Proper HTTP status codes and error responses

**Known Limitations:**

- Mock responses only (no real AI integration)
- Template persistence limited to session storage
- No user authentication or multi-user support
- Storybook stories use basic interactive examples (could be enhanced with more complex scenarios)

**Performance Optimizations:**

- Static generation for fast initial loads
- Proper React patterns to minimize re-renders
- Tailwind CSS purging for optimized bundle size
- Lazy loading patterns for non-critical components

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 with custom configuration
- **Fonts**: Inter (sans-serif) and JetBrains Mono (monospace)
- **Icons**: Heroicons (inline SVG)
- **State Management**: React useState hooks
- **Component Documentation**: Storybook 8.6.14
- **Development Tools**: ESLint, TypeScript compiler

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Installation

1. **Extract the project** (if you received a zip file):
```bash
unzip ai-interface-prototype.zip
cd ai-interface-prototype
```

Or **clone the repository**:
```bash
git clone <repository-url>
cd ai-interface-prototype
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development:**
```bash
npm run dev
```

4. **Open your browser:** [http://localhost:3000](http://localhost:3000) 🎉

### Quick Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run storybook` | View component library |

### Component Documentation

Explore the interactive component library:
```bash
npm run storybook
```
Open [http://localhost:6006](http://localhost:6006) to see all components with examples.

## 🌐 Deployment

### Vercel (Recommended) - Zero Configuration

This project is optimized for Vercel deployment:

**Option 1: Direct Upload**
1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "Add New..." → "Project"
3. Drag and drop your project folder
4. Click "Deploy" - Done! 🚀

**Option 2: Git Integration**
1. Push your code to GitHub/GitLab
2. Connect your repository to Vercel
3. Automatic deployments on every push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

### Other Platforms

**Netlify:**
```bash
npm run build
# Upload the 'out' folder to netlify.com
```

**Docker:**
```bash
docker build -t ai-interface-prototype .
docker run -p 3000:3000 ai-interface-prototype
```

> 📖 **Need detailed deployment help?** See `INSTALLATION_AND_DEPLOYMENT.md` for step-by-step guides.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── generate/route.ts     # Mock AI generation endpoint
│   │   ├── models/route.ts       # Available models API
│   │   └── templates/route.ts    # Template CRUD operations
│   ├── globals.css               # Global styles and Tailwind imports
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main application page
├── components/
│   ├── Button.tsx                # Reusable button component
│   ├── Button.stories.tsx        # Button component stories
│   ├── ChatBubble.tsx            # Chat message component
│   ├── ChatBubble.stories.tsx    # ChatBubble component stories
│   ├── Modal.tsx                 # Modal dialog component
│   ├── Modal.stories.tsx         # Modal component stories
│   ├── ModelSelector.tsx         # AI model selection component
│   ├── ParametersPanel.tsx       # Parameter controls and presets
│   ├── PromptEditor.tsx          # Prompt input and template management
│   ├── Slider.tsx                # Custom slider component
│   └── Slider.stories.tsx        # Slider component stories
├── data/
│   └── templates.json            # Mock template data
└── .storybook/
    ├── main.ts                   # Storybook configuration
    └── preview.ts                # Global Storybook settings
```

## Customization

### Adding New Models

Edit the `availableModels` array in `src/components/ModelSelector.tsx`:

```typescript
const availableModels: Model[] = [
  {
    id: "your-model-id",
    name: "Your Model Name",
    description: "Model description",
    provider: "Provider Name",
    contextLength: 8192,
  },
  // ... existing models
];
```

### Adding New Templates

Edit `src/data/templates.json` to add new prompt templates:

```json
{
  "templates": [
    {
      "id": "new-template",
      "name": "Template Name",
      "description": "Template description",
      "prompt": "Your prompt text here...",
      "parameters": {
        "temperature": 0.7,
        "maxTokens": 1500
      }
    }
  ]
}
```

### Styling Customization

The design system is defined in `tailwind.config.ts`. You can customize:

- Color palette (primary, secondary, accent colors)
- Typography (font families, sizes)
- Spacing and sizing utilities
- Animation and transition effects

## Features in Detail

### Responsive Design

- Mobile-first approach with breakpoint-specific layouts
- Grid system that adapts from single column (mobile) to multi-column (desktop)
- Touch-friendly interface elements for mobile devices

### Accessibility

- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management with visible focus indicators
- Color contrast compliance
- Screen reader friendly

### Performance

- Optimized bundle size with tree shaking
- Lazy loading of non-critical components
- Efficient re-renders with proper React patterns
- Static generation for fast page loads

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Next.js team for the excellent framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for seamless deployment platform
- Heroicons for the beautiful icon set
