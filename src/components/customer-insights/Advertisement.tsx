
import { Button } from "@/components/ui/button";

export function Advertisement() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 text-center">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Join the other 104 amazing London attractions who work with Go City to drive more footfall to their door!
      </h3>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
        Find out more
      </Button>
    </div>
  );
}
