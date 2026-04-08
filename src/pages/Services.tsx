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

interface ServiceBlockProps {
  title: string;
  description: string;
  bullets: string[];
  image: string;
  reverse?: boolean;
}

const ServiceBlock = ({ title, description, bullets, image, reverse }: ServiceBlockProps) => (
  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${reverse ? "" : ""}`}>
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

const servicesData: ServiceBlockProps[] = [
  {
    title: "CNC Plasma Cutting",
    description: "Our CNC plasma cutting system delivers precision cuts on a wide range of metals. Computer-controlled accuracy ensures consistent, repeatable results for both simple and complex shapes.",
    bullets: [
      "Steel, stainless steel, and aluminum cutting",
      "Thickness up to 50mm",
      "Complex shapes and patterns",
      "High precision with minimal heat distortion",
      "Both small and large-scale production",
    ],
    image: cncCutting,
  },
  {
    title: "Laser Welding",
    description: "Advanced laser welding technology provides cleaner, more precise welds with minimal distortion. Ideal for thin materials and applications requiring aesthetic finish.",
    bullets: [
      "Clean and precise welds",
      "Minimal heat-affected zone",
      "Fast processing speed",
      "Suitable for thin and thick materials",
      "Stainless steel, steel, and aluminum",
    ],
    image: laserWelding,
    reverse: true,
  },
  {
    title: "Laser Cleaning",
    description: "Eco-friendly laser cleaning removes rust, paint, and contaminants from metal surfaces without chemicals or abrasives. Perfect for surface preparation and restoration.",
    bullets: [
      "Rust and oxide removal",
      "Paint and coating stripping",
      "Surface preparation for welding",
      "No chemicals or abrasives needed",
      "Preserves base material integrity",
    ],
    image: laserCleaning,
  },
  {
    title: "Press Brake Bending",
    description: "Our press brake equipment handles precise sheet metal bending with consistent angle accuracy. From simple bends to complex multi-bend parts.",
    bullets: [
      "Precision angle control",
      "Multiple bend sequences",
      "Various sheet thicknesses",
      "Repeatable accuracy",
      "Prototyping and production runs",
    ],
    image: pressBrake,
    reverse: true,
  },
  {
    title: "Tube Bending",
    description: "Custom tube and pipe bending for railings, frames, furniture, and structural applications. We handle various diameters and materials.",
    bullets: [
      "Round and square tube bending",
      "Railings and handrails",
      "Furniture frames",
      "Structural elements",
      "Custom radii and angles",
    ],
    image: tubeBending,
  },
  {
    title: "Metal Constructions",
    description: "Complete custom metal construction services including fences, gates, staircases, and structural steelwork. From design to installation.",
    bullets: [
      "Custom fences and gates",
      "Staircase railings",
      "Structural steelwork",
      "Stainless steel fabrication",
      "Installation service available",
    ],
    image: metalConstructions,
    reverse: true,
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="What We Offer"
            title="Our Services"
            description="Comprehensive metal fabrication capabilities powered by modern technology and decades of experience"
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
