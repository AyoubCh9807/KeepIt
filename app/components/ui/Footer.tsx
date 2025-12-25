import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-(--color-bg) text-(--color-text-secondary) py-12 px-6 text-center">
      <p>&copy; {new Date().getFullYear()} KeepIt. All rights reserved.</p>
      <div className="mt-4 flex justify-center gap-4">
        <a href="#" className="hover:text-(--color-primary) transition">Privacy Policy</a>
        <a href="#" className="hover:text-(--color-primary) transition">Terms of Service</a>
      </div>
    </footer>
  );
};
