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

import vrataCover from "@/assets/project_assets/vrata-restoration/vrata (2).jpg";
import vrata1 from "@/assets/project_assets/vrata-restoration/vrata (1).jpg";
import vrata2 from "@/assets/project_assets/vrata-restoration/vrata (2).jpg";
import vrata3 from "@/assets/project_assets/vrata-restoration/vrata (3).jpg";
import vrata4 from "@/assets/project_assets/vrata-restoration/vrata (4).jpg";
import vrata5 from "@/assets/project_assets/vrata-restoration/vrata (5).jpg";
import vrata6 from "@/assets/project_assets/vrata-restoration/vrata (6).jpg";
import vrata7 from "@/assets/project_assets/vrata-restoration/vrata (7).jpg";
import vrata8 from "@/assets/project_assets/vrata-restoration/vrata (8).jpg";
import vrata9 from "@/assets/project_assets/vrata-restoration/vrata (9).jpg";

// Stepenice (stairs) assets
import stepeniceCover from "@/assets/project_assets/stepenice/stepenice (10).jpg";
import stepenice1 from "@/assets/project_assets/stepenice/stepenice (1).jpg";
import stepenice2 from "@/assets/project_assets/stepenice/stepenice (2).jpg";
import stepenice3 from "@/assets/project_assets/stepenice/stepenice (3).jpg";
import stepenice4 from "@/assets/project_assets/stepenice/stepenice (4).jpg";
import stepenice5 from "@/assets/project_assets/stepenice/stepenice (5).jpg";
import stepenice6 from "@/assets/project_assets/stepenice/stepenice (6).jpg";
import stepenice7 from "@/assets/project_assets/stepenice/stepenice (7).jpg";
import stepenice8 from "@/assets/project_assets/stepenice/stepenice (8).jpg";
import stepenice9 from "@/assets/project_assets/stepenice/stepenice (9).jpg";
import stepenice10 from "@/assets/project_assets/stepenice/stepenice (10).jpg";
import stepenice11 from "@/assets/project_assets/stepenice/stepenice (11).jpg";
import stepenice12 from "@/assets/project_assets/stepenice/stepenice (12).jpg";
import stepenice13 from "@/assets/project_assets/stepenice/stepenice (13).jpg";
import stepenice14 from "@/assets/project_assets/stepenice/stepenice (14).jpg";
import stepenice15 from "@/assets/project_assets/stepenice/stepenice (15).jpg";
import stepenice16 from "@/assets/project_assets/stepenice/stepenice (16).jpg";

// Hoku assets
import hokuCover from "@/assets/project_assets/hoku/hoku (2).jpg";
import hoku1 from "@/assets/project_assets/hoku/hoku (1).jpg";
import hoku2 from "@/assets/project_assets/hoku/hoku (2).jpg";
import hoku3 from "@/assets/project_assets/hoku/hoku (3).jpg";
import hoku4 from "@/assets/project_assets/hoku/hoku (4).jpg";

// Rubnjaci assets
import rubnjaciCover from "@/assets/project_assets/rubnjaci/rubnjaci (5).jpg";
import rubnjaci1 from "@/assets/project_assets/rubnjaci/rubnjaci (1).jpg";
import rubnjaci2 from "@/assets/project_assets/rubnjaci/rubnjaci (2).jpg";
import rubnjaci3 from "@/assets/project_assets/rubnjaci/rubnjaci (3).jpg";
import rubnjaci4 from "@/assets/project_assets/rubnjaci/rubnjaci (4).jpg";
import rubnjaci5 from "@/assets/project_assets/rubnjaci/rubnjaci (5).jpg";

// Namještaj assets
import namjestajCover from "@/assets/project_assets/namjestaj/namjestaj (4).jpg";
import namjestaj1 from "@/assets/project_assets/namjestaj/namjestaj (1).jpg";
import namjestaj2 from "@/assets/project_assets/namjestaj/namjestaj (2).jpg";
import namjestaj3 from "@/assets/project_assets/namjestaj/namjestaj (3).jpg";
import namjestaj4 from "@/assets/project_assets/namjestaj/namjestaj (4).jpg";
import namjestaj5 from "@/assets/project_assets/namjestaj/namjestaj (5).jpg";
import namjestaj6 from "@/assets/project_assets/namjestaj/namjestaj (6).jpg";
import namjestaj7 from "@/assets/project_assets/namjestaj/namjestaj (7).jpg";
import namjestaj8 from "@/assets/project_assets/namjestaj/namjestaj (8).jpg";
import namjestaj9 from "@/assets/project_assets/namjestaj/namjestaj (9).jpg";
import namjestaj10 from "@/assets/project_assets/namjestaj/namjestaj (10).jpg";
import namjestaj11 from "@/assets/project_assets/namjestaj/namjestaj (11).jpg";


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
  category: "cnc" | "welding" | "construction" | "restoration" | "press-brake" | "furniture-design";
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
  "press-brake": { en: "Press Brake", hr: "Savijanje lima" },
  "furniture-design": { en: "Furniture Design", hr: "Dizajn namještaja" },
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
    id: "stepenice",
    slug: "izrada-celicnih-stepenica",
    title: { en: "Steel Stair Fabrication", hr: "Izrada čeličnih stepenica" },
    shortDescription: {
      en: "We produce steel stairs of various shapes and sizes, tailored to each space.",
      hr: "Proizvodimo čelične stepenice raznih oblika i veličina, prilagođene svakom prostoru.",
    },
    description: {
      en: "We produce steel stairs of various shapes and sizes, tailored to each space. From the initial concept to final installation, every step of the process is carefully guided by our expert team. Every detail is thoughtfully crafted to ensure superior functionality and aesthetics.",
      hr: "Proizvodimo čelične stepenice raznih oblika i veličina, prilagođene svakom prostoru. Od početne ideje do konačne instalacije, svaki korak procesa pažljivo je vođen našom stručnom rukom. Svaki detalj pažljivo je oblikovan kako bi osigurao vrhunsku funkcionalnost i estetiku.",
    },
    category: "construction",
    coverImage: stepeniceCover,
    images: [
      stepenice1,
      stepenice2,
      stepenice3,
      stepenice4,
      stepenice5,
      stepenice6,
      stepenice7,
      stepenice8,
      stepenice9,
      stepenice10,
      stepenice11,
      stepenice12,
      stepenice13,
      stepenice14,
      stepenice15,
      stepenice16,
    ],
  },
  {
    id: "vrata-restoration-replica",
    slug: "restauracija-i-izrada-replike",
    title: { en: "Door Restoration & Replica", hr: "Restauracija i izrada replike" },
    shortDescription: {
      en: "Restoration of historic metal doors with authentic replica fabrication.",
      hr: "Restauracija starih metalnih vrata i izrada autentične replike.",
    },
    description: {
      en: "With great effort, precision and respect for the original design, we restored historic metal doors and created an authentic replica according to the original specifications. The restoration process preserved the original aesthetic while the replica ensures future accessibility and protection of the original piece.",
      hr: "Uz puno truda, preciznosti i poštovanja prema izvornom izgledu, restaurirali smo stara metalna vrata i izradili repliku prema originalu. Proces restauracije sačuvao je originalni izgled dok replika osigurava dostupnost i zaštitu originalnog komada.",
    },
    category: "restoration",
    coverImage: vrataCover,
    images: [vrata1, vrata2, vrata3, vrata4, vrata5, vrata6, vrata7, vrata8, vrata9],
  },
  {
    id: "hoku-logo-sign",
    slug: "hoku-logo-natpis",
    title: { en: "Logo and Sign", hr: "Logo i natpis" },
    shortDescription: {
      en: "Logo and sign production for the Dutch House using craftsmanship and modern technology.",
      hr: "Izradili smo logo i natpis na Holandskoj kući, kombinacijom vještina ručnog rada i moderne tehnologije.",
    },
    description: {
      en: "We created the logo and sign for the Dutch House by combining skilled handwork with modern technology. From the workshop perspective, we achieved an excellent blend of craftsmanship and precision.",
      hr: "Izradili smo logo i natpis na Holandskoj kući, kombinacijom vještina ručnog rada i moderne tehnologije. Iz radioničke perspektive dobili smo odličan spoj!",
    },
    category: "cnc",
    coverImage: hokuCover,
    images: [hoku1, hoku2, hoku3, hoku4],
  },
  {
    id: "rubnjaci-uredjenje-prostora",
    slug: "rubnjaci-uredjenje-prostora",
    title: { en: "Custom Edge Trims", hr: "Rubnjaci za uređenje prostora" },
    shortDescription: {
      en: "Custom edge trims for interior design, bent, protected, painted and ready for installation.",
      hr: "Rubnjaci za uređenje prostora po mjeri. Savijanje lima, zaštita, bojanje i spremno za ugradnju!",
    },
    description: {
      en: "Custom edge trims for interior design, bent, protected, painted and ready for installation. We combine precision press brake work with finishing processes so each piece is installation-ready.",
      hr: "Rubnjaci za uređenje prostora po mjeri. Savijanje lima, zaštita, bojanje i spremno za ugradnju!",
    },
    category: "press-brake",
    coverImage: rubnjaciCover,
    images: [rubnjaci1, rubnjaci2, rubnjaci3, rubnjaci4, rubnjaci5],
  },
  {
    id: "custom-metal-furniture",
    slug: "custom-metal-furniture-collection",
    title: { en: "Custom Metal Furniture Collection", hr: "Kolekcija prilagođenog metalnog namještaja" },
    shortDescription: {
      en: "Unique handcrafted furniture collection combining steel, wood and glass elements.",
      hr: "Jedinstvena ručno rađena kolekcija namještaja koja spaja čelik, drvo i staklo.",
    },
    description: {
      en: "Unique handcrafted furniture collection combining steel, wood and glass elements. From minimalist stools and shelving units to designer tables and custom interior pieces, every product is made with precision metal craftsmanship and modern industrial aesthetics.",
      hr: "Jedinstvena ručno rađena kolekcija namještaja koja spaja čelik, drvo i staklo. Od minimalističkih stolaca i polica do dizajnerskih stolova i prilagođenih unutarnjih komada, svaki proizvod izrađen je preciznim metalnim zanatom i modernom industrijskom estetikom.",
    },
    category: "furniture-design",
    coverImage: namjestajCover,
    images: [
      namjestaj1,
      namjestaj2,
      namjestaj3,
      namjestaj4,
      namjestaj5,
      namjestaj6,
      namjestaj7,
      namjestaj8,
      namjestaj9,
      namjestaj10,
      namjestaj11,
    ],
  },
];
