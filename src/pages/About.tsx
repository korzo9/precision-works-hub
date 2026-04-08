import { Shield, Clock, Wrench, Award } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import workshop from "@/assets/workshop.jpg";

const strengths = [
  { icon: Clock, title: "35+ Years", desc: "Decades of experience in metal fabrication since 1988" },
  { icon: Shield, title: "Quality First", desc: "Every product is quality-checked before delivery" },
  { icon: Wrench, title: "Full Service", desc: "From design to production to installation" },
  { icon: Award, title: "Modern Tech", desc: "CNC, laser welding, and advanced equipment" },
];

const About = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Who We Are"
            title="About Us"
            description="A family-run metal fabrication company with a tradition of excellence"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection direction="left">
              <img src={workshop} alt="Our workshop" loading="lazy" width={1200} height={600} className="w-full h-96 object-cover rounded-sm" />
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h3 className="text-2xl font-heading font-bold uppercase mb-4">Our Story</h3>
              <div className="divider-red mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 1988, Obrada metala Korzo Sisak started as a small workshop with a passion for metalwork. Over more than three decades, we've grown into a fully-equipped fabrication facility serving clients across Croatia and beyond.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe in combining traditional craftsmanship with modern technology. Our team brings together years of hands-on experience with state-of-the-art CNC plasma cutting, laser welding, and precision bending equipment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What sets us apart is our commitment to complete solutions. We don't just cut or weld — we partner with our clients from the initial idea through design, production, and delivery, ensuring every detail is perfect.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="card-industrial p-6 text-center h-full">
                  <s.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-lg uppercase font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Let's Work Together" subtitle="We'd love to hear about your next project." />
    </Layout>
  );
};

export default About;
