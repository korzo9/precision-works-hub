import { Lightbulb, PenTool, Cog, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import cadDesign from "@/assets/cad-design.jpg";

const steps = [
  {
    icon: Lightbulb,
    title: "1. Your Idea",
    desc: "Share your concept, sketch, or requirements. We listen carefully and discuss possibilities, materials, and approach.",
  },
  {
    icon: PenTool,
    title: "2. Design & CAD",
    desc: "Our team creates detailed technical drawings using AutoCAD and 3D models in SketchUp. Every dimension is calculated for precision.",
  },
  {
    icon: Cog,
    title: "3. Production",
    desc: "Using CNC cutting, laser welding, bending, and assembly — your product takes shape with the highest quality standards.",
  },
  {
    icon: CheckCircle,
    title: "4. Final Product",
    desc: "Quality-checked, finished, and delivered. We ensure every detail meets your expectations before handover.",
  },
];

const IdeaToProduct = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Our Process"
            title="From Idea to Product"
            description="We provide complete service — from idea and design to final product. Your vision, our expertise."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection direction="left">
              <img src={cadDesign} alt="CAD Design process" loading="lazy" width={800} height={600} className="w-full h-80 object-cover rounded-sm" />
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h3 className="text-2xl font-heading font-bold uppercase mb-4">Design & Engineering</h3>
              <div className="divider-red mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-3">
                Every great product starts with a great design. We use professional CAD software (AutoCAD) and 3D modeling tools (SketchUp) to create detailed plans before production begins.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This ensures accuracy, reduces waste, and allows you to visualize the final product before any material is cut. We work closely with clients to refine designs until they're perfect.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.15}>
                <div className="card-industrial p-6 text-center h-full">
                  <step.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-lg uppercase font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Have an Idea?" subtitle="Let's turn your concept into a precision-engineered reality." />
    </Layout>
  );
};

export default IdeaToProduct;
