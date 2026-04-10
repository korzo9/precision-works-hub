import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LangProvider } from "@/context/LangContext";
import Index from "./pages/Index";
import Services from "./pages/Services";
import IdeaToProduct from "./pages/IdeaToProduct";
import Restoration from "./pages/Restoration";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LangProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/idea-to-product" element={<IdeaToProduct />} />
            <Route path="/restoration" element={<Restoration />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LangProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
