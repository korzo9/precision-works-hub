import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";
import { useLang } from "@/context/LangContext";
import { projects, categoryLabels, Project } from "@/data/projects";

type FilterCategory = "all" | Project["category"];

const Projects = () => {
  const { lang, t } = useLang();
  const [filter, setFilter] = useState<FilterCategory>("all");

  const filters: { key: FilterCategory; label: { en: string; hr: string } }[] = [
    { key: "all", label: { en: "All", hr: "Sve" } },
    { key: "cnc", label: categoryLabels.cnc },
    { key: "welding", label: categoryLabels.welding },
    { key: "construction", label: categoryLabels.construction },
    { key: "restoration", label: categoryLabels.restoration },
  ];

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-background">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <SectionHeader
              title={t("Our Projects", "Naši projekti")}
              description={t(
                "Browse our portfolio of completed projects across metal fabrication, CNC cutting, welding, and restoration.",
                "Pregledajte naš portfolio završenih projekata iz područja obrade metala, CNC rezanja, zavarivanja i restauracije."
              )}
            />
          </AnimatedSection>

          {/* Filters */}
          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {filters.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-4 py-2 text-sm font-heading uppercase tracking-wider rounded-sm transition-colors ${
                    filter === f.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {f.label[lang]}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.05}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Projects;
