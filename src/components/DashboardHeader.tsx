
import { Building2 } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="h-20 flex items-center justify-between px-8 bg-white border-b border-gray-200">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
          <Building2 className="w-8 h-8 text-white" strokeWidth={1.5} />
        </div>
        
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Hey Luke
          </h1>
          <p className="text-lg text-gray-600">
            Join us to unlock insights for your attraction in London
          </p>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="text-teal-600 font-bold text-lg">
          FootFall
        </div>
        <div className="text-xs text-gray-400 ml-1">
          by Go City
        </div>
      </div>
    </header>
  );
}
