
export function GoCityVisitsChart() {
  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
      <div className="flex items-center justify-between mb-4">
        <div className="w-4 h-4 border border-black rounded-full"></div>
        <span className="text-xs font-mono text-gray-400">CHART 2</span>
      </div>
      
      <h3 className="text-sm font-bold text-black mb-8">Go City customers visit</h3>
      
      <div className="flex flex-col items-center justify-center h-24">
        <div className="text-6xl font-bold text-black mb-4">7</div>
        <p className="text-sm text-gray-700 text-center">
          Go City attractions whilst they're in London
        </p>
      </div>
    </div>
  );
}
