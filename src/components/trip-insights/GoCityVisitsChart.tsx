
export function GoCityVisitsChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-64">
      <div className="flex items-center justify-between mb-6">
        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
        <span className="text-xs font-mono text-gray-400 uppercase tracking-wide">Chart 3</span>
      </div>
      
      <h3 className="text-sm font-semibold text-gray-900 mb-8 uppercase tracking-wide">Go City customers visit</h3>
      
      <div className="flex flex-col items-center justify-center h-20">
        <div className="text-5xl font-bold text-gray-900 mb-2">7</div>
        <p className="text-sm text-gray-600 text-center">
          Go City attractions whilst they're in London
        </p>
      </div>
    </div>
  );
}
