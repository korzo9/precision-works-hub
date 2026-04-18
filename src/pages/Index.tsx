import { Link } from "react-router-dom";
import { Crosshair, Zap, SprayCan, ArrowDownUp, CircleDot, Fence, Cog, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { useLang } from "@/context/LangContext";
import heroBg from "@/assets/hero-bg1.jpeg";
import logo from "@/assets/logo.png";
import cncCutting from "@/assets/cnc-cutting.jpg";
import laserWelding from "@/assets/laser-welding.jpg";
import workshop from "@/assets/workshop.jpg";

const Index = () => {
  const { t } = useLang();

  const services = [
    { icon: Crosshair, title: t("CNC Plasma Cutting", "CNC plazma rezanje"), desc: t("Precision cutting of steel, stainless steel, and aluminum with computer-controlled accuracy.", "Precizno rezanje čelika, nehrđajućeg čelika i aluminija uz računalno upravljanu točnost.") },
    { icon: Zap, title: t("Laser Welding", "Lasersko zavarivanje"), desc: t("Clean, precise, and fast welding for demanding applications.", "Čisto, precizno i brzo zavarivanje za zahtjevne primjene.") },
    { icon: SprayCan, title: t("Laser Cleaning", "Lasersko čišćenje"), desc: t("Rust removal and surface preparation using advanced laser technology.", "Uklanjanje hrđe i priprema površine naprednom laserskom tehnologijom.") },
    { icon: ArrowDownUp, title: t("Press Brake Bending", "Savijanje na presi"), desc: t("Sheet metal bending with precision angles and repeatable results.", "Savijanje lima s preciznim kutovima i ponovljivim rezultatima.") },
    { icon: CircleDot, title: t("Tube Bending", "Savijanje cijevi"), desc: t("Pipes, railings, and frames bent to exact specifications.", "Cijevi, ograde i okviri savijeni prema točnim specifikacijama.") },
    { icon: Fence, title: t("Metal Constructions", "Metalne konstrukcije"), desc: t("Custom fences, gates, structures, and stainless steel work.", "Prilagođene ograde, kapije, konstrukcije i inox radovi.") },
    { icon: Cog, title: t("Machining", "Strojna obrada"), desc: t("Cutting, grinding, surface preparation and finishing services.", "Rezanje, brušenje, priprema površine i završna obrada.") },
  ];

  const steps = [
    { num: "01", title: t("Idea", "Ideja"), desc: t("Share your vision with us", "Podijelite svoju viziju s nama") },
    { num: "02", title: t("Design", "Dizajn"), desc: t("CAD modeling & planning", "CAD modeliranje i planiranje") },
    { num: "03", title: t("Production", "Proizvodnja"), desc: t("Precision manufacturing", "Precizna izrada") },
    { num: "04", title: t("Delivery", "Isporuka"), desc: t("Quality-checked final product", "Kvalitetom provjereni proizvod") },
  ];

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
            <img src={logo} alt="Korzo logo" className="w-28 sm:w-36 md:w-44 mx-auto mb-6 opacity-80" />
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <span className="inline-block text-primary font-heading uppercase tracking-[0.3em] text-xs sm:text-sm mb-6">
              {t("Since 1988", "Od 1988.")}
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold uppercase leading-[1.1] mb-6">
              {t("From Idea to", "Od ideje do")} <br />
              <span className="text-gradient">{t("Finished Product", "Gotovog proizvoda")}</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10">
              {t(
                "Precision, quality and complete solutions in metal processing — CNC cutting, welding & custom fabrication",
                "Preciznost, kvaliteta i kompletna rješenja u obradi metala — CNC rezanje, zavarivanje i prilagođena izrada"
              )}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.45}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-primary-glow">
                {t("View Services", "Pogledaj usluge")}
              </Link>
              <Link to="/contact" className="btn-outline-industrial">
                {t("Request a Quote", "Zatraži ponudu")}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label={t("What We Do", "Što radimo")}
            title={t("Our Services", "Naše usluge")}
            description={t("Complete metal fabrication capabilities under one roof", "Kompletne mogućnosti obrade metala pod jednim krovom")}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="card-industrial p-6 h-full group">
                  <s.icon className="w-9 h-9 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="font-heading text-lg uppercase font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-heading uppercase tracking-wider text-sm hover:gap-3 transition-all">
              {t("View All Services", "Pogledaj sve usluge")} <ArrowRight className="w-4 h-4" />
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
              <span className="text-primary font-heading uppercase tracking-[0.2em] text-sm">{t("About Us", "O nama")}</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold uppercase mt-3 mb-4">
                {t("Tradition Since", "Tradicija od")} <span className="text-gradient">1988</span>
              </h2>
              <div className="divider-red mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t(
                  "For over 35 years, Obrada metala Korzo Sisak has been delivering exceptional metal fabrication services. We combine traditional craftsmanship with modern technology to deliver results that exceed expectations.",
                  "Već više od 35 godina, Obrada metala Korzo Sisak pruža izvanredne usluge obrade metala. Spajamo tradicionalnu vještinu s modernom tehnologijom kako bismo postigli rezultate koji nadmašuju očekivanja."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(
                  "Our workshop is equipped with state-of-the-art CNC machinery, laser welding equipment, and experienced operators who take pride in every project.",
                  "Naša radionica opremljena je najsuvremenijim CNC strojevima, opremom za lasersko zavarivanje i iskusnim operaterima koji su ponosni na svaki projekt."
                )}
              </p>
              <Link to="/about" className="btn-outline-industrial inline-block">
                {t("Learn More", "Saznaj više")}
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label={t("Our Process", "Naš proces")}
            title={t("From Concept to Completion", "Od koncepta do završetka")}
            description={t("A proven workflow that ensures quality at every stage", "Provjereni tijek rada koji osigurava kvalitetu u svakoj fazi")}
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
            label={t("Our Work", "Naši radovi")}
            title={t("Featured Projects", "Istaknuti projekti")}
            description={t("A glimpse into our precision craftsmanship", "Uvid u našu preciznu izradu")}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[cncCutting, laserWelding, workshop].map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="overflow-hidden rounded-sm group cursor-pointer">
                  <img src={img} alt={`Project ${i + 1}`} loading="lazy" width={800} height={600} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </AnimatedSection>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery" className="inline-flex items-center gap-2 text-primary font-heading uppercase tracking-wider text-sm hover:gap-3 transition-all">
              {t("View Full Gallery", "Pogledaj cijelu galeriju")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Index;
