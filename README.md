# Personality Quiz - Surrounded by Idiots

A fun interactive personality quiz based on the four-color behavioral model from Thomas Erikson's book "Surrounded by Idiots".

## 🎨 The Four Color Personalities

- **Red**: Decisive, competitive leaders who value results
- **Yellow**: Optimistic, social, creative communicators
- **Green**: Patient, supportive, harmonious team players
- **Blue**: Analytical, precise, detail-oriented thinkers

## 📝 Features

- Interactive 10-question quiz
- Beautiful intro screen explaining each color type
- Real-time progress tracking
- Detailed results with primary and secondary colors
- Percentage breakdown of all four personality types
- Mobile-responsive design
- Smooth animations and transitions

## 🚀 How to Run This Project

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

The app will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation & Setup

**Option 1: Quick Start (If you already have the files)**

```bash
# 1. Navigate to project folder
cd personality-quiz

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will open at `http://localhost:5173`

---

**Option 2: Create From Scratch**

1. **Create the project with Vite:**

```bash
mkdir personality-quiz
cd personality-quiz
npm create vite@latest . -- --template react-ts
```

2. **Install dependencies:**

```bash
npm install
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
```

3. **Initialize Tailwind CSS:**

```bash
npx tailwindcss init -p
```

4. **Create folder structure:**

```bash
mkdir -p src/components src/data src/types
```

5. **Copy all the provided files** into their respective folders (see Project Structure below)

6. **Update package.json** - Add `"type": "module"` after `"private": true`

7. **Start the development server:**

```bash
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 The Four Color Personalities

- **Red**: Decisive, competitive leaders who value results
- **Yellow**: Optimistic, social, creative communicators
- **Green**: Patient, supportive, harmonious team players
- **Blue**: Analytical, precise, detail-oriented thinkers

## 📝 Features

- Interactive 10-question quiz
- Beautiful intro screen explaining each color type
- Real-time progress tracking
- Detailed results with primary and secondary colors
- Percentage breakdown of all four personality types
- Mobile-responsive design
- Smooth animations and transitions

## 🛠️ Built With

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

## 📚 Inspired By

"Surrounded by Idiots" by Thomas Erikson - A book about understanding different communication styles and personality types using a four-color model.
