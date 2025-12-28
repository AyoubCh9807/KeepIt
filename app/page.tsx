"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/landing.html");
  }, []);

  return (
    <div className="bg-bg min-h-screen">
      <p className="font-sans text-3xl font-semibold mt-10 text-center">
        Redirecting...
      </p>
    </div>
  );
}
