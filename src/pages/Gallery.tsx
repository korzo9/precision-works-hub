import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
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

const categories = ["All", "CNC Cutting", "Welding", "Constructions", "Restoration"] as const;

const images = [
  { src: cncCutting, category: "CNC Cutting", alt: "CNC plasma cutting" },
  { src: laserWelding, category: "Welding", alt: "Laser welding" },
  { src: metalConstructions, category: "Constructions", alt: "Metal gate construction" },
  { src: restoration, category: "Restoration", alt: "Metal restoration" },
  { src: heroBg, category: "CNC Cutting", alt: "CNC cutting workshop" },
  { src: pressBrake, category: "Constructions", alt: "Press brake bending" },
  { src: tubeBending, category: "Constructions", alt: "Tube bending" },
  { src: laserCleaning, category: "Restoration", alt: "Laser cleaning" },
  { src: workshop, category: "CNC Cutting", alt: "Workshop overview" },
  { src: cadDesign, category: "Constructions", alt: "CAD design" },
];

const Gallery = () => {
  const [filter, setFilter] = useState<string>("All");

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Our Work"
            title="Project Gallery"
            description="Browse through our recent projects and see the quality of our craftsmanship"
          />

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 font-heading uppercase text-xs tracking-wider transition-all duration-200 ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <AnimatedSection key={`${img.alt}-${i}`} delay={i * 0.05}>
                <div className="overflow-hidden rounded-sm group cursor-pointer card-industrial">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="p-3">
                    <span className="text-xs font-heading uppercase tracking-wider text-primary">{img.category}</span>
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
