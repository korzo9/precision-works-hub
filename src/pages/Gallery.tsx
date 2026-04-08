import { useState } from "react";
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
import restoration from "@/assets/restoration.jpg";
import workshop from "@/assets/workshop.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import cadDesign from "@/assets/cad-design.jpg";

const Gallery = () => {
  const { t } = useLang();
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    t("All", "Sve"),
    t("CNC Cutting", "CNC rezanje"),
    t("Welding", "Zavarivanje"),
    t("Constructions", "Konstrukcije"),
    t("Restoration", "Restauracije"),
  ];

  const categoryKeys = ["All", "CNC Cutting", "Welding", "Constructions", "Restoration"];

  const images = [
    { src: cncCutting, categoryKey: "CNC Cutting", alt: t("CNC plasma cutting", "CNC plazma rezanje") },
    { src: laserWelding, categoryKey: "Welding", alt: t("Laser welding", "Lasersko zavarivanje") },
    { src: metalConstructions, categoryKey: "Constructions", alt: t("Metal gate construction", "Izrada metalnih kapija") },
    { src: restoration, categoryKey: "Restoration", alt: t("Metal restoration", "Restauracija metala") },
    { src: heroBg, categoryKey: "CNC Cutting", alt: t("CNC cutting workshop", "Radionica CNC rezanja") },
    { src: pressBrake, categoryKey: "Constructions", alt: t("Press brake bending", "Savijanje na presi") },
    { src: tubeBending, categoryKey: "Constructions", alt: t("Tube bending", "Savijanje cijevi") },
    { src: laserCleaning, categoryKey: "Restoration", alt: t("Laser cleaning", "Lasersko čišćenje") },
    { src: workshop, categoryKey: "CNC Cutting", alt: t("Workshop overview", "Pregled radionice") },
    { src: cadDesign, categoryKey: "Constructions", alt: t("CAD design", "CAD dizajn") },
  ];

  const filtered = filter === "All" ? images : images.filter((img) => img.categoryKey === filter);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label={t("Our Work", "Naši radovi")}
            title={t("Project Gallery", "Galerija projekata")}
            description={t("Browse through our recent projects and see the quality of our craftsmanship", "Pregledajte naše nedavne projekte i uvjerite se u kvalitetu naše izrade")}
          />

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categoryKeys.map((catKey, i) => (
              <button
                key={catKey}
                onClick={() => setFilter(catKey)}
                className={`px-5 py-2 font-heading uppercase text-xs tracking-wider transition-all duration-200 ${
                  filter === catKey
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {categories[i]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <AnimatedSection key={`${img.categoryKey}-${i}`} delay={i * 0.05}>
                <div className="overflow-hidden rounded-sm group cursor-pointer card-industrial">
                  <img src={img.src} alt={img.alt} loading="lazy" width={800} height={600} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="p-3">
                    <span className="text-xs font-heading uppercase tracking-wider text-primary">{categories[categoryKeys.indexOf(img.categoryKey)]}</span>
                    <p className="text-sm text-muted-foreground mt-1">{img.alt}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
};

export default Gallery;
