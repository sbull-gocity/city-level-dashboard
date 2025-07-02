
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";

const partySizeData = [
  { name: "Solos", value: 25, fill: "#000000" },
  { name: "Couples", value: 45, fill: "#404040" },
  { name: "Families", value: 20, fill: "#808080" },
  { name: "Groups", value: 10, fill: "#c0c0c0" }
];

const chartConfig = {
  solos: { label: "Solos" },
  couples: { label: "Couples" },  
  families: { label: "Families" },
  groups: { label: "Groups" }
};

export function PartySizeChart() {
  return (
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
  );
}
