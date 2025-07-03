
import { Info } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export function NearestAttractions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-64">
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Highest rated Go City attractions</h3>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Info className="w-4 h-4 text-gray-400 cursor-help" />
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <p className="text-sm">Ratings are from real reviews of attractions by Go City customers</p>
          </HoverCardContent>
        </HoverCard>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center py-1">
          <span className="text-sm text-gray-800">1. London Eye</span>
        </div>
        <div className="flex items-center py-1">
          <span className="text-sm text-gray-800">2. London Bridge Experience</span>
        </div>
        <div className="flex items-center py-1">
          <span className="text-sm text-gray-800">3. The Shard</span>
        </div>
        <div className="flex items-center py-1">
          <span className="text-sm text-gray-800">4. Kensington Palace</span>
        </div>
        <div className="flex items-center py-1">
          <span className="text-sm text-gray-800">5. London Zoo</span>
        </div>
      </div>
    </div>
  );
}
