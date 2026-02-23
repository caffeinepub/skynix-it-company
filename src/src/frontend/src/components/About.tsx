import { useEffect, useState } from "react";
import {
  Target,
  Users,
  Award,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const VALUES = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We exist to empower businesses through transformative technology solutions.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our success. We build lasting partnerships, not just projects.",
  },
  {
    icon: Award,
    title: "Excellence First",
    description:
      "Quality is non-negotiable. We deliver solutions that exceed industry standards.",
  },
  {
    icon: TrendingUp,
    title: "Innovation Focused",
    description:
      "We stay ahead of technology trends to give you a competitive advantage.",
  },
];

const ACHIEVEMENTS = [
  "ISO 27001 Certified Security Practices",
  "AWS & Azure Certified Partner",
  "Agile & Scrum Certified Teams",
  "100% On-Time Project Delivery",
];

export function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector("#about");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-mono font-semibold text-primary uppercase tracking-wider">
            About Skynix
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            Engineering Tomorrow's Solutions Today
          </h2>
          <p className="text-lg text-muted-foreground">
            Founded on the principles of innovation and excellence, Skynix is a
            full-service IT company specializing in cutting-edge software
            development, cloud architecture, and digital transformation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Story */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="prose prose-lg dark:prose-invert">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Who We Are
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                With over a decade of experience and 500+ successful projects,
                we've established ourselves as a trusted technology partner for
                startups, enterprises, and everything in between.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of 50+ expert engineers, designers, and strategists
                brings deep technical expertise across modern frameworks,
                cloud platforms, AI/ML, and enterprise architecture.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We don't just build software—we architect solutions that scale,
                adapt, and drive measurable ROI. From MVP to enterprise-grade
                platforms, we're equipped to handle complexity at any stage of
                your growth journey.
              </p>
            </div>

            {/* Achievements */}
            <div className="pt-6">
              <h4 className="text-lg font-bold text-foreground mb-4">
                Our Credentials
              </h4>
              <div className="space-y-3">
                {ACHIEVEMENTS.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 transition-all duration-500"
                    style={{
                      transitionDelay: `${isVisible ? index * 100 : 0}ms`,
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? "translateX(0)"
                        : "translateX(-20px)",
                    }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Values Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-6 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {VALUES.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 p-12 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(45deg, oklch(var(--primary)) 25%, transparent 25%),
                                linear-gradient(-45deg, oklch(var(--primary)) 25%, transparent 25%),
                                linear-gradient(45deg, transparent 75%, oklch(var(--primary)) 75%),
                                linear-gradient(-45deg, transparent 75%, oklch(var(--primary)) 75%)`,
              backgroundSize: "40px 40px",
              backgroundPosition: "0 0, 0 20px, 20px -20px, -20px 0px",
            }}
          />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how Skynix can accelerate your digital transformation
              and deliver solutions that drive real business value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
