import { Shield, Clock, Wrench, Award } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { useLang } from "@/context/LangContext";
import workshop from "@/assets/workshop.jpg";

const About = () => {
  const { t } = useLang();

  const strengths = [
    { icon: Clock, title: t("35+ Years", "35+ godina"), desc: t("Decades of experience in metal fabrication since 1988", "Desetljeća iskustva u obradi metala od 1988.") },
    { icon: Shield, title: t("Quality First", "Kvaliteta na prvom mjestu"), desc: t("Every product is quality-checked before delivery", "Svaki proizvod je provjeren prije isporuke") },
    { icon: Wrench, title: t("Full Service", "Kompletna usluga"), desc: t("From design to production to installation", "Od dizajna do proizvodnje i montaže") },
    { icon: Award, title: t("Modern Tech", "Moderna tehnologija"), desc: t("CNC, laser welding, and advanced equipment", "CNC, lasersko zavarivanje i napredna oprema") },
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label={t("Who We Are", "Tko smo mi")}
            title={t("About Us", "O nama")}
            description={t("A family-run metal fabrication company with a tradition of excellence", "Obiteljska tvrtka za obradu metala s tradicijom izvrsnosti")}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection direction="left">
              <img src={workshop} alt={t("Our workshop", "Naša radionica")} loading="lazy" width={1200} height={600} className="w-full h-96 object-cover rounded-sm" />
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h3 className="text-2xl font-heading font-bold uppercase mb-4">{t("Our Story", "Naša priča")}</h3>
              <div className="divider-red mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t(
                  "Founded in 1988, Obrada metala Korzo Sisak started as a small workshop with a passion for metalwork. Over more than three decades, we've grown into a fully-equipped fabrication facility serving clients across Croatia and beyond.",
                  "Osnovana 1988., Obrada metala Korzo Sisak započela je kao mala radionica sa strašću prema obradi metala. Kroz više od tri desetljeća, izrasli smo u potpuno opremljeni pogon koji opslužuje klijente diljem Hrvatske i šire."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t(
                  "We believe in combining traditional craftsmanship with modern technology. Our team brings together years of hands-on experience with state-of-the-art CNC plasma cutting, laser welding, and precision bending equipment.",
                  "Vjerujemo u spajanje tradicionalne vještine s modernom tehnologijom. Naš tim spaja godine praktičnog iskustva s najsuvremenijom CNC plazma opremom, laserskim zavarivanjem i preciznim strojevima za savijanje."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "What sets us apart is our commitment to complete solutions. We don't just cut or weld — we partner with our clients from the initial idea through design, production, and delivery, ensuring every detail is perfect.",
                  "Ono što nas izdvaja je naša posvećenost kompletnim rješenjima. Mi ne samo da režemo ili zavarujemo — partnerski surađujemo s našim klijentima od početne ideje kroz dizajn, proizvodnju i isporuku, osiguravajući da svaki detalj bude savršen."
                )}
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
      <CTASection
        title="Let's Work Together"
        titleHr="Surađujmo"
        subtitle="We'd love to hear about your next project."
        subtitleHr="Rado bismo čuli o vašem sljedećem projektu."
      />
    </Layout>
  );
};

export default About;
