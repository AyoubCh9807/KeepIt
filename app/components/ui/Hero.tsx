import React from "react";

export const Hero: React.FC = () => {
  return (
    <div className="relative w-full font-sans no-scrollbar bg-(--color-bg)">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3e%3cpath d='M0 0h32v32H0z' fill='none' stroke='%23ffffff33'/%3e%3cpath d='M0 0h32M0 0v32' stroke='%23ffffff11'/%3e%3c/svg%3e")`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <section className="relative overflow-hidden bg-(--color-surface)">
        <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 md:px-8 md:py-36">
          {/* Announcement Badge */}
          <div className="relative mb-4">
            <span className="relative z-10 inline-block rounded-full border border-(--color-muted) bg-(--color-surface)/20 px-3 py-1.5 text-xs text-(--color-text-primary)">
              Exciting announcement 🎉
              <span className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-(--color-muted)/0 via-(--color-text-secondary) to-(--color-muted)/0"></span>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-3 text-center text-3xl font-bold leading-tight text-(--color-text-primary) sm:text-4xl md:text-5xl lg:text-7xl">
            A landing page template that works for you
          </h1>

          {/* Subheading */}
          <p className="mb-9 max-w-2xl text-center text-base leading-relaxed text-(--color-text-secondary) sm:text-lg md:text-lg">
            Build beautiful landing pages for your startups, clients, and side
            projects, without having to think about design.
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <button className="flex items-center gap-2 rounded-md bg-(--color-primary) px-4 py-2 text-(--color-text-inverse) ring-2 ring-(--color-primary)/50 ring-offset-2 ring-offset-(--color-bg) transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-(--color-primary)/70">
              Try it free
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>

            <button className="rounded-md px-4 py-2 text-(--color-text-primary) transition-all hover:scale-[1.02] hover:bg-(--color-surface) active:scale-[0.98]">
              Learn more
            </button>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-linear-to-b from-(--color-surface)/0 to-(--color-surface)"></div>
        </div>
      </section>
    </div>
  );
};
