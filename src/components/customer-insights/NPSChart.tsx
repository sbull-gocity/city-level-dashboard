
import { Info, ArrowUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function NPSChart() {
  return (
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
        <span className="font-bold text-lg">higher</span>
        <span>than the industry average NPS of 40</span>
        <ArrowUp className="w-8 h-8 text-black" />
      </div>
    </div>
  );
}
