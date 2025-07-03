
import { Button } from "@/components/ui/button";

export function Advertisement() {
  return (
    <div className="bg-[#f5f1eb] border border-gray-200 rounded-xl p-8 text-center shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Join the other 104 amazing London attractions who work with Go City to drive more footfall to their door!
      </h3>
      <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold">
        Find out more
      </Button>
    </div>
  );
}
