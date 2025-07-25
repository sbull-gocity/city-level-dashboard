
import { Users, MapPin, Star, MessageCircleQuestion, Lock } from "lucide-react";

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  {
    id: "customer",
    title: "Customer insights",
    icon: Users,
  },
  {
    id: "trip",
    title: "Trip insights", 
    icon: MapPin,
  },
  {
    id: "attraction",
    title: "Attraction insights",
    icon: Star,
    showLock: true,
  },
  {
    id: "ask",
    title: "Ask us anything",
    icon: MessageCircleQuestion,
    isSpecial: true,
  },
];

export function DashboardSidebar({ activeTab, setActiveTab }: DashboardSidebarProps) {
  return (
    <div className="w-80 p-6 bg-white">
      <div className="space-y-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`
              w-full h-16 px-6 rounded-full flex items-center gap-4 text-left font-medium text-lg transition-all duration-200
              ${item.isSpecial
                ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white shadow-lg' 
                : activeTab === item.id 
                ? 'bg-slate-800 text-white shadow-lg' 
                : 'border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'
              }
            `}
          >
            <item.icon className="w-6 h-6" strokeWidth={1.5} />
            <span className="flex items-center gap-2 flex-1">
              {item.title}
              {item.showLock && (
                <Lock 
                  className={`w-5 h-5 ${activeTab === item.id ? 'text-white' : 'text-gray-400'}`} 
                  strokeWidth={1.5} 
                />
              )}
            </span>
            {item.isSpecial && (
              <Lock className="w-5 h-5 text-white" strokeWidth={1.5} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
