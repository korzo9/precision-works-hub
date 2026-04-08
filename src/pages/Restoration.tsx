import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import { useLang } from "@/context/LangContext";
import restorationImg from "@/assets/restoration.jpg";
import laserCleaning from "@/assets/laser-cleaning.jpg";

const Restoration = () => {
  const { t } = useLang();

  const bullets = [
    t("Rust and corrosion removal", "Uklanjanje hrđe i korozije"),
    t("Structural repair and reinforcement", "Strukturalni popravak i pojačanje"),
    t("Surface finishing and protective coating", "Završna obrada površine i zaštitni premaz"),
    t("Historical and decorative metalwork restoration", "Restauracija povijesnih i dekorativnih metalnih elemenata"),
    t("Railings, gates, fences, and architectural elements", "Ograde, kapije, ograde i arhitektonski elementi"),
  ];

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label={t("Bringing Metal Back to Life", "Vraćamo metal u život")}
            title={t("Restoration Services", "Usluge restauracije")}
            description={t(
              "We restore old, damaged, and corroded metal elements to their former glory using modern techniques.",
              "Restauriramo stare, oštećene i korodirane metalne elemente u njihov prvobitni sjaj koristeći moderne tehnike."
            )}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection direction="left">
              <img src={restorationImg} alt={t("Metal restoration before and after", "Restauracija metala prije i poslije")} loading="lazy" width={800} height={600} className="w-full h-96 object-cover rounded-sm" />
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h3 className="text-2xl font-heading font-bold uppercase mb-4">{t("Before & After", "Prije i poslije")}</h3>
              <div className="divider-red mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t(
                  "Years of exposure to weather and use take their toll on metal elements. Our restoration process brings damaged metalwork back to its original condition — or even better.",
                  "Godine izloženosti vremenskim uvjetima i upotrebi ostavljaju trag na metalnim elementima. Naš proces restauracije vraća oštećene metalne radove u njihovo prvotno stanje — ili čak bolje."
                )}
              </p>
              <ul className="space-y-3">
                {bullets.map((item) => (
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
              <img src={laserCleaning} alt={t("Laser cleaning process", "Proces laserskog čišćenja")} loading="lazy" width={800} height={600} className="w-full h-80 object-cover rounded-sm" />
            </AnimatedSection>
            <AnimatedSection direction="left" className="lg:order-1">
              <h3 className="text-2xl font-heading font-bold uppercase mb-4">{t("The Restoration Process", "Proces restauracije")}</h3>
              <div className="divider-red mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t(
                  "We begin with a thorough assessment of the piece. Using laser cleaning technology, we remove rust and old coatings without damaging the base material. Then we repair, reshape, and refinish.",
                  "Počinjemo temeljitom procjenom predmeta. Koristeći tehnologiju laserskog čišćenja, uklanjamo hrđu i stare premaze bez oštećenja osnovnog materijala. Zatim popravljamo, preoblikujemo i dorađujemo."
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t(
                  "Every restoration project is unique. We treat each piece with care and attention to detail, preserving its character while ensuring structural integrity and longevity.",
                  "Svaki projekt restauracije je jedinstven. Svaki komad tretiramo s pažnjom i pozornošću na detalje, čuvajući njegov karakter uz osiguranje strukturalne čvrstoće i dugotrajnosti."
                )}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <CTASection
        title="Have Something to Restore?"
        titleHr="Imate nešto za restaurirati?"
        subtitle="Bring your old metalwork back to life. Contact us for an assessment."
        subtitleHr="Vratite svoje stare metalne radove u život. Kontaktirajte nas za procjenu."
      />
    </Layout>
  );
};

export default Restoration;
