import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import EngineeringConsultancy from "./pages/EngineeringConsultancy";
import EducationalTechnology from "./pages/EducationalTechnology";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import EquipmentSupply from "./pages/EquipmentSupply";
import OilGas from "./pages/OilGas";
import OilGasPipesSupply from "./pages/OilGasPipesSupply";
import OilGasDrillingEquipment from "./pages/OilGasDrillingEquipment";
import OilGasExploration from "./pages/OilGasExploration";
import OilGasInspection from "./pages/OilGasInspection";
import OilGasUnderground from "./pages/OilGasUnderground";
import OilGasAfterSales from "./pages/OilGasAfterSales";
import Medical from "./pages/Medical";
import MedicalBiomedical from "./pages/MedicalBiomedical";
import MedicalEquipmentSupply from "./pages/MedicalEquipmentSupply";
import MedicalCapacity from "./pages/MedicalCapacity";
import MedicalTurnkey from "./pages/MedicalTurnkey";
import MedicalTender from "./pages/MedicalTender";
import MedicalAfterSales from "./pages/MedicalAfterSales";
import NotFound from "./pages/NotFound";
import SplashScreen from "./components/SplashScreen";
import { PageTransitionProvider } from "./components/PageTransition";
import { LanguageProvider } from "./contexts/LanguageProvider";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
          <BrowserRouter>
            <PageTransitionProvider>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/engineering-consultancy" element={<EngineeringConsultancy />} />
                <Route path="/educational-technology" element={<EducationalTechnology />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsConditions />} />
                <Route path="/equipment-supply" element={<EquipmentSupply />} />
                <Route path="/oil-gas" element={<OilGas />} />
                <Route path="/oil-gas/pipes-supply" element={<OilGasPipesSupply />} />
                <Route path="/oil-gas/drilling-equipment" element={<OilGasDrillingEquipment />} />
                <Route path="/oil-gas/exploration" element={<OilGasExploration />} />
                <Route path="/oil-gas/inspection" element={<OilGasInspection />} />
                <Route path="/oil-gas/underground" element={<OilGasUnderground />} />
                <Route path="/oil-gas/after-sales" element={<OilGasAfterSales />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PageTransitionProvider>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
