
import { Info, ArrowUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function NPSChart() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-64">
      <div className="flex items-center justify-between mb-6">
        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
        <span className="text-xs font-mono text-gray-400 uppercase tracking-wide">Chart 3</span>
      </div>
      
      <div className="flex items-center gap-2 mb-8">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">NPS of customers visiting London</h3>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="w-4 h-4 text-gray-400 cursor-help" />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-xs">Net Promoter Score measures customer loyalty and satisfaction on a scale from -100 to 100</p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <div className="flex items-center justify-center mb-6">
        <span className="text-5xl font-bold text-gray-900">64</span>
      </div>
      
      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
        <span>This is</span>
        <span className="font-semibold text-teal-600">higher</span>
        <span>than the industry average NPS of 40</span>
        <ArrowUp className="w-5 h-5 text-teal-500" />
      </div>
    </div>
  );
}
