# 🚀 AI Interface Prototype - Setup Guide

Welcome! This guide will help you set up and run the AI Interface Prototype on your local machine.

## 📋 Prerequisites

Before you begin, make sure you have the following installed on your system:

### Required Software

- **Node.js** (version 18.0 or higher)
  - Download from: https://nodejs.org/
  - Check your version: `node --version`
- **npm** (comes with Node.js)
  - Check your version: `npm --version`
- **Git** (optional, for version control)
  - Download from: https://git-scm.com/

### System Requirements

- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **RAM**: At least 4GB recommended
- **Storage**: At least 500MB free space

## 🛠️ Installation & Setup

### Step 1: Extract the Project

1. Extract the `ai-interface-prototype.zip` file
2. Open your terminal/command prompt
3. Navigate to the extracted folder:
   ```bash
   cd ai-interface-prototype
   ```

### Step 2: Install Dependencies

Install all required packages:

```bash
npm install
```

This will:

- Install all dependencies listed in `package.json`
- Create a `node_modules` folder with all required packages
- Generate a `package-lock.json` file for dependency locking

**Note**: This step may take 2-5 minutes depending on your internet connection.

### Step 3: Start the Development Server

Run the development server:

```bash
npm run dev
```

You should see output similar to:

```
▲ Next.js 15.4.6 (Turbopack)
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Starting...
✓ Ready in 1913ms
```

### Step 4: Open in Browser

Open your web browser and navigate to:

```
http://localhost:3000
```

🎉 **Success!** You should now see the AI Interface Prototype running locally.

## 🔧 Available Commands

| Command         | Description                                   |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start development server with hot reload      |
| `npm run build` | Build the application for production          |
| `npm run start` | Start the production server (run after build) |
| `npm run lint`  | Run ESLint to check code quality              |

## 🌐 Deployment Options

### 1. Vercel (Recommended)

- Best for Next.js applications
- Free tier available
- Automatic deployments from Git

**Steps:**

1. Sign up at [vercel.com](https://vercel.com)
2. Connect your Git repository
3. Deploy automatically on every push

### 2. Netlify

- Great for static sites
- Drag-and-drop deployment option

**Steps:**

1. Run `npm run build`
2. Upload the `out` folder to [netlify.com](https://netlify.com)

### 3. Docker

- For containerized deployment
- Works on any cloud provider

**Steps:**

```bash
docker build -t ai-interface-prototype .
docker run -p 3000:3000 ai-interface-prototype
```

## 📁 Project Structure

```
ai-interface-prototype/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # Reusable React components
│   └── data/             # Data files (templates, etc.)
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.ts        # Next.js configuration
└── README.md            # Project documentation
```

## 🎨 Features

- **Modern UI**: Built with Tailwind CSS and responsive design
- **TypeScript**: Full type safety and better development experience
- **Model Selection**: Choose from different AI models
- **Parameter Control**: Adjust temperature and token limits
- **Template System**: Pre-built prompt templates
- **Dark Mode**: Automatic dark/light theme support
- **Fast Refresh**: Instant updates during development

## 🐛 Troubleshooting

### Common Issues

#### 1. `node: command not found`

**Solution**: Install Node.js from https://nodejs.org/

#### 2. `npm install` fails

**Solutions**:

- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again
- Try using `npm install --legacy-peer-deps`

#### 3. Port 3000 already in use

**Solution**:

- Stop other applications using port 3000
- Or specify a different port: `npm run dev -- --port 3001`

#### 4. Build errors

**Solutions**:

- Make sure all dependencies are installed: `npm install`
- Clear Next.js cache: `rm -rf .next`
- Check for TypeScript errors: `npm run lint`

#### 5. Slow installation on Windows

**Solution**: Try using Windows Subsystem for Linux (WSL) for better performance

### Getting Help

If you encounter issues:

1. Check the console/terminal for error messages
2. Make sure you're using Node.js 18+ (`node --version`)
3. Try deleting `node_modules` and running `npm install` again
4. Check if your antivirus is blocking npm operations

## 🔄 Development Workflow

### Making Changes

1. Edit files in the `src/` directory
2. Changes will automatically reload in your browser
3. Check the terminal for any errors

### Adding Dependencies

```bash
# Add a new package
npm install package-name

# Add a development dependency
npm install --save-dev package-name
```

### Code Quality

- Run `npm run lint` to check for code issues
- The project uses TypeScript for type safety
- Tailwind CSS for styling

## 📝 Environment Variables

If you need to add environment variables:

1. Create a `.env.local` file in the root directory
2. Add your variables:
   ```
   NEXT_PUBLIC_API_URL=https://your-api.com
   SECRET_KEY=your-secret-key
   ```
3. Access them in your code:
   ```javascript
   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
   ```

## 🚀 Performance Tips

- **Development**: Use `npm run dev` for development with hot reload
- **Production**: Always run `npm run build` before deploying
- **Optimization**: The build process automatically optimizes images and code
- **Caching**: Next.js automatically caches for better performance

## 📚 Technology Stack

- **Framework**: Next.js 15.4.6
- **React**: 18.2.0
- **TypeScript**: 5.9.2
- **Styling**: Tailwind CSS 4.x
- **Build Tool**: Turbopack (Next.js bundler)
- **Deployment**: Vercel/Netlify/Docker ready

## 🤝 Contributing

To contribute to this project:

1. Make your changes
2. Test locally with `npm run dev`
3. Build and test production version: `npm run build && npm run start`
4. Submit your changes

---

**Happy coding! 🎉**

If you have any questions or need help, feel free to reach out!
