import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { useLang } from "@/context/LangContext";
import { projects, categoryLabels } from "@/data/projects";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLang();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="pt-32 pb-16 text-center container-custom px-4">
          <h1 className="text-3xl font-heading font-bold text-foreground mb-4">
            {t("Project not found", "Projekt nije pronađen")}
          </h1>
          <Link to="/projects" className="text-primary hover:underline">
            {t("Back to Projects", "Natrag na projekte")}
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-background">
        <div className="container-custom px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Back link */}
          <AnimatedSection>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("All Projects", "Svi projekti")}
            </Link>
          </AnimatedSection>

          {/* Header */}
          <AnimatedSection delay={0.1}>
            <span className="inline-block text-xs font-heading uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-sm mb-4">
              {categoryLabels[project.category][lang]}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              {project.title[lang]}
            </h1>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection delay={0.15}>
            <div className="prose prose-invert max-w-none mb-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description[lang]}
              </p>
            </div>
          </AnimatedSection>

          {/* Gallery */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className={`rounded-lg overflow-hidden bg-muted ${i === 0 && project.images.length % 2 !== 0 ? "sm:col-span-2 aspect-video" : "aspect-[4/3]"}`}
                >
                  <img
                    src={img}
                    alt={`${project.title[lang]} ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={0.25}>
            <div className="bg-secondary border border-border rounded-lg p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-foreground mb-4">
                {t("Want a similar project?", "Želite sličan projekt?")}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                {t(
                  "Send us your idea – we will turn it into reality.",
                  "Pošaljite nam svoju ideju – mi ćemo je pretvoriti u stvarnost."
                )}
              </p>
              <Link to="/contact" className="btn-primary-glow">
                {t("Request a Quote", "Zatraži ponudu")}
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
