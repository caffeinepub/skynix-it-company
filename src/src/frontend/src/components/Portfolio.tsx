import { useEffect, useRef, useState } from "react";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Scalable multi-vendor marketplace with real-time inventory management and AI-powered recommendations.",
    image: "/assets/generated/portfolio-ecommerce.dim_800x600.jpg",
    tags: ["React", "Node.js", "AWS", "PostgreSQL"],
    metrics: "300K+ active users",
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    description:
      "HIPAA-compliant telemedicine platform connecting patients with healthcare providers.",
    image: "/assets/generated/portfolio-healthcare.dim_600x800.jpg",
    tags: ["React Native", "Firebase", "Twilio"],
    metrics: "50K+ downloads",
  },
  {
    title: "FinTech Dashboard",
    category: "Web & Cloud",
    description:
      "Real-time financial analytics platform with predictive modeling and automated reporting.",
    image: "/assets/generated/portfolio-fintech.dim_800x600.jpg",
    tags: ["Angular", "Python", "Azure", "Redis"],
    metrics: "$2B+ transactions processed",
  },
  {
    title: "Cloud Infrastructure",
    category: "DevOps & Cloud",
    description:
      "Enterprise-grade cloud migration and infrastructure automation for global SaaS platform.",
    image: "/assets/generated/portfolio-cloud.dim_800x600.jpg",
    tags: ["Kubernetes", "Terraform", "AWS", "Docker"],
    metrics: "99.99% uptime achieved",
  },
  {
    title: "AI Chatbot Platform",
    category: "AI & ML",
    description:
      "Intelligent conversational AI with natural language processing for customer support automation.",
    image: "/assets/generated/portfolio-ai.dim_800x600.jpg",
    tags: ["Python", "TensorFlow", "NLP", "FastAPI"],
    metrics: "85% automation rate",
  },
  {
    title: "Real Estate Portal",
    category: "Web Development",
    description:
      "Property listing platform with virtual tours, mortgage calculators, and agent matching.",
    image: "/assets/generated/portfolio-realestate.dim_800x600.jpg",
    tags: ["Next.js", "Mapbox", "Stripe", "MongoDB"],
    metrics: "10K+ properties listed",
  },
];

export function Portfolio() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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
    <section id="portfolio" className="relative py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-mono font-semibold text-primary uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Portfolio Showcase
          </h2>
          <p className="text-lg text-muted-foreground">
            Real projects, real impact. Explore a selection of our recent work
            across industries and technologies.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
            const isVisible = visibleCards.has(index);
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`group transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-full overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        isHovered ? "scale-110" : "scale-100"
                      }`}
                    />
                    {/* Overlay on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent transition-opacity duration-300 ${
                        isHovered ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <span className="text-sm font-mono text-primary font-semibold">
                          View Project
                        </span>
                        <ArrowUpRight className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Category Badge */}
                    <Badge variant="secondary" className="font-mono text-xs">
                      {project.category}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-mono bg-muted text-muted-foreground rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {project.metrics}
                        </span>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
