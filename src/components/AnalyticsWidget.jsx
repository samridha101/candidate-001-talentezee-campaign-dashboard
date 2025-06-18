import React, { useEffect, useState } from 'react';

export default function AnalyticsWidget() {
  const [credits, setCredits] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setCredits((prev) => (prev < 100 ? prev + 1 : prev));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-8 p-4 border border-gray-300 rounded-xl shadow-sm bg-gray-50">
      <h2 className="text-xl font-bold mb-3 text-[#00897B]">Campaign Analytics</h2>
      <div className="space-y-2">
        <p>📈 Impressions: 12,456</p>
        <p>👥 Engagements: 4,319</p>
        <p>🎯 Conversions: 532</p>
        <div className="mt-4">
          <p className="mb-1">Credit Accumulation:</p>
          <div className="w-full bg-gray-200 h-4 rounded">
            <div
              className="h-4 rounded bg-[#CDDC39] transition-all duration-300"
              style={{ width: `${credits}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
