import {useEffect, useState} from "react";

export function SourceMarketsChart() {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8080/order/v1/hackathon/sourcemarkets?destinationName=London')
            .then(response => response.json())
            .then(json => {
                setData(json)
                console.log(data)
            })
            .catch(error => console.error(error));
    }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-64">
      <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Top 5 Source Markets</h3>
      
      <div className="space-y-2">
        {data && data.map((market) => (
          <div key={market.rank} className="flex items-center gap-4 py-1">
            <div className="w-7 h-7 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              {market.rank}
            </div>
            <span className="text-sm font-medium text-gray-800">{market.countryCode}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
