
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis } from "recharts";
import { Info, ArrowUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const sourceMarkets = [
  { rank: 1, country: "USA" },
  { rank: 2, country: "UK" },
  { rank: 3, country: "Germany" },
  { rank: 4, country: "France" },
  { rank: 5, country: "Spain" }
];

const partySizeData = [
  { name: "Solos", value: 25, fill: "#000000" },
  { name: "Couples", value: 45, fill: "#404040" },
  { name: "Families", value: 20, fill: "#808080" },
  { name: "Groups", value: 10, fill: "#c0c0c0" }
];

const purchaseToUsageData = [
  { timeframe: "Less than 1 day", value: 25 },
  { timeframe: "1-7 days", value: 40 },
  { timeframe: "7-30 days", value: 22 },
  { timeframe: "30+ days", value: 13 }
];

const chartConfig = {
  solos: { label: "Solos" },
  couples: { label: "Couples" },  
  families: { label: "Families" },
  groups: { label: "Groups" }
};

export function CustomerInsights() {
  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-black">Customer Insights</h2>
          <div className="text-xs text-gray-500 font-mono">SECTION 01</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Top 5 Source Markets */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 1</span>
            </div>
            
            <h3 className="text-sm font-bold text-black mb-4">Top 5 Source Markets</h3>
            
            <div className="space-y-3">
              {sourceMarkets.map((market) => (
                <div key={market.rank} className="flex items-center gap-3 py-2 border-b border-gray-200 last:border-b-0">
                  <div className="w-6 h-6 border border-black rounded-full flex items-center justify-center text-xs font-mono">
                    {market.rank}
                  </div>
                  <span className="text-sm font-medium text-black">{market.country}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Party Size Pie Chart */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 2</span>
            </div>
            
            <h3 className="text-sm font-bold text-black mb-2">Party Size</h3>
            
            <ChartContainer config={chartConfig} className="h-32">
              <PieChart>
                <Pie
                  data={partySizeData}
                  cx="50%"
                  cy="50%"
                  outerRadius={50}
                  dataKey="value"
                  stroke="#000000"
                  strokeWidth={1}
                >
                  {partySizeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            
            <div className="flex flex-wrap gap-2 mt-2">
              {partySizeData.map((item) => (
                <div key={item.name} className="flex items-center gap-1">
                  <div 
                    className="w-2 h-2 border border-black" 
                    style={{ backgroundColor: item.fill }}
                  ></div>
                  <span className="text-xs text-gray-600">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* NPS Chart */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 3</span>
            </div>
            
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-sm font-bold text-black">NPS of customers visiting London</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="w-4 h-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Net Promoter Score measures customer loyalty and satisfaction on a scale from -100 to 100</p>
                </TooltipContent>
              </Tooltip>
            </div>
            
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl font-bold text-black">64</span>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <span>This is</span>
              <span className="font-bold">higher</span>
              <span>than the industry average NPS of 40</span>
              <ArrowUp className="w-4 h-4 text-black" />
            </div>
          </div>

          {/* Pass Purchase to Usage Chart */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 4</span>
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-sm font-bold text-black">Pass purchase to usage for customers visiting London</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="w-4 h-4 text-gray-400 cursor-help" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">This tells you how much time has lapsed between a customer buying a pass and using it in London</p>
                </TooltipContent>
              </Tooltip>
            </div>
            
            <ChartContainer config={chartConfig} className="h-32">
              <BarChart data={purchaseToUsageData} margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
                <XAxis 
                  type="category" 
                  dataKey="timeframe" 
                  tick={{ fontSize: 8, fill: "#666" }}
                  axisLine={false}
                  tickLine={false}
                  angle={-45}
                  textAnchor="end"
                  height={40}
                />
                <YAxis type="number" hide />
                <Bar dataKey="value" fill="#404040" stroke="#000000" strokeWidth={1} />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ChartContainer>
          </div>

          {/* Chart 5 - A Go City pass was last scanned at a London attraction */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 5</span>
            </div>
            
            <h3 className="text-sm font-bold text-black mb-8">A Go City pass was last scanned at a London attraction</h3>
            
            <div className="flex items-center justify-center h-32">
              <span className="text-4xl font-bold text-black">45 seconds ago</span>
            </div>
          </div>

          {/* Chart 6 - On average, Go City customers in London open the app */}
          <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
            <div className="flex items-center justify-between mb-4">
              <div className="w-4 h-4 border border-black rounded-full"></div>
              <span className="text-xs font-mono text-gray-400">CHART 6</span>
            </div>
            
            <h3 className="text-sm font-bold text-black mb-8">On average, Go City customers in London open the app</h3>
            
            <div className="flex items-center justify-center h-32">
              <span className="text-4xl font-bold text-black">4 times per day</span>
            </div>
          </div>
        </div>

        {/* Advertisement Slot */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Join the other 104 amazing London attractions who work with Go City to drive more footfall to their door!
          </h3>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
            Find out more
          </Button>
        </div>
      </div>
    </TooltipProvider>
  );
}
