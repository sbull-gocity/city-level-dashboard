
import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { CustomerInsights } from "@/components/CustomerInsights";
import { TripInsights } from "@/components/TripInsights";
import { AttractionInsights } from "@/components/AttractionInsights";

const Index = () => {
  const [activeTab, setActiveTab] = useState("customer");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "customer":
        return <CustomerInsights />;
      case "trip":
        return <TripInsights />;
      case "attraction":
        return <AttractionInsights />;
      default:
        return <CustomerInsights />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          
          <div className="flex-1 p-8">
            {renderActiveTab()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
