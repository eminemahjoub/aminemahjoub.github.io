import { Desktop } from "@/components/Desktop";
import SEO from "@/components/SEO";
import { personalInfo } from "@/data/portfolio";

const Index = () => {
  const siteUrl = "https://www.aminemahjoub.tech";
  const profileImageUrl = "https://avatars.githubusercontent.com/u/114463113?v=4";
  const description =
    "Discover Amine Mahjoub, an AI engineer and researcher from Tunisia specialising in artificial intelligence, blockchain, IoT, and smart city innovation. Explore projects, experience, and research contributions.";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}#person`,
    name: personalInfo.name,
    alternateName: ["Emine Mahjoub", "Amine M. Mahjoub"],
    jobTitle: personalInfo.title,
    url: siteUrl,
    image: profileImageUrl,
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ksibet El Mediouni",
      addressRegion: "Monastir",
      addressCountry: "TN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: personalInfo.university,
      sameAs: "https://en.wikipedia.org/wiki/University_of_Gafsa",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Blockchain",
      "Internet of Things",
      "Computer Vision",
      "Natural Language Processing",
      "Full Stack Development",
    ],
    sameAs: [
      personalInfo.social.linkedin,
      personalInfo.social.github,
      personalInfo.social.mastodon,
      personalInfo.social.launchpad,
      personalInfo.social.credly,
      "https://www.youtube.com/@aminedev",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Amine Mahjoub Portfolio",
    url: siteUrl,
    publisher: {
      "@type": "Person",
      name: personalInfo.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Amine Mahjoub | AI Engineer & Researcher",
    url: siteUrl,
    description,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      url: siteUrl,
      name: "Amine Mahjoub Portfolio",
    },
    mainEntity: {
      "@id": `${siteUrl}#person`,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
  };

  return (
    <>
      <SEO
        title="Amine Mahjoub - AI Engineer & Researcher | Official Portfolio"
        description={description}
        canonical={siteUrl}
        keywords={[
          "Amine Mahjoub",
          "AI engineer Tunisia",
          "Amine Mahjoub portfolio",
          "AI researcher Amine Mahjoub",
          "Blockchain developer Amine Mahjoub",
          "IoT engineer Tunisia",
        ]}
        schema={[personSchema, webSiteSchema, webPageSchema, breadcrumbSchema]}
      />
      <div className="w-screen h-screen fixed inset-0 overflow-hidden">
        <Desktop />
      </div>
    </>
  );
};

export default Index;
