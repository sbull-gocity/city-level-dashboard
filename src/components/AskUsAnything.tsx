
import { TooltipProvider } from "@/components/ui/tooltip";
import { MessageCircleQuestion } from "lucide-react";

export function AskUsAnything() {
  return (
    <TooltipProvider>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Ask us anything</h2>
        </div>
        
        <div className="flex flex-col items-center justify-center min-h-96 space-y-6">
          <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-lg">
            <MessageCircleQuestion className="w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent" strokeWidth={1.5} />
          </div>
          
          <div className="text-center space-y-4 max-w-2xl">
            <h3 className="text-3xl font-bold text-white">
              Ask us anything
            </h3>
            <p className="text-lg text-white/80">
              Have questions about your data, insights, or analytics? We're here to help! 
              Our team is ready to provide answers and support for all your business intelligence needs.
            </p>
          </div>
          
          <div className="w-full max-w-md">
            <button className="w-full h-14 px-6 rounded-full bg-white text-gray-900 font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
              Start a conversation
            </button>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
