
import { Building2 } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="h-40 flex items-center justify-between px-8 border-b border-gray-200 bg-white/40 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Hey Luke
          </h1>
          <p className="text-2xl text-gray-600">
            Join us to unlock insights for your attraction in London
          </p>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="text-teal-600 font-bold text-2xl">
          FootFall
        </div>
        <div className="text-sm text-gray-400 ml-1">
          by Go City
        </div>
      </div>
    </header>
  );
}
