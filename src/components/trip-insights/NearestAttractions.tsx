
export function NearestAttractions() {
  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
      <div className="flex items-center justify-between mb-4">
        <div className="w-4 h-4 border border-black rounded-full"></div>
        <span className="text-xs font-mono text-gray-400">CHART 6</span>
      </div>
      
      <h3 className="text-sm font-bold text-black mb-6">Nearest Go City attractions</h3>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-800">1. London Bridge Experience</span>
          <span className="text-xs text-gray-500">(0.2 miles)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-800">2. Southwark Cathedral</span>
          <span className="text-xs text-gray-500">(0.3 miles)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-800">3. The Bermondsey Bierkeller</span>
          <span className="text-xs text-gray-500">(0.5 miles)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-800">4. Golden Hinde</span>
          <span className="text-xs text-gray-500">(0.4 miles)</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-800">5. The Monument to the Great Fire of London</span>
          <span className="text-xs text-gray-500">(0.6 miles)</span>
        </div>
      </div>
    </div>
  );
}
