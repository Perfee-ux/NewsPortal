"use client";

import Link from "next/link";

interface Stock {
  symbol: string;
  name: string;
  price: string;
  change: number;
  changePercent: number;
}

const stocks: Stock[] = [
  { symbol: "NABIL", name: "Nabil Bank", price: "1,234.20", change: -5.0, changePercent: -0.40 },
  { symbol: "CFCL", name: "Central Finance", price: "597.90", change: -2.10, changePercent: -0.35 },
  { symbol: "SAPDBL", name: "Saptakoshi Development", price: "715.00", change: -28.00, changePercent: -3.77 },
  { symbol: "ECL", name: "Everest Colour Limited", price: "1,428.00", change: -8.00, changePercent: -0.56 },
  { symbol: "ULHC", name: "Upper Lohore Khola", price: "335.00", change: 2.00, changePercent: 0.60 },
  { symbol: "MEN", name: "Mountain Energy Nepal", price: "634.80", change: 7.90, changePercent: 1.26 },
];

export default function TrendingTicker() {
  return (
    <div className="flex items-stretch border-y border-gray-200 bg-white">
      {/* Label */}
      <div className="flex shrink-0 items-center bg-[#0F3D2E] px-6">
        <span className="text-sm font-semibold text-white">Trending Stocks</span>
      </div>

      <div className="relative flex-1 overflow-hidden">
        <div className="ticker-track flex w-max items-stretch">
          {[...stocks, ...stocks].map((stock, i) => (
            <Link
              key={`${stock.symbol}-${i}`}
              href={`/stocks/${stock.symbol}`}
              className="flex shrink-0 items-center gap-2 whitespace-nowrap px-6 py-3 transition-opacity hover:opacity-70"
            >
              <span className="text-sm text-gray-500">{stock.name}</span>
              <span className="text-sm font-semibold text-[#0F3D2E]">{stock.symbol}</span>
              <span className="text-sm font-medium text-gray-800">{stock.price}</span>
              <span
                className={`flex items-center gap-1 text-sm font-medium ${
                  stock.change < 0 ? "text-red-500" : "text-green-600"
                }`}
              >
                {stock.changePercent > 0 ? "+" : ""}
                {stock.changePercent.toFixed(2)}%{" "}
                {stock.change > 0 ? "+" : ""}
                {stock.change.toFixed(2)}
                {stock.change < 0 ? " ↘" : " ↗"}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex shrink-0 items-center gap-2 bg-[#D9A441]/20 px-6">
        <div>
          <p className="text-sm font-semibold text-gray-900">View Stock Live</p>
          <p className="flex items-center gap-1 text-xs text-green-700">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
            Market Open
          </p>
        </div>
      </div>

      <style jsx>{`
        .ticker-track {
          animation: ticker-scroll 25s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        @keyframes ticker-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}