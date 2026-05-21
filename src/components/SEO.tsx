import { Helmet } from "react-helmet-async";
import { useLang } from "@/context/LangContext";

interface SEOProps {
  title: { en: string; hr: string };
  description: { en: string; hr: string };
  path: string;
}

const SITE_URL = "https://precision-works-hub.lovable.app";

const SEO = ({ title, description, path }: SEOProps) => {
  const { lang } = useLang();
  const t = title[lang];
  const d = description[lang];
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{t}</title>
      <meta name="description" content={d} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={t} />
      <meta property="og:description" content={d} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={t} />
      <meta name="twitter:description" content={d} />
    </Helmet>
  );
};

export default SEO;
