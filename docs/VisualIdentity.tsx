// pages/index.tsx
import React from "react";

export default function VisualIdentity() {
  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text-primary)] font-sans p-8">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-2">KeepIt</h1>
        <p className="text-[var(--color-text-secondary)]">
          Save, organize, and retrieve your links, reels, and content effortlessly.
        </p>
      </header>

      {/* Buttons */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-secondary)]">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <button className="px-6 py-2 rounded shadow-md text-[var(--color-button-text)] bg-[var(--color-button-bg)] hover:bg-[var(--color-button-hover)] active:bg-[var(--color-button-active)] transition">
            Primary
          </button>
          <button className="px-6 py-2 rounded shadow-md text-white bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] active:bg-[var(--color-secondary-active)] transition">
            Secondary
          </button>
          <button className="px-6 py-2 rounded shadow-md text-white bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:bg-[var(--color-accent-active)] transition">
            Accent
          </button>
          <button className="px-6 py-2 rounded shadow-md text-white bg-[var(--color-bg)] border border-[var(--color-muted)] hover:border-[var(--color-primary)] transition">
            Outline
          </button>
          <button className="px-6 py-2 rounded shadow-md text-[var(--color-muted)] bg-[var(--color-disabled)] cursor-not-allowed" disabled>
            Disabled
          </button>
        </div>
      </section>

      {/* Inputs */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-highlight-1)]">Forms</h2>
        <div className="flex flex-col gap-4 max-w-md">
          <input
            type="text"
            placeholder="Enter link or note..."
            className="px-4 py-2 rounded shadow-sm bg-[var(--color-input-bg)] border border-[var(--color-input-border)] focus:border-[var(--color-input-border-focus)] text-[var(--color-input-text)] placeholder-[var(--color-input-placeholder)] transition"
          />
          <textarea
            placeholder="Add description..."
            className="px-4 py-2 rounded shadow-sm bg-[var(--color-input-bg)] border border-[var(--color-input-border)] focus:border-[var(--color-input-border-focus)] text-[var(--color-input-text)] placeholder-[var(--color-input-placeholder)] transition"
          />
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-5 h-5 bg-[var(--color-checkbox-bg)] border border-[var(--color-checkbox-border)] checked:bg-[var(--color-checkbox-checked)] rounded"
            />
            Save to favorites
          </label>
        </div>
      </section>

      {/* Cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-accent)]">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow-md border border-[var(--color-card-border)] bg-[var(--color-card-bg)]">
            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2">Saved Link</h3>
            <p className="text-[var(--color-text-secondary)] mb-4">https://example.com/tutorial</p>
            <button className="px-4 py-2 rounded shadow-sm bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-[var(--color-button-text)] transition">
              Open
            </button>
          </div>
          <div className="p-6 rounded-lg shadow-md border border-[var(--color-card-border)] bg-[var(--color-card-bg)]">
            <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2">Saved Video</h3>
            <p className="text-[var(--color-text-secondary)] mb-4">Funny Reel about productivity</p>
            <button className="px-4 py-2 rounded shadow-sm bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-white transition">
              Watch
            </button>
          </div>
          <div className="p-6 rounded-lg shadow-md border border-[var(--color-card-border)] bg-[var(--color-card-bg)]">
            <h3 className="text-xl font-bold text-[var(--color-accent)] mb-2">Saved PDF</h3>
            <p className="text-[var(--color-text-secondary)] mb-4">Calculus Notes.pdf</p>
            <button className="px-4 py-2 rounded shadow-sm bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white transition">
              Download
            </button>
          </div>
        </div>
      </section>

      {/* Alerts */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--color-highlight-2)]">Alerts</h2>
        <div className="flex flex-col gap-4 max-w-md">
          <div className="px-4 py-2 rounded shadow-sm bg-[var(--color-success)]/20 border-l-4 border-[var(--color-success)] text-[var(--color-success)]">
            Success: Item saved successfully!
          </div>
          <div className="px-4 py-2 rounded shadow-sm bg-[var(--color-error)]/20 border-l-4 border-[var(--color-error)] text-[var(--color-error)]">
            Error: Failed to save item!
          </div>
          <div className="px-4 py-2 rounded shadow-sm bg-[var(--color-warning)]/20 border-l-4 border-[var(--color-warning)] text-[var(--color-warning)]">
            Warning: Storage almost full.
          </div>
          <div className="px-4 py-2 rounded shadow-sm bg-[var(--color-info)]/20 border-l-4 border-[var(--color-info)] text-[var(--color-info)]">
            Info: New update available.
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-[var(--color-card-border)] pt-6 text-center text-[var(--color-text-secondary)]">
        © 2025 KeepIt. All rights reserved.
      </footer>
    </div>
  );
}
