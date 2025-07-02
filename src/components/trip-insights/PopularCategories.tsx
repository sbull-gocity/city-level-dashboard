
import { Eye, Building, MapPin } from "lucide-react";

export function PopularCategories() {
  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
      <div className="flex items-center justify-between mb-4">
        <div className="w-4 h-4 border border-black rounded-full"></div>
        <span className="text-xs font-mono text-gray-400">CHART 7</span>
      </div>
      
      <h3 className="text-sm font-bold text-black mb-6">Most popular categories for customers who visit The Shard</h3>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Eye className="h-5 w-5 text-gray-600" />
          <span className="text-sm text-gray-800">Observation decks</span>
        </div>
        <div className="flex items-center gap-3">
          <Building className="h-5 w-5 text-gray-600" />
          <span className="text-sm text-gray-800">Museums</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-gray-600" />
          <span className="text-sm text-gray-800">Landmarks</span>
        </div>
      </div>
    </div>
  );
}
