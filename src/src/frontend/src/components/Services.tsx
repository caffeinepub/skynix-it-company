import { useEffect, useRef, useState } from "react";
import {
  Code,
  Smartphone,
  Cloud,
  Brain,
  Boxes,
  Palette,
  Shield,
  Lightbulb,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SERVICES = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks, optimized for performance and scalability.",
    tier: "featured",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile solutions that deliver exceptional user experiences.",
    tier: "featured",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Enterprise-grade cloud infrastructure design, migration, and optimization services.",
    tier: "featured",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent automation and predictive analytics powered by cutting-edge AI technology.",
    tier: "premium",
  },
  {
    icon: Boxes,
    title: "DevOps Engineering",
    description:
      "Streamlined CI/CD pipelines and infrastructure automation for rapid deployment.",
    tier: "standard",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Human-centered design that transforms complex requirements into intuitive interfaces.",
    tier: "standard",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security audits, penetration testing, and compliance solutions.",
    tier: "premium",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description:
      "Strategic technology guidance to align your IT infrastructure with business goals.",
    tier: "standard",
  },
];

export function Services() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative py-32 bg-background">
      {/* Diagonal Top Divider */}
      <div className="absolute top-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 0L1440 30V0H0Z"
            fill="oklch(var(--background))"
            className="fill-background"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-mono font-semibold text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From concept to deployment, we deliver end-to-end technology
            services that drive measurable business outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.has(index);
            const isFeatured = service.tier === "featured";
            const isPremium = service.tier === "premium";

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } ${isFeatured ? "lg:col-span-1" : ""}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <Card
                  className={`h-full group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden ${
                    isFeatured
                      ? "border-primary/50 bg-gradient-to-br from-card to-primary/5"
                      : isPremium
                      ? "border-accent/30 bg-gradient-to-br from-card to-accent/5"
                      : ""
                  }`}
                >
                  {/* Premium Badge */}
                  {isPremium && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-accent/20 border border-accent/30 rounded text-xs font-mono text-accent">
                      Premium
                    </div>
                  )}

                  <CardHeader>
                    <div
                      className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${
                        isFeatured
                          ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110"
                          : isPremium
                          ? "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110"
                          : "bg-muted text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110"
                      }`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>

                  {/* Hover Effect Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
