import { useState } from "react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { useLang } from "@/context/LangContext";
import { projects, categoryLabels } from "@/data/projects";
import cncCutting from "@/assets/cnc-cutting.jpg";
import laserWelding from "@/assets/laser-welding.jpg";
import laserCleaning from "@/assets/laser-cleaning.jpg";
import pressBrake from "@/assets/press-brake.jpg";
import tubeBending from "@/assets/tube-bending.jpg";
import metalConstructions from "@/assets/metal-constructions.jpg";
import restoration from "@/assets/restoration.jpg";
import workshop from "@/assets/workshop.jpg";
import heroBg from "@/assets/hero-bg1.jpeg";
import cadDesign from "@/assets/cad-design.jpg";
import konstrukcijaBolnica from "@/assets/konstrukcija_bolnica.jpg";
import solarCvijet from "@/assets/solar_cvijet.jpg";
import stepenice2 from "@/assets/project_assets/stepenice/stepenice (2).jpg";
import stepenice4 from "@/assets/project_assets/stepenice/stepenice (4).jpg";
import stepenice8 from "@/assets/project_assets/stepenice/stepenice (8).jpg";
import namjestaj2 from "@/assets/project_assets/namjestaj/namjestaj (2).jpg";
import namjestaj5 from "@/assets/project_assets/namjestaj/namjestaj (5).jpg";
import ograda2 from "@/assets/project_assets/ograda/ograda (2).jpg";
import ograda4 from "@/assets/project_assets/ograda/ograda (4).jpg";

const Gallery = () => {
  const { t } = useLang();
  const [filter, setFilter] = useState<string>("All");

  const categoryOrder = ["construction", "design", "restoration", "press-brake", "cnc"] as const;

  const categories = [
    { key: "All", label: t("All", "Sve") },
    ...categoryOrder.map((key) => ({
      key,
      label: t(categoryLabels[key].en, categoryLabels[key].hr),
    })),
  ];

  const images = [
    { src: cncCutting, categoryKey: "cnc", alt: t("CNC plasma cutting", "CNC plazma rezanje"), description: t("Metal cutting detail", "Detalj rezanja metala") },
    { src: laserWelding, categoryKey: "welding", alt: t("Laser welding", "Lasersko zavarivanje"), description: t("Precision welding", "Precizno zavarivanje") },
    { src: metalConstructions, categoryKey: "construction", alt: t("Metal gate construction", "Izrada metalnih kapija"), description: t("Gate construction", "Izrada kapije") },
    { src: pressBrake, categoryKey: "press-brake", alt: t("Press brake bending", "Savijanje na presi"), description: t("Sheet metal bending", "Savijanje lima") },
    { src: tubeBending, categoryKey: "construction", alt: t("Tube bending", "Savijanje cijevi"), description: t("Tube bending detail", "Detalj savijanja cijevi") },
    { src: restoration, categoryKey: "restoration", alt: t("Metal restoration", "Restauracija metala"), description: t("Restoration work", "Radovi restauracije") },
    { src: heroBg, categoryKey: "restoration", alt: t("Metal restoration", "Restauracija metala"), description: t("Restoration project", "Projekt restauracije") },
    { src: workshop, categoryKey: "cnc", alt: t("Workshop overview", "Pregled radionice"), description: t("Workshop environment", "Radni ambijent") },
    { src: cadDesign, categoryKey: "construction", alt: t("CAD design", "CAD dizajn"), description: t("Project design", "Projektni dizajn") },
    { src: konstrukcijaBolnica, categoryKey: "construction", alt: t("Construction fabrication", "Izrada konstrukcija"), description: t("Hospital construction", "Izrada bolničke konstrukcije") },
    { src: solarCvijet, categoryKey: "construction", alt: t("Interesting construction fabrication", "Izrada zanimljivih konstrukcija"), description: t("Solar construction", "Izrada solarne konstrukcije") },
    ...projects.map((project) => ({
      src: project.coverImage,
      categoryKey: project.category,
      alt: t(project.title.en, project.title.hr),
      description: t(project.shortDescription.en, project.shortDescription.hr),
    })),
    {
      src: stepenice2,
      categoryKey: "construction",
      alt: t("Steel stair detail", "Detalj čeličnih stepenica"),
      description: t("Extra stair detail", "Dodatni detalj stepenica"),
    },
    {
      src: stepenice4,
      categoryKey: "construction",
      alt: t("Staircase assembly", "Montiranje stepenica"),
      description: t("Another strong stair image", "Još jedna snažna slika stepenica"),
    },
    {
      src: stepenice8,
      categoryKey: "construction",
      alt: t("Modern stair profile", "Moderan profil stepenica"),
      description: t("Beautiful stair structure", "Lijepa struktura stepenica"),
    },
    {
      src: namjestaj2,
      categoryKey: "design",
      alt: t("Custom furniture detail", "Detalj prilagođenog namještaja"),
      description: t("Simple furniture design", "Jednostavan namještaj"),
    },
    {
      src: namjestaj5,
      categoryKey: "design",
      alt: t("Designer furniture finish", "Dizajnerski završetak namještaja"),
      description: t("Furniture craftsmanship", "Obrtništvo namještaja"),
    },
    {
      src: ograda2,
      categoryKey: "design",
      alt: t("Fence detail", "Detalj ograde"),
      description: t("Clean fence detail", "Čist detalj ograde"),
    },
    {
      src: ograda4,
      categoryKey: "design",
      alt: t("Garden fence style", "Stil vrtne ograde"),
      description: t("Elegant fence style", "Elegantni stil ograde"),
    },
  ];

  const filtered = filter === "All" ? images : images.filter((img) => img.categoryKey === filter);

  return (
    <Layout>
      <SEO path="/gallery" title={{ en: "Gallery — Korzo Sisak Metal Fabrication Work", hr: "Galerija — radovi obrade metala Korzo Sisak" }} description={{ en: "Photos of CNC plasma cutting, laser welding, bending, restoration and finished metal constructions from our Sisak workshop.", hr: "Fotografije CNC plazma rezanja, laserskog zavarivanja, savijanja, restauracija i gotovih metalnih konstrukcija iz naše radionice u Sisku." }} />
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label={t("Our Work", "Naši radovi")}
            title={t("Project Gallery", "Galerija projekata")}
            description={t("Browse through our recent projects and see the quality of our craftsmanship", "Pregledajte naše nedavne projekte i uvjerite se u kvalitetu naše izrade")}
          />

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setFilter(category.key)}
                className={`px-5 py-2 font-heading uppercase text-xs tracking-wider transition-all duration-200 ${
                  filter === category.key
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <AnimatedSection key={`${img.categoryKey}-${i}`} delay={i * 0.05}>
                <div className="overflow-hidden rounded-sm group cursor-pointer card-industrial">
                  <img src={img.src} alt={img.alt} loading="lazy" width={800} height={600} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="p-3">
                    <span className="text-xs font-heading uppercase tracking-wider text-primary">{t(categoryLabels[img.categoryKey].en, categoryLabels[img.categoryKey].hr)}</span>
                    <p className="text-sm font-semibold mt-1">{img.alt}</p>
                    <p className="text-sm text-muted-foreground mt-1">{img.description}</p>
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
