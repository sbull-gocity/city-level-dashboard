
import { useState } from "react";
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
    <div 
      className="min-h-screen flex w-full bg-gray-50 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: 'url(/lovable-uploads/3c9db86e-a554-480c-a2f4-0d35acaf8b5c.png)',
        backgroundPosition: 'center top'
      }}
    >
      <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col">
        <DashboardHeader />
        
        <div className="flex-1 p-8">
          {renderActiveTab()}
        </div>
      </main>
    </div>
  );
};

export default Index;
