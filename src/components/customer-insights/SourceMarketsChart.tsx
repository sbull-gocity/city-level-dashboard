
const sourceMarkets = [
  { rank: 1, country: "USA" },
  { rank: 2, country: "UK" },
  { rank: 3, country: "Germany" },
  { rank: 4, country: "France" },
  { rank: 5, country: "Spain" }
];

export function SourceMarketsChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-64">
      <h3 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">Top 5 Source Markets</h3>
      
      <div className="space-y-3">
        {sourceMarkets.map((market) => (
          <div key={market.rank} className="flex items-center gap-4 py-2">
            <div className="w-7 h-7 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              {market.rank}
            </div>
            <span className="text-sm font-medium text-gray-800">{market.country}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
