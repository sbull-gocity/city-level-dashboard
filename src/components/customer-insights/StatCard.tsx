
interface StatCardProps {
  chartNumber: string;
  title: string;
  value: string;
}

export function StatCard({ chartNumber, title, value }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-64">
      <h3 className="text-sm font-semibold text-gray-900 mb-8 uppercase tracking-wide">{title}</h3>
      
      <div className="flex items-center justify-center h-32">
        <span className="text-4xl font-bold text-gray-900 text-center">{value}</span>
      </div>
    </div>
  );
}
