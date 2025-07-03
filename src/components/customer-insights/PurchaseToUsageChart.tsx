
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

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

export function PurchaseToUsageChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-64">
      <div className="flex items-center justify-between mb-6">
        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
        <span className="text-xs font-mono text-gray-400 uppercase tracking-wide">Chart 4</span>
      </div>
      
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Pass purchase to usage for customers visiting London</h3>
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
          <Bar dataKey="value" fill="#14b8a6" stroke="#0d9488" strokeWidth={1} radius={[4, 4, 0, 0]} />
          <ChartTooltip content={<ChartTooltipContent />} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
