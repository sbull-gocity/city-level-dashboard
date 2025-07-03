
import { Users, MapPin, Star, Lock } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const menuItems = [
  {
    id: "customer",
    title: "Customer Insights",
    icon: Users,
  },
  {
    id: "trip",
    title: "Trip Insights", 
    icon: MapPin,
  },
  {
    id: "attraction",
    title: "Attraction Insights",
    icon: Star,
    showLock: true,
  },
];

export function DashboardSidebar({ activeTab, setActiveTab }: DashboardSidebarProps) {
  return (
    <Sidebar className="w-64 border-r border-gray-200 bg-white">
      <SidebarContent className="pt-8">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-mono text-gray-400 mb-6 px-4 uppercase tracking-wide">
            Analytics Sections
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveTab(item.id)}
                    className={`
                      h-12 px-4 w-full justify-start font-medium rounded-lg mx-2
                      transition-all duration-200
                      ${activeTab === item.id 
                        ? 'bg-teal-50 text-teal-700 border-l-4 border-teal-600' 
                        : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                      }
                    `}
                  >
                    <item.icon className="w-5 h-5 mr-3" strokeWidth={1.5} />
                    <span className="text-sm flex items-center gap-2">
                      {item.title}
                      {item.showLock && <Lock className="w-4 h-4" strokeWidth={1.5} />}
                    </span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
