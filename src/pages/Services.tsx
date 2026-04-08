import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { useLang } from "@/context/LangContext";
import cncCutting from "@/assets/cnc-cutting.jpg";
import laserWelding from "@/assets/laser-welding.jpg";
import laserCleaning from "@/assets/laser-cleaning.jpg";
import pressBrake from "@/assets/press-brake.jpg";
import tubeBending from "@/assets/tube-bending.jpg";
import metalConstructions from "@/assets/metal-constructions.jpg";

interface ServiceBlockProps {
  title: string;
  description: string;
  bullets: string[];
  image: string;
  reverse?: boolean;
}

const ServiceBlock = ({ title, description, bullets, image, reverse }: ServiceBlockProps) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    <AnimatedSection direction={reverse ? "right" : "left"} className={reverse ? "lg:order-2" : ""}>
      <img src={image} alt={title} loading="lazy" width={800} height={600} className="w-full h-80 object-cover rounded-sm" />
    </AnimatedSection>
    <AnimatedSection direction={reverse ? "left" : "right"} className={reverse ? "lg:order-1" : ""}>
      <h3 className="text-2xl sm:text-3xl font-heading font-bold uppercase mb-4">{title}</h3>
      <div className="divider-red mb-4" />
      <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
      <ul className="space-y-2">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            {b}
          </li>
        ))}
      </ul>
    </AnimatedSection>
  </div>
);

const Services = () => {
  const { t } = useLang();

  const servicesData: ServiceBlockProps[] = [
    {
      title: t("CNC Plasma Cutting", "CNC plazma rezanje"),
      description: t(
        "Our CNC plasma cutting system delivers precision cuts on a wide range of metals. Computer-controlled accuracy ensures consistent, repeatable results for both simple and complex shapes.",
        "Naš CNC plazma sustav za rezanje pruža precizne rezove na širokom rasponu metala. Računalno upravljana točnost osigurava dosljedne, ponovljive rezultate za jednostavne i složene oblike."
      ),
      bullets: t(
        "Steel, stainless steel, and aluminum cutting|Thickness up to 50mm|Complex shapes and patterns|High precision with minimal heat distortion|Both small and large-scale production",
        "Rezanje čelika, nehrđajućeg čelika i aluminija|Debljina do 50mm|Složeni oblici i uzorci|Visoka preciznost s minimalnom toplinskom deformacijom|Mala i velika serijska proizvodnja"
      ).split("|"),
      image: cncCutting,
    },
    {
      title: t("Laser Welding", "Lasersko zavarivanje"),
      description: t(
        "Advanced laser welding technology provides cleaner, more precise welds with minimal distortion. Ideal for thin materials and applications requiring aesthetic finish.",
        "Napredna tehnologija laserskog zavarivanja pruža čistije, preciznije zavare s minimalnom deformacijom. Idealno za tanke materijale i primjene koje zahtijevaju estetski završetak."
      ),
      bullets: t(
        "Clean and precise welds|Minimal heat-affected zone|Fast processing speed|Suitable for thin and thick materials|Stainless steel, steel, and aluminum",
        "Čisti i precizni zavari|Minimalna zona utjecaja topline|Brza obrada|Pogodno za tanke i debele materijale|Nehrđajući čelik, čelik i aluminij"
      ).split("|"),
      image: laserWelding,
      reverse: true,
    },
    {
      title: t("Laser Cleaning", "Lasersko čišćenje"),
      description: t(
        "Eco-friendly laser cleaning removes rust, paint, and contaminants from metal surfaces without chemicals or abrasives. Perfect for surface preparation and restoration.",
        "Ekološko lasersko čišćenje uklanja hrđu, boju i nečistoće s metalnih površina bez kemikalija ili abraziva. Savršeno za pripremu površine i restauraciju."
      ),
      bullets: t(
        "Rust and oxide removal|Paint and coating stripping|Surface preparation for welding|No chemicals or abrasives needed|Preserves base material integrity",
        "Uklanjanje hrđe i oksida|Skidanje boje i premaza|Priprema površine za zavarivanje|Bez kemikalija i abraziva|Očuvanje integriteta materijala"
      ).split("|"),
      image: laserCleaning,
    },
    {
      title: t("Press Brake Bending", "Savijanje na presi"),
      description: t(
        "Our press brake equipment handles precise sheet metal bending with consistent angle accuracy. From simple bends to complex multi-bend parts.",
        "Naša oprema za savijanje na presi omogućuje precizno savijanje lima s dosljednom točnošću kutova. Od jednostavnih do složenih višestrukih savijanja."
      ),
      bullets: t(
        "Precision angle control|Multiple bend sequences|Various sheet thicknesses|Repeatable accuracy|Prototyping and production runs",
        "Kontrola preciznog kuta|Višestruke sekvence savijanja|Razne debljine lima|Ponovljiva točnost|Izrada prototipova i serijska proizvodnja"
      ).split("|"),
      image: pressBrake,
      reverse: true,
    },
    {
      title: t("Tube Bending", "Savijanje cijevi"),
      description: t(
        "Custom tube and pipe bending for railings, frames, furniture, and structural applications. We handle various diameters and materials.",
        "Prilagođeno savijanje cijevi za ograde, okvire, namještaj i konstrukcijske primjene. Radimo s različitim promjerima i materijalima."
      ),
      bullets: t(
        "Round and square tube bending|Railings and handrails|Furniture frames|Structural elements|Custom radii and angles",
        "Savijanje okruglih i kvadratnih cijevi|Ograde i rukohvati|Okviri za namještaj|Konstrukcijski elementi|Prilagođeni radijusi i kutovi"
      ).split("|"),
      image: tubeBending,
    },
    {
      title: t("Metal Constructions", "Metalne konstrukcije"),
      description: t(
        "Complete custom metal construction services including fences, gates, staircases, and structural steelwork. From design to installation.",
        "Kompletne usluge prilagođene metalne konstrukcije uključujući ograde, kapije, stepeništa i čelične konstrukcije. Od dizajna do montaže."
      ),
      bullets: t(
        "Custom fences and gates|Staircase railings|Structural steelwork|Stainless steel fabrication|Installation service available",
        "Prilagođene ograde i kapije|Ograde za stepeništa|Čelične konstrukcije|Izrada od nehrđajućeg čelika|Usluga montaže dostupna"
      ).split("|"),
      image: metalConstructions,
      reverse: true,
    },
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label={t("What We Offer", "Što nudimo")}
            title={t("Our Services", "Naše usluge")}
            description={t(
              "Comprehensive metal fabrication capabilities powered by modern technology and decades of experience",
              "Sveobuhvatne mogućnosti obrade metala pokretane modernom tehnologijom i desetljećima iskustva"
            )}
          />
          <div className="flex flex-col gap-20">
            {servicesData.map((service) => (
              <ServiceBlock key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
};

export default Services;
