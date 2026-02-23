import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingCTA } from "./components/FloatingCTA";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function AppContent() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <AppContent />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
