
interface StatCardProps {
  chartNumber: string;
  title: string;
  value: string;
}

export function StatCard({ chartNumber, title, value }: StatCardProps) {
  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
      <div className="flex items-center justify-between mb-4">
        <div className="w-4 h-4 border border-black rounded-full"></div>
        <span className="text-xs font-mono text-gray-400">{chartNumber}</span>
      </div>
      
      <h3 className="text-sm font-bold text-black mb-8">{title}</h3>
      
      <div className="flex items-center justify-center h-32">
        <span className="text-4xl font-bold text-black">{value}</span>
      </div>
    </div>
  );
}
