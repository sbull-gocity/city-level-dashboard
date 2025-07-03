import { TooltipProvider } from "@/components/ui/tooltip";
import { SourceMarketsChart } from "./customer-insights/SourceMarketsChart";
import { PartySizeChart } from "./customer-insights/PartySizeChart";
import { NPSChart } from "./customer-insights/NPSChart";
import { PurchaseToUsageChart } from "./customer-insights/PurchaseToUsageChart";
import { StatCard } from "./customer-insights/StatCard";
import { Advertisement } from "./customer-insights/Advertisement";

export function CustomerInsights() {
  return (
    <TooltipProvider>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Customer Insights</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-80">
            <SourceMarketsChart />
          </div>
          <div className="h-80">
            <PartySizeChart />
          </div>
          <div className="h-80">
            <NPSChart />
          </div>
          <PurchaseToUsageChart />
          
          <StatCard 
            chartNumber="CHART 5"
            title="A Go City pass was last scanned at a London attraction"
            value="45 seconds ago"
          />
          
          <StatCard 
            chartNumber="CHART 6"
            title="On average, Go City customers in London open the app"
            value="4 times per day"
          />
        </div>

        <Advertisement />
      </div>
    </TooltipProvider>
  );
}
