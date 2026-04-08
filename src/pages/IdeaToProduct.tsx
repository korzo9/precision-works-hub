import { Lightbulb, PenTool, Cog, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { useLang } from "@/context/LangContext";
import cadDesign from "@/assets/cad-design.jpg";

const IdeaToProduct = () => {
  const { t } = useLang();

  const steps = [
    {
      icon: Lightbulb,
      title: t("1. Your Idea", "1. Vaša ideja"),
      desc: t(
        "Share your concept, sketch, or requirements. We listen carefully and discuss possibilities, materials, and approach.",
        "Podijelite svoj koncept, skicu ili zahtjeve. Pažljivo slušamo i raspravljamo o mogućnostima, materijalima i pristupu."
      ),
    },
    {
      icon: PenTool,
      title: t("2. Design & CAD", "2. Dizajn i CAD"),
      desc: t(
        "Our team creates detailed technical drawings using AutoCAD and 3D models in SketchUp. Every dimension is calculated for precision.",
        "Naš tim izrađuje detaljne tehničke crteže u AutoCAD-u i 3D modele u SketchUp-u. Svaka dimenzija je izračunata za preciznost."
      ),
    },
    {
      icon: Cog,
      title: t("3. Production", "3. Proizvodnja"),
      desc: t(
        "Using CNC cutting, laser welding, bending, and assembly — your product takes shape with the highest quality standards.",
        "Koristeći CNC rezanje, lasersko zavarivanje, savijanje i montažu — vaš proizvod dobiva oblik s najvišim standardima kvalitete."
      ),
    },
    {
      icon: CheckCircle,
      title: t("4. Final Product", "4. Gotov proizvod"),
      desc: t(
        "Quality-checked, finished, and delivered. We ensure every detail meets your expectations before handover.",
        "Provjereno, završeno i isporučeno. Osiguravamo da svaki detalj ispunjava vaša očekivanja prije predaje."
      ),
    },
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label={t("Our Process", "Naš proces")}
            title={t("From Idea to Product", "Od ideje do realizacije")}
            description={t(
              "We provide complete service — from idea and design to final product. Your vision, our expertise.",
              "Pružamo kompletnu uslugu — od ideje i nacrta do gotovog proizvoda. Vaša vizija, naša stručnost."
            )}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection direction="left">
              <img src={cadDesign} alt="CAD Design process" loading="lazy" width={800} height={600} className="w-full h-80 object-cover rounded-sm" />
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h3 className="text-2xl font-heading font-bold uppercase mb-4">{t("Design & Engineering", "Dizajn i inženjering")}</h3>
              <div className="divider-red mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-3">
                {t(
                  "Every great product starts with a great design. We use professional CAD software (AutoCAD) and 3D modeling tools (SketchUp) to create detailed plans before production begins.",
                  "Svaki sjajan proizvod počinje sjajnim dizajnom. Koristimo profesionalni CAD softver (AutoCAD) i alate za 3D modeliranje (SketchUp) za izradu detaljnih planova prije početka proizvodnje."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "This ensures accuracy, reduces waste, and allows you to visualize the final product before any material is cut. We work closely with clients to refine designs until they're perfect.",
                  "To osigurava točnost, smanjuje otpad i omogućuje vam vizualizaciju gotovog proizvoda prije rezanja materijala. Usko surađujemo s klijentima kako bismo usavršili dizajn."
                )}
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
      <CTASection
        title="Have an Idea?"
        titleHr="Imate ideju?"
        subtitle="Let's turn your concept into a precision-engineered reality."
        subtitleHr="Pretvorimo vaš koncept u precizno inženjersku stvarnost."
      />
    </Layout>
  );
};

export default IdeaToProduct;
