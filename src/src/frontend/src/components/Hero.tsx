import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCTAClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLearnMoreClick = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        {/* Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, oklch(var(--primary) / 0.3) 1px, transparent 1px),
                              linear-gradient(to bottom, oklch(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0ms" }}
          >
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-mono font-medium text-primary">
              Innovative IT Solutions
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold leading-tight transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span className="block text-foreground">Transform Your</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Digital Future
            </span>
          </h1>

          {/* Tagline */}
          <p
            className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Cutting-edge technology solutions that drive innovation, accelerate
            growth, and secure your competitive advantage in the digital age.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <Button onClick={handleCTAClick} size="lg" className="text-lg px-8">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={handleLearnMoreClick}
              variant="outline"
              size="lg"
              className="text-lg px-8"
            >
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "50+", label: "Expert Team" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={index}
                className="relative p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="text-3xl md:text-4xl font-bold font-mono text-primary group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L1440 60V120H0Z"
            fill="oklch(var(--background))"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
