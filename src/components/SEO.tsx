import { Helmet } from "react-helmet-async";

type JsonLd = Record<string, unknown>;

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  schema?: JsonLd | JsonLd[];
  twitterCard?: "summary" | "summary_large_image";
  author?: string;
}

const SITE_NAME = "Amine Mahjoub Portfolio";
const DEFAULT_URL = "https://www.aminemahjoub.tech";
const DEFAULT_IMAGE = "https://avatars.githubusercontent.com/u/114463113?v=4";
const DEFAULT_AUTHOR = "Amine Mahjoub";

export const SEO = ({
  title,
  description,
  canonical = DEFAULT_URL,
  keywords,
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  schema,
  twitterCard = "summary_large_image",
  author = DEFAULT_AUTHOR,
}: SeoProps) => {
  const jsonLdBlocks = Array.isArray(schema) ? schema : schema ? [schema] : [];

  return (
    <Helmet prioritizeSeoTags>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author} />
      {keywords?.length ? <meta name="keywords" content={keywords.join(", ")} /> : null}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@eminemahjoub" />
      <meta name="twitter:creator" content="@eminemahjoub" />

      {/* Structured Data */}
      {jsonLdBlocks.map((block, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;

