
import { Button } from "@/components/ui/button";

export function Advertisement() {
  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Unlock insights about your attraction for free with Footfall by Go City
        </h3>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold">
          Register interest now
        </Button>
      </div>
    </div>
  );
}
