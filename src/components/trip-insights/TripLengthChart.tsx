
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

const tripLengthData = [
  { duration: "1-2 days", value: 15 },
  { duration: "3-4 days", value: 35 },
  { duration: "5-6 days", value: 32 },
  { duration: "6-7 days", value: 12 },
  { duration: "8+ days", value: 6 }
];

const chartConfig = {
  value: { label: "Percentage" }
};

export function TripLengthChart() {
  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
      <h3 className="text-sm font-bold text-black mb-4">Trip Length for Customers who Visit London</h3>
      
      <ChartContainer config={chartConfig} className="h-32">
        <BarChart data={tripLengthData} margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
          <XAxis 
            type="category" 
            dataKey="duration" 
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
  );
}
