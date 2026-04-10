import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useLang } from "@/context/LangContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLang();

  const navLinks = [
    { to: "/", label: t("Home", "Početna") },
    { to: "/services", label: t("Services", "Usluge") },
    { to: "/idea-to-product", label: t("From Idea to Product", "Od ideje do realizacije") },
    { to: "/restoration", label: t("Restoration", "Restauracije") },
    { to: "/gallery", label: t("Gallery", "Galerija") },
    { to: "/projects", label: t("Projects", "Projekti") },
    { to: "/about", label: t("About Us", "O nama") },
    { to: "/contact", label: t("Contact", "Kontakt") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-custom flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-wider">
            <span className="text-primary">Korzo</span> Sisak
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-2 text-sm font-heading uppercase tracking-wider transition-colors duration-200 ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center border border-border rounded-sm overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 text-xs font-heading uppercase tracking-wider transition-colors ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("hr")}
              className={`px-3 py-1.5 text-xs font-heading uppercase tracking-wider transition-colors ${
                lang === "hr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              HR
            </button>
          </div>
          <a href="tel:+38598389819" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            +385 98 389 819
          </a>
          <Link to="/contact" className="btn-primary-glow text-xs">
            {t("Get a Quote", "Zatraži ponudu")}
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex items-center border border-border rounded-sm overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 text-xs font-heading uppercase ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("hr")}
              className={`px-2 py-1 text-xs font-heading uppercase ${
                lang === "hr" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              HR
            </button>
          </div>
          <button onClick={() => setOpen(!open)} className="text-foreground p-2" aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 text-sm font-heading uppercase tracking-wider transition-colors ${
                  location.pathname === link.to
                    ? "text-primary bg-secondary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary-glow text-xs text-center mt-4">
              {t("Get a Quote", "Zatraži ponudu")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
