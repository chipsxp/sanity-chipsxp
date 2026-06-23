# ChipsXP Web App

A modern, high-performance web application powered by **Next.js** and **Sanity CMS**. This project serves as a dynamic, component-driven website with a fully integrated visual page builder. 

The primary purpose of this web app is to provide a highly customizable and easily maintainable platform where content editors can build landing pages, write articles, and manage site structures (like headers and footers) seamlessly via the embedded Sanity Studio.

## 🚀 Tech Stack

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **CMS / Content Model:** [Sanity](https://www.sanity.io/) (Headless CMS with real-time visual editing)
- **Styling:** [Radix UI Themes](https://www.radix-ui.com/themes/docs/overview/getting-started) & [Tailwind CSS](https://tailwindcss.com/)
- **Language:** TypeScript
- **Deployment:** [Railway](https://railway.app/) (Frontend) / Sanity Cloud (Backend)

## 📦 Local Development

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- npm (or yarn/pnpm)

### 1. Clone the repository

```bash
git clone https://github.com/chipsxp/sanity-chipsxp.git
cd sanity-chipsxp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root of your project and add the following variables. Ask the project lead or check your Sanity dashboard for the exact values.

```env
# .env.local

# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"

# Required for fetching draft content or using the Live Visual Editing
SANITY_API_READ_TOKEN="your_sanity_read_token"
```

### 4. Start the Development Server

You can run both the Next.js frontend and the embedded Sanity Studio locally:

```bash
npm run dev
```

- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Sanity Studio:** [http://localhost:3000/studio](http://localhost:3000/studio)

## 🧩 Project Structure

- `/app`: Next.js App Router pages (Frontend routes).
- `/app/components`: Reusable UI components and Page Builder blocks (e.g., `HeroBlock`, `SplitImageBlock`).
- `/sanity`: Everything related to the Sanity backend.
  - `/sanity/schemaTypes`: Document and object definitions for the CMS.
  - `/sanity/lib`: Queries, fetch logic, and helper utilities.
- `/docs/project_notes`: Project memory, decisions, and bug tracking.

## 🚢 Deployment

This project is configured to be deployed on **Railway**. To deploy updates:
1. Push code to the `main` branch of this repository.
2. Railway will automatically pick up the changes and trigger a new deployment.
Ensure your environment variables are configured in the Railway dashboard.
