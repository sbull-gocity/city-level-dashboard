
const sourceMarkets = [
  { rank: 1, country: "USA" },
  { rank: 2, country: "UK" },
  { rank: 3, country: "Germany" },
  { rank: 4, country: "France" },
  { rank: 5, country: "Spain" }
];

export function SourceMarketsChart() {
  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
      <div className="flex items-center justify-between mb-4">
        <div className="w-4 h-4 border border-black rounded-full"></div>
        <span className="text-xs font-mono text-gray-400">CHART 1</span>
      </div>
      
      <h3 className="text-sm font-bold text-black mb-4">Top 5 Source Markets</h3>
      
      <div className="space-y-1">
        {sourceMarkets.map((market) => (
          <div key={market.rank} className="flex items-center gap-3 py-1 border-b border-gray-200 last:border-b-0">
            <div className="w-6 h-6 border border-black rounded-full flex items-center justify-center text-xs font-mono">
              {market.rank}
            </div>
            <span className="text-sm font-medium text-black">{market.country}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
