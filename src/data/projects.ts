export interface Project {
  id: string;
  slug: string;
  title: { en: string; hr: string };
  description: { en: string; hr: string };
  shortDescription: { en: string; hr: string };
  category: "cnc" | "welding" | "construction" | "restoration";
  images: string[];
  processSteps?: { en: string; hr: string }[];
}

export const categoryLabels: Record<Project["category"], { en: string; hr: string }> = {
  cnc: { en: "CNC Cutting", hr: "CNC rezanje" },
  welding: { en: "Welding", hr: "Zavarivanje" },
  construction: { en: "Construction", hr: "Konstrukcije" },
  restoration: { en: "Restoration", hr: "Restauracije" },
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "steel-fence-sisak",
    title: { en: "Steel Fence – Sisak", hr: "Čelična ograda – Sisak" },
    shortDescription: {
      en: "Custom steel fence with modern geometric design for a residential property.",
      hr: "Čelična ograda modernog geometrijskog dizajna za stambeni objekt.",
    },
    description: {
      en: "A complete custom steel fence project for a residential property in Sisak. The fence features a modern geometric pattern, CNC plasma-cut from 3mm steel plate, powder-coated in anthracite grey. The project included design, fabrication, surface treatment, and on-site installation.",
      hr: "Kompletna izrada čelične ograde za stambeni objekt u Sisku. Ograda ima moderan geometrijski uzorak, CNC plazma rezan iz čeličnog lima debljine 3mm, plastificiran u antracit sivoj boji. Projekt je uključivao dizajn, izradu, površinsku obradu i montažu na lokaciji.",
    },
    category: "construction",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    processSteps: [
      { en: "CAD Design", hr: "CAD dizajn" },
      { en: "CNC Plasma Cutting", hr: "CNC plazma rezanje" },
      { en: "Welding & Assembly", hr: "Zavarivanje i montaža" },
      { en: "Powder Coating", hr: "Plastifikacija" },
      { en: "On-site Installation", hr: "Montaža na lokaciji" },
    ],
  },
  {
    id: "2",
    slug: "stainless-steel-railing",
    title: { en: "Stainless Steel Railing", hr: "Inox ograda" },
    shortDescription: {
      en: "Premium stainless steel railing with glass panels for a commercial building.",
      hr: "Premium inox ograda sa staklenim panelima za poslovni objekt.",
    },
    description: {
      en: "High-quality stainless steel railing system with tempered glass panels, designed and fabricated for a modern commercial building. Precision laser welding ensured clean, polished joints throughout the installation.",
      hr: "Visokokvalitetni sustav inox ograde s kaljenim staklenim panelima, dizajniran i izrađen za moderan poslovni objekt. Precizno lasersko zavarivanje osiguralo je čiste, polirane spojeve kroz cijelu instalaciju.",
    },
    category: "welding",
    images: ["/placeholder.svg", "/placeholder.svg"],
    processSteps: [
      { en: "Measurement & Design", hr: "Mjerenje i dizajn" },
      { en: "Tube Bending", hr: "Savijanje cijevi" },
      { en: "Laser Welding", hr: "Lasersko zavarivanje" },
      { en: "Polishing", hr: "Poliranje" },
      { en: "Installation", hr: "Montaža" },
    ],
  },
  {
    id: "3",
    slug: "industrial-cnc-parts",
    title: { en: "Industrial CNC Parts", hr: "Industrijski CNC dijelovi" },
    shortDescription: {
      en: "Precision CNC plasma-cut components for industrial machinery.",
      hr: "Precizno CNC plazma rezani dijelovi za industrijske strojeve.",
    },
    description: {
      en: "A batch production run of precision CNC plasma-cut steel components for industrial machinery. Parts were cut from 10mm and 15mm steel plate with tolerances of ±0.5mm, then deburred and prepared for assembly.",
      hr: "Serijska proizvodnja preciznih CNC plazma rezanih čeličnih komponenti za industrijske strojeve. Dijelovi su rezani iz čeličnog lima debljine 10mm i 15mm s tolerancijama ±0.5mm, zatim brušeni i pripremljeni za montažu.",
    },
    category: "cnc",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  },
  {
    id: "4",
    slug: "vintage-gate-restoration",
    title: { en: "Vintage Gate Restoration", hr: "Restauracija starih vrata" },
    shortDescription: {
      en: "Complete restoration of a 19th-century wrought iron gate.",
      hr: "Kompletna restauracija kovanih željeznih vrata iz 19. stoljeća.",
    },
    description: {
      en: "Full restoration of a historic wrought iron gate from the late 19th century. The process included laser cleaning to remove decades of rust and paint, structural repairs, replacement of missing decorative elements, and protective coating application.",
      hr: "Potpuna restauracija historijskih kovanih željeznih vrata iz kasnog 19. stoljeća. Proces je uključivao lasersko čišćenje za uklanjanje desetljeća hrđe i boje, strukturalne popravke, zamjenu nedostajućih dekorativnih elemenata i nanošenje zaštitnog premaza.",
    },
    category: "restoration",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    processSteps: [
      { en: "Assessment", hr: "Procjena stanja" },
      { en: "Laser Cleaning", hr: "Lasersko čišćenje" },
      { en: "Structural Repair", hr: "Strukturalni popravak" },
      { en: "Decorative Restoration", hr: "Dekorativna restauracija" },
      { en: "Protective Coating", hr: "Zaštitni premaz" },
    ],
  },
  {
    id: "5",
    slug: "metal-staircase-construction",
    title: { en: "Metal Staircase", hr: "Metalno stubište" },
    shortDescription: {
      en: "Custom industrial-style metal staircase for a loft apartment.",
      hr: "Industrijsko metalno stubište po mjeri za loft stan.",
    },
    description: {
      en: "A custom-designed industrial-style metal staircase for a loft apartment conversion. The staircase features CNC-cut steel stringers, press-brake bent treads, and laser-welded joints for a clean, modern aesthetic.",
      hr: "Industrijsko metalno stubište dizajnirano po mjeri za prenamjenu loft stana. Stubište ima CNC rezane čelične nosače, gazišta savijena na presi i laserski zavarene spojeve za čist, moderan izgled.",
    },
    category: "construction",
    images: ["/placeholder.svg", "/placeholder.svg"],
    processSteps: [
      { en: "3D Design (SketchUp)", hr: "3D dizajn (SketchUp)" },
      { en: "CNC Cutting", hr: "CNC rezanje" },
      { en: "Press Brake Bending", hr: "Savijanje na presi" },
      { en: "Laser Welding", hr: "Lasersko zavarivanje" },
      { en: "Surface Treatment", hr: "Površinska obrada" },
      { en: "Installation", hr: "Montaža" },
    ],
  },
  {
    id: "6",
    slug: "custom-steel-table",
    title: { en: "Custom Steel Table", hr: "Čelični stol po mjeri" },
    shortDescription: {
      en: "Industrial-style steel table with CNC-cut decorative base.",
      hr: "Čelični stol industrijskog stila s CNC rezanom dekorativnom bazom.",
    },
    description: {
      en: "A bespoke industrial-style dining table with a CNC plasma-cut decorative steel base and a solid wood top. The base features an intricate geometric pattern, precision-welded and finished with a matte black powder coat.",
      hr: "Blagovaonički stol industrijskog stila po mjeri s CNC plazma rezanom dekorativnom čeličnom bazom i masivnom drvenom pločom. Baza ima složen geometrijski uzorak, precizno zavarena i završno obrađena mat crnom plastifikacijom.",
    },
    category: "cnc",
    images: ["/placeholder.svg", "/placeholder.svg"],
  },
];
