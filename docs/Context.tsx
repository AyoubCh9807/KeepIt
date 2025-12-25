/* ==========================================
   KeepItContext.tsx
   Context File for Gemini Code Assist
   ========================================== */

/* =========================
   IMPORTS
   ========================= */
import React from "react";

/* =========================
   GLOBAL DARK MODE COLOR PALETTE
   ========================= */
export const colors = {
  primary: '#139A43',
  primaryHover: '#1EB75C',
  primaryActive: '#0E6F33',

  secondary: '#9A136B',
  secondaryHover: '#B53B92',
  secondaryActive: '#7A0E54',

  accent: '#9A8613',
  accentHover: '#B5A435',
  accentActive: '#7A690F',

  bg: '#121212',
  surface: '#1E1E1E',
  textPrimary: '#FFFFFF',
  textSecondary: '#CCCCCC',
  muted: '#5A5A5A',
  disabled: '#2A2A2A',

  success: '#2EE56E',
  successHover: '#4AF388',
  error: '#9A4213',
  errorHover: '#B55C35',
  warning: '#9A8613',
  warningHover: '#B5A435',
  info: '#139A86',
  infoHover: '#1BC1A1',

  highlight1: '#42139A',
  highlight1Hover: '#5A2BBF',
  highlight2: '#279A13',
  highlight2Hover: '#3EB42E',

  buttonText: '#121212', // default for buttons on primary
};

/* =========================
   SHADOWS & BORDERS
   ========================= */
export const ui = {
  shadowSmall: '0 1px 3px rgba(0,0,0,0.4)',
  shadowMedium: '0 4px 6px rgba(0,0,0,0.5)',
  shadowLarge: '0 10px 20px rgba(0,0,0,0.6)',
  borderDefault: '1px solid #2A2A2A',
  borderFocus: '1px solid ' + colors.primary,
};

/* =========================
   APP OVERVIEW / PRD
   ========================= */
export const PRD = {
  name: "KeepIt",
  type: "Productivity / Personal Knowledge Management",
  goal: "Enable users to save, categorize, and quickly retrieve links, videos, documents, and notes.",
  targetUsers: [
    "Students",
    "Knowledge workers",
    "Social media users",
    "Researchers"
  ],

  features: [
    "Quick Save (links, media, PDFs, notes; browser & mobile extension)",
    "Categorization & Tagging (tags, folders, boards, smart suggestions)",
    "Search & Filter (full-text search, filters by type/date/tag/board)",
    "Collections / Boards (nested folders, grouping related content)",
    "Offline Access (cache important items)",
    "Sync Across Devices (cloud sync)",
    "AI Assistance (optional, auto-tagging, recommendations)",
    "Reminders & Pinning (pin items, set reminders)"
  ],

  userStories: [
    "As a user, I want to save a link with one click so I can access it later.",
    "As a user, I want to categorize items into boards so I can organize my content.",
    "As a user, I want to search quickly across all saved content.",
    "As a user, I want to access saved items offline.",
    "As a user, I want color-coded alerts for success, warning, and errors."
  ],

  techStack: {
    frontend: "Next.js + React + TailwindCSS",
    backend: "Node.js + Express / NestJS",
    database: "PostgreSQL (primary), Redis (cache)",
    cloudStorage: "AWS S3 / Firebase Storage",
    searchEngine: "MeiliSearch or Elasticsearch",
    authentication: "JWT + OAuth",
    AI: "OpenAI / embeddings for recommendations",
    hosting: "Vercel (frontend), Render / AWS (backend)"
  },

  uiUx: [
    "Dark mode focused for eye comfort",
    "High contrast between text and background",
    "Interactive feedback for buttons, inputs, checkboxes",
    "Responsive layout: desktop, tablet, mobile",
    "Hover, active, focus, disabled states visually distinct"
  ],

  mvpScope: [
    "Save and organize links",
    "Tagging and boards",
    "Search and filter",
    "Cards view of saved items",
    "Responsive homepage with dark mode and interactive buttons"
  ],

  optionalFeatures: [
    "AI suggestions and auto-tagging",
    "Offline caching for all content types",
    "User profile with activity history",
    "Share boards publicly or with friends"
  ]
};

/* =========================
   Gemini Instructions
   =========================
- Use this context file to generate components, pages, or the homepage.
- Generate all code in TypeScript React (.tsx) using Next.js conventions.
- Include TailwindCSS classes referencing the colors and UI variables above.
- Ensure dark mode, responsive layout, and accessible HTML (a11y).
- Buttons, inputs, cards, alerts, checkboxes, tooltips must reference the palette.
- Include hover, focus, active, and disabled states for all interactive elements.
- Use the tech stack from the context:
    Frontend: Next.js + React + TailwindCSS
    Backend: Node.js + Express / NestJS
    Database: PostgreSQL (primary), Redis (cache)
    Cloud Storage: AWS S3 / Firebase Storage
    Search Engine: MeiliSearch or Elasticsearch
    Authentication: Supabase Auth
    AI: OpenAI / embeddings for recommendations
    Hosting: Vercel (frontend), Render / AWS (backend)
- You may also generate supporting PRD documentation or component-level guidelines if needed.
========================= */
