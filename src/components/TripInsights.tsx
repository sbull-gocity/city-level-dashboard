import { TooltipProvider } from "@/components/ui/tooltip";
import { TripLengthChart } from "./trip-insights/TripLengthChart";
import { ShardVisitDay } from "./trip-insights/ShardVisitDay";
import { Advertisement } from "./trip-insights/Advertisement";
import { ShardProximityStats } from "./trip-insights/ShardProximityStats";
import { NearestAttractions } from "./trip-insights/NearestAttractions";
import { PopularCategories } from "./trip-insights/PopularCategories";
import { TopItineraries } from "./trip-insights/TopItineraries";
import { GoCityVisitsChart } from "./trip-insights/GoCityVisitsChart";

export function TripInsights() {
  return (
    <TooltipProvider>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Trip Insights</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ShardVisitDay />
          <TripLengthChart />
          <GoCityVisitsChart />
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
