
export function NearestAttractions() {
  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
      <div className="flex items-center justify-between mb-4">
        <div className="w-4 h-4 border border-black rounded-full"></div>
        <span className="text-xs font-mono text-gray-400">CHART 6</span>
      </div>
      
      <h3 className="text-sm font-bold text-black mb-6">Highest rated Go City attractions</h3>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <span className="text-sm text-gray-800">1. London Eye</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-800">2. London Bridge Experience</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-800">3. The Shard</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-800">4. Kensington Palace</span>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-800">5. London Zoo</span>
        </div>
      </div>
    </div>
  );
}
