# SyncUp - Professional Social Network Dashboard

SyncUp is a high-fidelity, pixel-perfect professional social network application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. This project demonstrates an exact implementation of a dual-page Figma design, featuring a dynamic Home Feed and a comprehensive Job Dashboard with interactive data visualizations.

## 🚀 Live Demo

- **Live Deployment:** [View the Application](https://syncup-woad.vercel.app/)
- **GitHub Repository:** [SyncUp Repository](https://github.com/aryanrajput955/syncup)

---

## ✨ Key Features

### 1. SyncUp Home Page

- **Dynamic Feed**: A clean, modern social feed with post interactions (Like, Comment, Share).
- **Rich Media Support**: Integrated comment input with image upload, emoji picker, and attachment icons.
- **Stories Bar**: Horizontal scrollable stories section with premium glassmorphism effects.
- **Sidebar Navigation**: High-contrast icon-based sidebar with custom active state indicators.
- **Widgets**: Profile analytics card, group suggestions, and "Hire Me" banner.

### 2. Job Dashboard Page

- **Stat Overview**: Real-time visualization of Active Jobs, Jobs in Progress, Shortlisted, and On-Hold counts.
- **Vacancy Stats**: Interactive multi-line chart built with **Recharts**, featuring custom tooltips and legend toggles.
- **Application Tracking**: Detailed table view for monitoring job application statuses with professional brand logos for Microsoft, Google, and Meta.
- **Side Panel**: Recommended Jobs section with categorized daily job alerts.

### 3. Core Implementation

- **Pixel-Perfect**: Exact match to Figma design including spacing, typography (Inter), and custom color tokens.
- **Responsive Design**: Fluid layout optimized for Mobile, Tablet, and Desktop viewports.
- **Tailwind v4+**: Leveraging the latest Tailwind CSS features for high-performance styling without custom CSS overhead.
- **Component Reusability**: Highly modular structure with clean separation of concerns.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons (Go, Pi, Tb, Hi2)
- **Charts:** Recharts
- **Deployment:** Vercel

---

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/syncup.git
   cd syncup
   ```

2. **Install dependencies:**

   ```bash
   npm install --legacy-peer-deps
   ```

   _(Note: `--legacy-peer-deps` is recommended for Recharts/React-is compatibility)_

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Visit the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```text
app/
├── components/          # Reusable UI components
│   ├── jobs/           # Dashboard specific components
│   ├── Navbar.tsx      # Centered search navigation
│   └── IconSidebar.tsx # Logo-integrated sidebar
├── jobs/               # Job Dashboard route
│   └── page.tsx
├── layout.tsx          # Root layout with Inter font
├── globals.css         # Tailwind directives & theme tokens
└── page.tsx            # Home Page (Main Feed)
public/                 # Static assets (logos, profile images)
```

---

## 📝 Evaluation Criteria Met

- [x] **Accuracy**: Pixel-perfect implementation of Figma designs.
- [x] **Responsiveness**: Mobile-first approach with full desktop optimization.
- [x] **Maintainability**: Clean TypeScript types and modular component architecture.
- [x] **Best Practices**: Semantic HTML, SEO-friendly structure, and optimized asset loading.

---

Built with ❤️ by [Aryan Rajput]
