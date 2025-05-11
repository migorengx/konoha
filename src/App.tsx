
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "@/contexts/DataContext";
import HomePage from "./pages/HomePage";
import CorruptionPage from "./pages/CorruptionPage";
import PoliticiansPage from "./pages/PoliticiansPage";
import PoliticianDetailPage from "./pages/PoliticianDetailPage";
import RegionsPage from "./pages/RegionsPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import DetailCasePage from "./pages/DetailCasePage";
import RegionDetailPage from "./pages/RegionDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <DataProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/corruption" element={<CorruptionPage />} />
            <Route path="/corruption/case/:caseId" element={<DetailCasePage />} />
            <Route path="/politicians" element={<PoliticiansPage />} />
            <Route path="/politicians/:politicianId" element={<PoliticianDetailPage />} />
            <Route path="/regions" element={<RegionsPage />} />
            <Route path="/regions/:regionId" element={<RegionDetailPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </DataProvider>
  </QueryClientProvider>
);

export default App;
