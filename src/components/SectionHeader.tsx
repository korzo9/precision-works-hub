import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeader = ({ label, title, description, align = "center" }: SectionHeaderProps) => {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <AnimatedSection className={`flex flex-col gap-4 mb-12 ${alignClass}`}>
      {label && (
        <span className="text-primary font-heading uppercase tracking-[0.2em] text-sm">{label}</span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold uppercase leading-tight">
        {title}
      </h2>
      <div className="divider-red" />
      {description && (
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">{description}</p>
      )}
    </AnimatedSection>
  );
};

export default SectionHeader;
