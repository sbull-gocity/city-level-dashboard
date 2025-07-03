import { Eye, Building, MapPin } from "lucide-react";

export function PopularCategories() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-80">
      <h3 className="text-sm font-semibold text-gray-900 mb-8 uppercase tracking-wide">Most popular categories for Go City customers in London</h3>
      
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
            <MapPin className="h-5 w-5 text-teal-600" />
          </div>
          <span className="text-sm text-gray-800 font-medium">Landmarks</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
            <Building className="h-5 w-5 text-teal-600" />
          </div>
          <span className="text-sm text-gray-800 font-medium">Museums</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
            <Eye className="h-5 w-5 text-teal-600" />
          </div>
          <span className="text-sm text-gray-800 font-medium">Observation decks</span>
        </div>
      </div>
    </div>
  );
}
