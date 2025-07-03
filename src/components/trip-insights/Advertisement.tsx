
import { Button } from "@/components/ui/button";

export function Advertisement() {
  return (
    <div className="bg-gradient-to-r from-teal-50 to-teal-100 rounded-xl shadow-sm border border-teal-200 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left section - Copy */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Go City sends customers to 104 top attractions in London - join the fun!
          </h3>
        </div>

        {/* Middle section - Numbered list */}
        <div>
          <ol className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="bg-teal-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold mr-3">1</span>
              The Shard
            </li>
            <li className="flex items-center">
              <span className="bg-teal-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold mr-3">2</span>
              London Eye
            </li>
            <li className="flex items-center">
              <span className="bg-teal-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold mr-3">3</span>
              Hop-on Hop-off Big Bus Tour
            </li>
            <li className="flex items-center">
              <span className="bg-teal-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold mr-3">4</span>
              Tower of London
            </li>
            <li className="flex items-center">
              <span className="bg-teal-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold mr-3">5</span>
              Madame Tussauds
            </li>
          </ol>
        </div>

        {/* Right section - Image placeholder and CTA */}
        <div className="text-center">
          <div className="bg-gray-100 rounded-lg h-32 mb-6 flex items-center justify-center">
            <span className="text-gray-400 text-sm">Image Placeholder</span>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold">
            Join the club
          </Button>
        </div>
      </div>
    </div>
  );
}
