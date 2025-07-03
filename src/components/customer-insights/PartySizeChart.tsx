
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { PieChart, Pie, Cell } from "recharts";

import {useEffect, useState} from "react";

const chartConfig = {
  solos: { label: "Solos" },
  couples: { label: "Couples" },  
  families: { label: "Families" },
  groups: { label: "Groups" }
};

export function PartySizeChart() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8080/order/v1/hackathon/partycomp?destinationName=London&createdDateFrom=2025-01-01&createdDateTo=2025-07-01')
            .then(response => response.json())
            .then(json => {
                setData([
                    { name: "Solos", value: json.solo, fill: "#14b8a6" },
                    { name: "Couples", value: json.couple, fill: "#0d9488" },
                    { name: "Families", value: json.family, fill: "#0f766e" },
                    { name: "Groups", value: json.groups, fill: "#134e4a" }
                ])
                console.log(data)
            })
            .catch(error => console.error(error));
    }, []);

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
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={50}
            dataKey="value"
            stroke="#ffffff"
            strokeWidth={2}
          >
            {data && data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <ChartTooltip content={<ChartTooltipContent />} />
        </PieChart>
      </ChartContainer>
      
      <div className="flex flex-wrap gap-3 mt-4">
        {data && data.map((item) => (
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
