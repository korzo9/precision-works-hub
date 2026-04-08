import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { z } from "zod";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import { useLang } from "@/context/LangContext";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const contactSchema = z.object({
    name: z.string().trim().min(1, t("Name is required", "Ime je obavezno")).max(100),
    email: z.string().trim().email(t("Invalid email address", "Neispravna email adresa")).max(255),
    message: z.string().trim().min(1, t("Message is required", "Poruka je obavezna")).max(2000),
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success(t("Message sent! We'll get back to you soon.", "Poruka poslana! Javit ćemo vam se uskoro."));
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label={t("Get in Touch", "Javite nam se")}
            title={t("Contact Us", "Kontaktirajte nas")}
            description={t("Send us your idea — we will turn it into reality.", "Pošaljite nam svoju ideju — mi ćemo je pretvoriti u stvarnost.")}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-heading uppercase tracking-wider mb-2">{t("Name", "Ime")}</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder={t("Your name", "Vaše ime")}
                  />
                  {errors.name && <p className="text-primary text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-heading uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder={t("your@email.com", "vaš@email.com")}
                  />
                  {errors.email && <p className="text-primary text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-heading uppercase tracking-wider mb-2">{t("Message", "Poruka")}</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full bg-card border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder={t("Tell us about your project...", "Recite nam o svom projektu...")}
                  />
                  {errors.message && <p className="text-primary text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="btn-primary-glow flex items-center justify-center gap-2 w-full sm:w-auto">
                  <Send className="w-4 h-4" />
                  {t("Send Message", "Pošalji poruku")}
                </button>
              </form>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl uppercase font-semibold mb-4">{t("Contact Information", "Kontakt informacije")}</h3>
                  <div className="divider-red mb-6" />
                  <div className="space-y-4">
                    <a href="mailto:info@korzo.hr" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary shrink-0" />
                      info@korzo.hr
                    </a>
                    <a href="tel:+38598389819" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      +385 98 389 819
                    </a>
                    <a href="tel:+385993430371" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                      <Phone className="w-5 h-5 text-primary shrink-0" />
                      +385 99 3430 371
                    </a>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      Kutinska 189, Novo Selo Palanječko, Sisak, Croatia
                    </div>
                  </div>
                </div>

                <div className="w-full h-64 bg-card border border-border rounded-sm overflow-hidden">
                  <iframe
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.0!2d16.42!3d45.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI4JzQ4LjAiTiAxNsKwMjUnMTIuMCJF!5e0!3m2!1sen!2shr!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
