import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { useLang } from "@/context/LangContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLang();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const mainLinks = [
    { to: "/", label: t("Home", "Početna") },
    { to: "/about", label: t("About", "O nama") },
    { to: "/contact", label: t("Contact", "Kontakt") },
  ];

  const serviceLinks = [
    { to: "/services", label: t("All Services", "Sve usluge") },
    { to: "/idea-to-product", label: t("Idea to Product", "Od ideje do realizacije") },
    { to: "/restoration", label: t("Restoration", "Restauracije") },
  ];

  const portfolioLinks = [
    { to: "/gallery", label: t("Gallery", "Galerija") },
    { to: "/projects", label: t("Projects", "Projekti") },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isGroupActive = (links: { to: string }[]) => links.some((l) => isActive(l.to));

  const linkClass = (active: boolean) =>
    `px-3 py-2 text-[13px] font-heading uppercase tracking-wider transition-colors duration-200 ${
      active ? "text-primary" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/60">
      <div className="container-custom flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="font-heading text-xl font-bold uppercase tracking-wider">
            <span className="text-primary">Korzo</span> Sisak
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-0.5">
          {/* Home */}
          <Link to="/" className={linkClass(isActive("/"))}>
            {t("Home", "Početna")}
          </Link>

          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onMouseEnter={() => setServicesOpen(true)}
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`${linkClass(isGroupActive(serviceLinks))} inline-flex items-center gap-1`}
            >
              {t("Services", "Usluge")}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="absolute top-full left-0 mt-1 w-56 bg-card border border-border/60 rounded-sm shadow-lg py-1 animate-fade-in"
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`block px-4 py-2.5 text-[13px] font-heading uppercase tracking-wider transition-colors ${
                      isActive(link.to) ? "text-primary bg-secondary/50" : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Portfolio links inline */}
          <Link to="/gallery" className={linkClass(isActive("/gallery"))}>
            {t("Gallery", "Galerija")}
          </Link>
          <Link to="/projects" className={linkClass(isActive("/projects") || location.pathname.startsWith("/projects/"))}>
            {t("Projects", "Projekti")}
          </Link>
          <Link to="/about" className={linkClass(isActive("/about"))}>
            {t("About", "O nama")}
          </Link>
          <Link to="/contact" className={linkClass(isActive("/contact"))}>
            {t("Contact", "Kontakt")}
          </Link>
        </div>

        {/* Desktop right */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center border border-border/50 rounded-sm overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 text-[11px] font-heading uppercase tracking-wider transition-colors ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("hr")}
              className={`px-2.5 py-1 text-[11px] font-heading uppercase tracking-wider transition-colors ${
                lang === "hr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              HR
            </button>
          </div>
          <a href="tel:+38598389819" className="flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" />
            +385 98 389 819
          </a>
          <Link to="/contact" className="btn-primary-glow text-[11px] px-5 py-2">
            {t("Get a Quote", "Zatraži ponudu")}
          </Link>
        </div>

        {/* Mobile right */}
        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex items-center border border-border/50 rounded-sm overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1.5 text-[11px] font-heading uppercase ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("hr")}
              className={`px-2 py-1.5 text-[11px] font-heading uppercase ${
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
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border/60 animate-fade-in">
          <div className="px-4 py-3 flex flex-col">
            <Link to="/" className={`px-4 py-3.5 text-sm font-heading uppercase tracking-wider ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}>
              {t("Home", "Početna")}
            </Link>

            {/* Services accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between px-4 py-3.5 text-sm font-heading uppercase tracking-wider ${
                isGroupActive(serviceLinks) ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {t("Services", "Usluge")}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 flex flex-col border-l border-border/40 ml-4 mb-1">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-3 text-sm font-heading uppercase tracking-wider ${
                      isActive(link.to) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/gallery" className={`px-4 py-3.5 text-sm font-heading uppercase tracking-wider ${isActive("/gallery") ? "text-primary" : "text-muted-foreground"}`}>
              {t("Gallery", "Galerija")}
            </Link>
            <Link to="/projects" className={`px-4 py-3.5 text-sm font-heading uppercase tracking-wider ${isActive("/projects") ? "text-primary" : "text-muted-foreground"}`}>
              {t("Projects", "Projekti")}
            </Link>
            <Link to="/about" className={`px-4 py-3.5 text-sm font-heading uppercase tracking-wider ${isActive("/about") ? "text-primary" : "text-muted-foreground"}`}>
              {t("About", "O nama")}
            </Link>
            <Link to="/contact" className={`px-4 py-3.5 text-sm font-heading uppercase tracking-wider ${isActive("/contact") ? "text-primary" : "text-muted-foreground"}`}>
              {t("Contact", "Kontakt")}
            </Link>

            <div className="flex items-center gap-3 px-4 py-3 mt-1 border-t border-border/30">
              <a href="tel:+38598389819" className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" /> +385 98 389 819
              </a>
            </div>
            <Link to="/contact" className="btn-primary-glow text-xs text-center mx-4 mt-2 mb-2">
              {t("Get a Quote", "Zatraži ponudu")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
