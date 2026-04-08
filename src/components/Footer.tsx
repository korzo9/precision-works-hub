import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLang } from "@/context/LangContext";

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <span className="font-heading text-2xl font-bold uppercase tracking-wider">
              <span className="text-primary">Korzo</span> Sisak
            </span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t(
                "Metal fabrication excellence since 1988. From idea to finished product — precision, quality, and complete solutions.",
                "Izvrsnost u obradi metala od 1988. Od ideje do gotovog proizvoda — preciznost, kvaliteta i kompletna rješenja."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-heading uppercase tracking-wider text-sm font-semibold">{t("Services", "Usluge")}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/services" className="hover:text-primary transition-colors">{t("CNC Plasma Cutting", "CNC plazma rezanje")}</Link>
              <Link to="/services" className="hover:text-primary transition-colors">{t("Laser Welding", "Lasersko zavarivanje")}</Link>
              <Link to="/services" className="hover:text-primary transition-colors">{t("Press Brake Bending", "Savijanje na presi")}</Link>
              <Link to="/services" className="hover:text-primary transition-colors">{t("Metal Constructions", "Metalne konstrukcije")}</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-heading uppercase tracking-wider text-sm font-semibold">{t("Company", "Tvrtka")}</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link to="/about" className="hover:text-primary transition-colors">{t("About Us", "O nama")}</Link>
              <Link to="/gallery" className="hover:text-primary transition-colors">{t("Gallery", "Galerija")}</Link>
              <Link to="/idea-to-product" className="hover:text-primary transition-colors">{t("From Idea to Product", "Od ideje do realizacije")}</Link>
              <Link to="/restoration" className="hover:text-primary transition-colors">{t("Restoration", "Restauracije")}</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-heading uppercase tracking-wider text-sm font-semibold">{t("Contact", "Kontakt")}</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="mailto:info@korzo.hr" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> info@korzo.hr
              </a>
              <a href="tel:+38598389819" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +385 98 389 819
              </a>
              <a href="tel:+385993430371" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +385 99 3430 371
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Kutinska 189, Novo Selo Palanječko, Sisak, Croatia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Obrada metala Korzo Sisak. {t("All rights reserved.", "Sva prava pridržana.")}</p>
          <p>{t("Crafted with precision since 1988", "Izrađeno s preciznošću od 1988.")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
