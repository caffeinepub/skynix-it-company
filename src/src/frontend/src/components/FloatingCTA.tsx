import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (approximately 800px)
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-40 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Button
        onClick={handleClick}
        size="lg"
        className="rounded-full shadow-2xl hover:shadow-primary/50 group px-6"
      >
        <MessageSquare className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline">Contact Us</span>
      </Button>
    </div>
  );
}
