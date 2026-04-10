import { Link } from "react-router-dom";
import { useLang } from "@/context/LangContext";
import { Project, categoryLabels } from "@/data/projects";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { lang, t } = useLang();

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block rounded-lg overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={project.images[0]}
          alt={project.title[lang]}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 space-y-3">
        <span className="inline-block text-xs font-heading uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-sm">
          {categoryLabels[project.category][lang]}
        </span>
        <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title[lang]}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.shortDescription[lang]}
        </p>
        <div className="flex items-center gap-1 text-sm text-primary font-medium pt-1">
          {t("View Project", "Pogledaj projekt")}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
