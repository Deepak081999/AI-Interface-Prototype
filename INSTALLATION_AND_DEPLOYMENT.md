# 🚀 AI Interface Prototype - Complete Setup & Deployment Guide

Welcome! This guide will walk you through setting up the AI Interface Prototype locally and deploying it to Vercel.

## 📦 What You Received

You should have received a `ai-interface-prototype.zip` file containing:

- Complete Next.js project with TypeScript
- React components with Storybook documentation
- Tailwind CSS styling
- Mock API endpoints
- Ready-to-deploy configuration

## 🛠️ Local Installation

### Step 1: Prerequisites

Make sure you have these installed:

- **Node.js 18+** - Download from [nodejs.org](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional) - Download from [git-scm.com](https://git-scm.com/)

**Check your versions:**

```bash
node --version   # Should be 18.0 or higher
npm --version    # Should be 8.0 or higher
```

### Step 2: Extract and Setup

1. **Extract the zip file:**

   ```bash
   unzip ai-interface-prototype.zip
   cd ai-interface-prototype
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   ⏱️ _This will take 2-5 minutes depending on your internet speed_

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit `http://localhost:3000` - you should see the AI Interface! 🎉

### Step 3: Explore the Features

- **Model Selector**: Choose between different AI models
- **Parameter Controls**: Adjust temperature and token limits with sliders
- **Template System**: Save and load prompt templates
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Dark Mode**: Automatic theme switching

### Step 4: Component Library (Optional)

To explore the component documentation:

```bash
npm run storybook
```

Visit `http://localhost:6006` to see interactive component demos.

## 🌐 Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications. Here are three methods:

### Method 1: Direct Deployment (Easiest)

1. **Go to Vercel:**

   - Visit [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Deploy from ZIP:**
   - Click "Add New..." → "Project"
   - Drag and drop your project folder or browse to select it
   - Vercel will automatically detect it's a Next.js project
   - Click "Deploy"

### Method 2: Git Repository (Best for ongoing development)

1. **Create a Git repository:**

   ```bash
   cd ai-interface-prototype
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Push to GitHub:**

   - Create a new repository on [github.com](https://github.com)
   - Follow GitHub's instructions to push your local repository

3. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Click "Deploy"

### Method 3: Vercel CLI (For developers)

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd ai-interface-prototype
   vercel
   ```
   Follow the prompts to deploy.

## 🔧 Build Commands Reference

| Command                   | Description                              |
| ------------------------- | ---------------------------------------- |
| `npm run dev`             | Start development server with hot reload |
| `npm run build`           | Build for production                     |
| `npm run start`           | Start production server (after build)    |
| `npm run lint`            | Check code quality                       |
| `npm run storybook`       | Start component documentation            |
| `npm run build-storybook` | Build Storybook for production           |

## 📁 Project Structure

```
ai-interface-prototype/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── app/               # Next.js pages and API routes
│   │   ├── api/          # Mock API endpoints
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Main page
│   ├── components/        # React components
│   │   ├── *.tsx         # Component files
│   │   └── *.stories.tsx # Storybook documentation
│   └── data/             # Mock data (templates)
├── .storybook/           # Storybook configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.ts        # Next.js configuration
└── README.md            # Project documentation
```

## ⚡ Quick Start Scripts

For convenience, use these one-command starters:

**Mac/Linux:**

```bash
./quick-start.sh
```

**Windows:**

```bash
quick-start.bat
```

## 🎨 Customization

### Adding New AI Models

Edit `src/components/ModelSelector.tsx`:

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

Edit `src/data/templates.json`:

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

### Styling Changes

The design system is in `tailwind.config.ts` - you can customize:

- Color palette
- Typography
- Spacing
- Animations

## 🐛 Troubleshooting

### Common Issues

**❌ "node: command not found"**

- Install Node.js from [nodejs.org](https://nodejs.org/)

**❌ "npm install" fails**

- Clear cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

**❌ "Port 3000 already in use"**

- Stop other applications using port 3000
- Or use a different port: `npm run dev -- --port 3001`

**❌ Build errors**

- Make sure all dependencies are installed: `npm install`
- Clear Next.js cache: `rm -rf .next`
- Check TypeScript errors: `npm run lint`

**❌ Vercel deployment fails**

- Make sure your `package.json` has the correct build script
- Check that all dependencies are listed in `package.json`
- Ensure there are no TypeScript errors locally

### Getting Help

1. Check the console/terminal for error messages
2. Make sure you're using Node.js 18+ (`node --version`)
3. Try deleting `node_modules` and running `npm install` again
4. Check if your antivirus is blocking npm operations

## 🚀 Deployment Verification

After deploying to Vercel, you should be able to:

✅ **Visit your live URL** (Vercel provides this)  
✅ **Test all features** (model selector, parameters, templates)  
✅ **Verify responsive design** (test on mobile/desktop)  
✅ **Check dark mode** (should work automatically)

## 📝 Environment Variables (Optional)

If you need API keys or custom configuration:

1. **Create `.env.local` in the project root:**

   ```
   NEXT_PUBLIC_API_URL=https://your-api.com
   OPENAI_API_KEY=your-key-here
   ```

2. **In Vercel Dashboard:**
   - Go to your project settings
   - Add environment variables
   - Redeploy the project

## 🎯 What's Included

- **🎨 Modern UI**: Responsive design with Tailwind CSS
- **🔧 TypeScript**: Full type safety
- **📱 Mobile-First**: Works perfectly on all devices
- **🌙 Dark Mode**: Automatic theme switching
- **📚 Storybook**: Component documentation
- **🚀 Fast**: Optimized build and performance
- **♿ Accessible**: ARIA labels and keyboard navigation

## 🤝 Contributing

To make changes:

1. Edit files in the `src/` directory
2. Changes appear automatically in development
3. Run `npm run build` to test production build
4. Deploy to Vercel for live updates

---

## 📞 Support

If you encounter any issues:

1. Check this guide first
2. Look at the error messages in your terminal/console
3. Try the troubleshooting steps above
4. Check the project's README.md for additional details

**Happy coding! 🎉**

---

_This AI Interface Prototype was built with Next.js 15, React 18, TypeScript, and Tailwind CSS. It's optimized for modern browsers and designed to be easily customizable and deployable._
