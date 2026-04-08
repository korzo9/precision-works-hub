import { Link } from "react-router-dom";
import { Crosshair, Zap, SprayCan, ArrowDownUp, CircleDot, Fence, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";
import cncCutting from "@/assets/cnc-cutting.jpg";
import laserWelding from "@/assets/laser-welding.jpg";
import workshop from "@/assets/workshop.jpg";

const services = [
  { icon: Crosshair, title: "CNC Plasma Cutting", desc: "Precision cutting of steel, stainless steel, and aluminum with computer-controlled accuracy." },
  { icon: Zap, title: "Laser Welding", desc: "Clean, precise, and fast welding for demanding applications." },
  { icon: SprayCan, title: "Laser Cleaning", desc: "Rust removal and surface preparation using advanced laser technology." },
  { icon: ArrowDownUp, title: "Press Brake Bending", desc: "Sheet metal bending with precision angles and repeatable results." },
  { icon: CircleDot, title: "Tube Bending", desc: "Pipes, railings, and frames bent to exact specifications." },
  { icon: Fence, title: "Metal Constructions", desc: "Custom fences, gates, structures, and stainless steel work." },
];

const steps = [
  { num: "01", title: "Idea", desc: "Share your vision with us" },
  { num: "02", title: "Design", desc: "CAD modeling & planning" },
  { num: "03", title: "Production", desc: "Precision manufacturing" },
  { num: "04", title: "Delivery", desc: "Quality-checked final product" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Metal fabrication workshop" width={1920} height={1080} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>
        <div className="relative container-custom px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-primary font-heading uppercase tracking-[0.3em] text-xs sm:text-sm mb-6">
              Since 1988
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold uppercase leading-[1.1] mb-6">
              From Idea to <br />
              <span className="text-gradient">Finished Product</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10">
              Precision, quality and complete solutions in metal processing — CNC cutting, welding & custom fabrication
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-primary-glow">
                View Services
              </Link>
              <Link to="/contact" className="btn-outline-industrial">
                Request a Quote
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="What We Do"
            title="Our Services"
            description="Complete metal fabrication capabilities under one roof"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="card-industrial p-6 h-full group">
                  <s.icon className="w-10 h-10 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-heading text-xl uppercase font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-heading uppercase tracking-wider text-sm hover:gap-3 transition-all">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <img src={workshop} alt="Our workshop" loading="lazy" width={1200} height={600} className="w-full h-80 object-cover rounded-sm" />
            </AnimatedSection>
            <AnimatedSection direction="right">
              <span className="text-primary font-heading uppercase tracking-[0.2em] text-sm">About Us</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase mt-3 mb-4">
                Tradition Since <span className="text-gradient">1988</span>
              </h2>
              <div className="divider-red mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                For over 35 years, Obrada metala Korzo Sisak has been delivering exceptional metal fabrication services. We combine traditional craftsmanship with modern technology to deliver results that exceed expectations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our workshop is equipped with state-of-the-art CNC machinery, laser welding equipment, and experienced operators who take pride in every project.
              </p>
              <Link to="/about" className="btn-outline-industrial inline-block">
                Learn More
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Our Process"
            title="From Concept to Completion"
            description="A proven workflow that ensures quality at every stage"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15}>
                <div className="relative text-center p-6">
                  <span className="text-6xl font-heading font-bold text-primary/15">{step.num}</span>
                  <h3 className="font-heading text-xl uppercase font-semibold -mt-4 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 border-t border-dashed border-primary/30" />
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <SectionHeader
            label="Our Work"
            title="Featured Projects"
            description="A glimpse into our precision craftsmanship"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[cncCutting, laserWelding, workshop].map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="overflow-hidden rounded-sm group cursor-pointer">
                  <img
                    src={img}
                    alt={`Project ${i + 1}`}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-heading uppercase tracking-wider text-sm hover:gap-3 transition-all">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </Layout>
  );
};

export default Index;
