
import { Clock } from "lucide-react";

export function TopItineraries() {
  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 col-span-full">
      <h3 className="text-sm font-bold text-black mb-6">Top 3 London itineraries</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 2-Day Trip */}
        <div className="border border-gray-200 rounded-lg p-4 bg-[#f0ead6]">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-teal-600" />
            <span className="font-semibold text-black">2-Day Trip</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="font-medium text-black">Day 1:</div>
            <ul className="text-gray-700 space-y-1 ml-2">
              <li>• London Eye</li>
              <li>• Westminster Abbey</li>
              <li>• The Shard</li>
            </ul>
            <div className="font-medium text-black mt-3">Day 2:</div>
            <ul className="text-gray-700 space-y-1 ml-2">
              <li>• Tower of London</li>
              <li>• Tower Bridge</li>
              <li>• Big Ben</li>
            </ul>
          </div>
        </div>

        {/* 3-Day Trip */}
        <div className="border border-gray-200 rounded-lg p-4 bg-[#f0ead6]">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-teal-600" />
            <span className="font-semibold text-black">3-Day Trip</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="font-medium text-black">Day 1:</div>
            <ul className="text-gray-700 space-y-1 ml-2">
              <li>• British Museum</li>
              <li>• Covent Garden</li>
              <li>• The Shard</li>
            </ul>
            <div className="font-medium text-black mt-3">Day 2:</div>
            <ul className="text-gray-700 space-y-1 ml-2">
              <li>• Borough Market</li>
              <li>• Southwark Cathedral</li>
              <li>• Tate Modern</li>
            </ul>
            <div className="font-medium text-black mt-3">Day 3:</div>
            <ul className="text-gray-700 space-y-1 ml-2">
              <li>• St Paul's Cathedral</li>
              <li>• Shakespeare's Globe</li>
            </ul>
          </div>
        </div>

        {/* 4-Day Trip */}
        <div className="border border-gray-200 rounded-lg p-4 bg-[#f0ead6]">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="h-4 w-4 text-teal-600" />
            <span className="font-semibold text-black">4-Day Trip</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="font-medium text-black">Day 1:</div>
            <ul className="text-gray-700 space-y-1 ml-2">
              <li>• Kensington Palace</li>
              <li>• Natural History Museum</li>
              <li>• The Shard</li>
            </ul>
            <div className="font-medium text-black mt-3">Day 2:</div>
            <ul className="text-gray-700 space-y-1 ml-2">
              <li>• London Bridge Experience</li>
              <li>• HMS Belfast</li>
              <li>• St Katharine Docks</li>
            </ul>
            <div className="font-medium text-black mt-3">Day 3:</div>
            <ul className="text-gray-700 space-y-1 ml-2">
              <li>• Tower of London</li>
              <li>• Tower Bridge</li>
              <li>• Churchill War Rooms</li>
            </ul>
            <div className="font-medium text-black mt-3">Day 4:</div>
            <ul className="text-gray-700 space-y-1 ml-2">
              <li>• Westminster Abbey</li>
              <li>• Houses of Parliament</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
