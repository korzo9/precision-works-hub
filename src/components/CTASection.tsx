import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

const CTASection = ({
  title = "Ready to Start Your Project?",
  subtitle = "Send us your idea — we will turn it into reality.",
}: CTASectionProps) => {
  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 border-y border-primary/20" />
      <div className="container-custom relative text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold uppercase mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary-glow">
              Request a Quote
            </Link>
            <a href="tel:+38598389819" className="btn-outline-industrial">
              Call Us Now
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
