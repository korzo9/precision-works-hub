// Dragon restoration assets
import dragonCover from "@/assets/project_assets/dragon-restoration/cover.jpg";
import dragon1 from "@/assets/project_assets/dragon-restoration/image1.jpg";
import dragon2 from "@/assets/project_assets/dragon-restoration/image2.jpg";
import dragon3 from "@/assets/project_assets/dragon-restoration/image3.jpg";
import dragon4 from "@/assets/project_assets/dragon-restoration/image4.jpg";
import dragon5 from "@/assets/project_assets/dragon-restoration/image5.jpg";
import dragon6 from "@/assets/project_assets/dragon-restoration/image6.jpg";
import dragon7 from "@/assets/project_assets/dragon-restoration/image7.jpg";
import dragon8 from "@/assets/project_assets/dragon-restoration/image8.jpg";
import dragon9 from "@/assets/project_assets/dragon-restoration/image9.jpg";

export interface ProjectMedia {
  type?: "image" | "video";
  src: string;
  poster?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: { en: string; hr: string };
  description: { en: string; hr: string };
  shortDescription: { en: string; hr: string };
  category: "cnc" | "welding" | "construction" | "restoration";
  coverImage: string;
  images: string[];
  videos?: ProjectMedia[];
  date?: string;
  featured?: boolean;
}

export const categoryLabels: Record<Project["category"], { en: string; hr: string }> = {
  cnc: { en: "CNC Cutting", hr: "CNC rezanje" },
  welding: { en: "Welding", hr: "Zavarivanje" },
  construction: { en: "Construction", hr: "Konstrukcije" },
  restoration: { en: "Restoration", hr: "Restauracije" },
};

const placeholder = "/placeholder.svg";

export const projects: Project[] = [
  {
    id: "dragon-restoration",
    slug: "restauracija-metalnog-cimera",
    title: {
      en: "Restoration of an Antique Metal Sign",
      hr: "Restauracija metalnog cimera",
    },
    shortDescription: {
      en: "Full restoration of an early 20th-century metal sign – missing parts reconstructed, original inscription preserved, finished with a museum-grade display stand.",
      hr: "Cjelovita restauracija metalnog cimera s početka 20. stoljeća – rekonstruirani nedostajući dijelovi, sačuvan originalni natpis, izrađen stalak za muzejsku prezentaciju.",
    },
    description: {
      en: "An early 20th-century metal sign, restored in its entirety: from fabricating the missing parts to protecting the authentic inscription. We are proud to have taken part in preserving such a piece of history at the initiative of the Croatian Conservation Institute.\n\n• All missing elements were reconstructed\n• The original inscription was preserved\n• The surface was protected and adapted for museum presentation, with a custom display stand",
      hr: "Metalni cimer s početka 20. stoljeća, restauriran u cijelosti: od izrade nedostajućih dijelova do zaštite autentičnog natpisa. Drago nam je što smo mogli sudjelovati u očuvanju ovakvog komada povijesti na inicijativu Hrvatskog restauratorskog zavoda.\n\n• Rekonstruirani su svi nedostajući elementi\n• Zadržan je originalni natpis\n• Površina je zaštićena i prilagođena muzejskoj prezentaciji, izradom stalka",
    },
    category: "restoration",
    coverImage: dragonCover,
    images: [dragon2, dragon3, dragon4, dragon5, dragon6, dragon7, dragon8, dragon9, dragon1],
    featured: true,
  },
  {
    id: "stainless-steel-railing",
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
    coverImage: placeholder,
    images: [placeholder, placeholder],
  },
  {
    id: "industrial-cnc-parts",
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
    coverImage: placeholder,
    images: [placeholder, placeholder, placeholder],
  },
  {
    id: "vintage-gate-restoration",
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
    coverImage: placeholder,
    images: [placeholder, placeholder, placeholder],
  },
  {
    id: "metal-staircase-construction",
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
    coverImage: placeholder,
    images: [placeholder, placeholder],
  },
  {
    id: "custom-steel-table",
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
    coverImage: placeholder,
    images: [placeholder, placeholder],
  },
];
