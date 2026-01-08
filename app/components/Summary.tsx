"use client";
import { useEffect, useState } from "react";
import { Card } from "../types/Card";

interface SummaryProps {
  card: Card;
  onClose: () => void;
}

const Summary = ({ card, onClose }: SummaryProps) => {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<string>("");

  useEffect(() => {
    // simulate AI call
    const timer = setTimeout(() => {
      setSummary(
        `Summary of "${card.title}": ${card.description.slice(0, 120)}...`
      );
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [card]);

  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-semibold text-white">AI Summary</h4>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-6">
          <div className="w-6 h-6 border-4 border-gray-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <p className="text-gray-300 text-sm">{summary}</p>
      )}
    </div>
  );
};

export default Summary;
