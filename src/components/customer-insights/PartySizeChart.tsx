
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";

const partySizeData = [
  { name: "Solos", value: 25, fill: "#14b8a6" },
  { name: "Couples", value: 45, fill: "#0d9488" },
  { name: "Families", value: 20, fill: "#0f766e" },
  { name: "Groups", value: 10, fill: "#134e4a" }
];

const chartConfig = {
  solos: { label: "Solos" },
  couples: { label: "Couples" },  
  families: { label: "Families" },
  groups: { label: "Groups" }
};

export function PartySizeChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-64">
      <div className="flex items-center justify-between mb-6">
        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
        <span className="text-xs font-mono text-gray-400 uppercase tracking-wide">Chart 2</span>
      </div>
      
      <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Party Size</h3>
      
      <ChartContainer config={chartConfig} className="h-32">
        <PieChart>
          <Pie
            data={partySizeData}
            cx="50%"
            cy="50%"
            outerRadius={50}
            dataKey="value"
            stroke="#ffffff"
            strokeWidth={2}
          >
            {partySizeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ChartContainer>
      
      <div className="flex flex-wrap gap-3 mt-4">
        {partySizeData.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: item.fill }}
            ></div>
            <span className="text-xs text-gray-600 font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
