
import { Button } from "@/components/ui/button";

export function Advertisement() {
  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
      <div className="flex h-full">
        {/* Left section - Copy */}
        <div className="flex-1 flex flex-col justify-center pr-4">
          <p className="text-sm font-bold text-black leading-tight">
            Go City sends customers to 104 top attractions in London - join the fun!
          </p>
        </div>
        
        {/* Middle section - Attractions list */}
        <div className="flex-1 flex flex-col justify-center px-2">
          <ol className="text-xs text-gray-700 space-y-1">
            <li>1. The Shard</li>
            <li>2. London Eye</li>
            <li>3. Hop-on Hop-off Big Bus Tour</li>
            <li>4. Tower of London</li>
            <li>5. Madame Tussauds</li>
          </ol>
        </div>
        
        {/* Right section - Image placeholder and CTA */}
        <div className="flex-1 flex flex-col justify-between pl-4">
          <div className="bg-gray-200 rounded-md h-24 flex items-center justify-center mb-4">
            <span className="text-xs text-gray-500">Image</span>
          </div>
          <Button className="w-full text-xs">
            Join the club
          </Button>
        </div>
      </div>
    </div>
  );
}
