import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import restorationImg from "@/assets/restoration.jpg";
import laserCleaning from "@/assets/laser-cleaning.jpg";

const Restoration = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Bringing Metal Back to Life"
            title="Restoration Services"
            description="We restore old, damaged, and corroded metal elements to their former glory using modern techniques."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection direction="left">
              <img src={restorationImg} alt="Metal restoration before and after" loading="lazy" width={800} height={600} className="w-full h-96 object-cover rounded-sm" />
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h3 className="text-2xl font-heading font-bold uppercase mb-4">Before & After</h3>
              <div className="divider-red mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                Years of exposure to weather and use take their toll on metal elements. Our restoration process brings damaged metalwork back to its original condition — or even better.
              </p>
              <ul className="space-y-3">
                {[
                  "Rust and corrosion removal",
                  "Structural repair and reinforcement",
                  "Surface finishing and protective coating",
                  "Historical and decorative metalwork restoration",
                  "Railings, gates, fences, and architectural elements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right" className="lg:order-2">
              <img src={laserCleaning} alt="Laser cleaning process" loading="lazy" width={800} height={600} className="w-full h-80 object-cover rounded-sm" />
            </AnimatedSection>
            <AnimatedSection direction="left" className="lg:order-1">
              <h3 className="text-2xl font-heading font-bold uppercase mb-4">The Restoration Process</h3>
              <div className="divider-red mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                We begin with a thorough assessment of the piece. Using laser cleaning technology, we remove rust and old coatings without damaging the base material. Then we repair, reshape, and refinish.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every restoration project is unique. We treat each piece with care and attention to detail, preserving its character while ensuring structural integrity and longevity.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <CTASection title="Have Something to Restore?" subtitle="Bring your old metalwork back to life. Contact us for an assessment." />
    </Layout>
  );
};

export default Restoration;
