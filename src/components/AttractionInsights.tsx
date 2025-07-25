import { Info, Lock } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const ratingsData = [
  { rating: '1', count: 5 },
  { rating: '2', count: 12 },
  { rating: '3', count: 28 },
  { rating: '4', count: 165 },
  { rating: '5', count: 190 },
];

const reservationData = [
  { name: 'On the day', value: 25, color: '#14b8a6' },
  { name: '2-3 days before', value: 35, color: '#0d9488' },
  { name: '4-7 days before', value: 20, color: '#0f766e' },
  { name: '7-14 days before', value: 15, color: '#115e59' },
  { name: 'More than 14 days before', value: 5, color: '#134e4a' },
];

const visitTimeData = [
  { time: 'Mon AM', count: 45 },
  { time: 'Mon PM', count: 68 },
  { time: 'Tue AM', count: 52 },
  { time: 'Tue PM', count: 71 },
  { time: 'Wed AM', count: 58 },
  { time: 'Wed PM', count: 79 },
  { time: 'Thu AM', count: 61 },
  { time: 'Thu PM', count: 84 },
  { time: 'Fri AM', count: 73 },
  { time: 'Fri PM', count: 95 },
  { time: 'Sat AM', count: 89 },
  { time: 'Sat PM', count: 112 },
  { time: 'Sun AM', count: 76 },
  { time: 'Sun PM', count: 98 },
];

export function AttractionInsights() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold text-black">Attraction Insights</h2>
          <Lock className="w-5 h-5" strokeWidth={1.5} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Chart 1 - Your Attraction Ranks */}
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-medium text-black">Your Attraction ranks</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="w-4 h-4 text-gray-400 cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <p className="text-sm">Ranking based on quantity of scans over last 30 days</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <div className="flex flex-col items-center justify-center h-32">
            <div className="text-6xl font-bold text-teal-600 mb-2 blur-lg">2nd</div>
            <div className="text-sm text-gray-600 text-center">
              out of all Go City attractions in London
            </div>
          </div>
        </div>

        {/* Chart 2 - Your Attraction Ranks in Observation Deck Category */}
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-medium text-black">Your Attraction ranks</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="w-4 h-4 text-gray-400 cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <p className="text-sm">Ranking based on quantity of scans over last 30 days</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <div className="flex flex-col items-center justify-center h-32">
            <div className="text-6xl font-bold text-teal-600 mb-2 blur-lg">1st</div>
            <div className="text-sm text-gray-600 text-center">
              out of all attractions in the Observation Deck category
            </div>
          </div>
        </div>

        {/* Chart 3 - Average Dwell Time at Your Attraction */}
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-medium text-black">Average dwell time at Your Attraction</h3>
            <HoverCard>
              <HoverCardTrigger asChild>
                <Info className="w-4 h-4 text-gray-400 cursor-help" />
              </HoverCardTrigger>
              <HoverCardContent className="w-64">
                <p className="text-sm">Dwell time based on anonymous geolocation data from Go City app</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          
          <div className="flex flex-col items-center justify-center h-32">
            <div className="text-6xl font-bold text-teal-600 blur-lg">98 minutes</div>
          </div>
        </div>

        {/* Advertisement slot spanning all three columns */}
        <div className="lg:col-span-3 bg-[#f5f1eb] border-2 border-gray-200 rounded-lg p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Unlock insights about your attraction for free with Footfall by Go City
            </h3>
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg font-semibold">
              Register interest now
            </Button>
          </div>
        </div>

        {/* Chart 4 - Ratings for Your Attraction from Go City customers */}
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-medium text-black">Ratings for Your Attraction from Go City customers</h3>
          </div>
          
          <div className="h-32 blur-lg">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ratingsData}
                margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
              >
                <XAxis 
                  dataKey="rating" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                />
                <YAxis type="number" hide />
                <Bar 
                  dataKey="count" 
                  fill="#14b8a6"
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 5 - AI summary of reviews spanning 2 columns */}
        <div className="lg:col-span-2 bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-medium text-black">AI summary of reviews from Go City customers</h3>
          </div>
          
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed blur-lg">
            <p>
              Visitors consistently praise Your Attraction for its breathtaking panoramic views of London, 
              with many describing the experience as "unforgettable" and highlighting the spectacular 
              sunset and night-time city views from the observation deck.
            </p>
          </div>
        </div>

        {/* Chart 6 - Go City visitors to Your Attraction with an advance reservation */}
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-medium text-black">Go City visitors to Your Attraction with an advance reservation</h3>
          </div>
          
          <div className="flex flex-col items-center justify-center h-32">
            <div className="text-6xl font-bold text-teal-600 blur-lg">86%</div>
          </div>
        </div>

        {/* Chart 7 - When are Go City customers making their reservations for Your Attraction? */}
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-medium text-black">When are Go City customers making their reservations for Your Attraction?</h3>
          </div>
          
          <div className="h-32 blur-lg">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={reservationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={20}
                  outerRadius={50}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {reservationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 8 - When are Go City customers visiting Your Attraction? */}
        <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6 h-64">
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-sm font-medium text-black">When are Go City customers visiting Your Attraction?</h3>
          </div>
          
          <div className="h-32 blur-lg">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={visitTimeData}
                margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
              >
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: '#666' }}
                  angle={-45}
                  textAnchor="end"
                  height={60}
                />
                <YAxis type="number" hide />
                <Bar 
                  dataKey="count" 
                  fill="#14b8a6"
                  radius={[2, 2, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
