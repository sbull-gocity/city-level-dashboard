
import { TooltipProvider } from "@/components/ui/tooltip";
import { TripLengthChart } from "./trip-insights/TripLengthChart";
import { ShardVisitDay } from "./trip-insights/ShardVisitDay";
import { Advertisement } from "./trip-insights/Advertisement";
import { ShardProximityStats } from "./trip-insights/ShardProximityStats";
import { NearestAttractions } from "./trip-insights/NearestAttractions";
import { PopularCategories } from "./trip-insights/PopularCategories";
import { TopItineraries } from "./trip-insights/TopItineraries";

export function TripInsights() {
  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-black">Trip Insights</h2>
          <div className="text-xs text-gray-500 font-mono">SECTION 02</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ShardVisitDay />
          <TripLengthChart />
          <Advertisement />
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <Advertisement />
          </div>
          <ShardProximityStats />
          <NearestAttractions />
          <PopularCategories />
          <TopItineraries />
        </div>
      </div>
    </TooltipProvider>
  );
}
