import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";
import { useLang } from "@/context/LangContext";

interface CTASectionProps {
  title?: string;
  titleHr?: string;
  subtitle?: string;
  subtitleHr?: string;
}

const CTASection = ({
  title = "Ready to Start Your Project?",
  titleHr = "Spremni za svoj projekt?",
  subtitle = "Send us your idea — we will turn it into reality.",
  subtitleHr = "Pošaljite nam svoju ideju — mi ćemo je pretvoriti u stvarnost.",
}: CTASectionProps) => {
  const { t } = useLang();

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute inset-0 border-y border-primary/20" />
      <div className="container-custom relative text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold uppercase mb-4">
            {t(title, titleHr)}
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">{t(subtitle, subtitleHr)}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary-glow">
              {t("Request a Quote", "Zatraži ponudu")}
            </Link>
            <a href="tel:+38598389819" className="btn-outline-industrial">
              {t("Call Us Now", "Nazovite nas")}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
