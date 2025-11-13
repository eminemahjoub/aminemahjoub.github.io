import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { personalInfo, projects, experience, research } from "@/data/portfolio";

const siteUrl = "https://www.aminemahjoub.tech";
const profileImageUrl = "https://avatars.githubusercontent.com/u/114463113?v=4";

const faqItems = [
  {
    question: "Who is Amine Mahjoub?",
    answer:
      "Amine Mahjoub is a Tunisian AI engineer, blockchain innovator, and researcher focused on intelligent systems, smart cities, and accessible technology.",
  },
  {
    question: "What projects has Amine Mahjoub delivered?",
    answer:
      "Highlighted projects include Predicare for predictive healthcare, Plastoken for blockchain-supported recycling, and an AI-powered sign language recognition suite.",
  },
  {
    question: "Where is Amine Mahjoub based?",
    answer:
      "Amine is based in Ksibet El Mediouni, Monastir, Tunisia, and collaborates with international teams remotely.",
  },
  {
    question: "How can I work with Amine Mahjoub?",
    answer:
      "You can schedule a consultation or discuss collaboration opportunities by emailing eminmahjoub@gmail.com or connecting on LinkedIn.",
  },
];

const About = () => {
  const description =
    "Learn more about Amine Mahjoub, AI engineer and researcher from Tunisia. Explore his biography, mission, featured projects, research interests, and answers to common questions.";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
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
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${siteUrl}/about`,
      },
    ],
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Amine Mahjoub",
    url: `${siteUrl}/about`,
    description,
    inLanguage: "en",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: profileImageUrl,
    },
    mainEntity: {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
      name: personalInfo.name,
      jobTitle: personalInfo.title,
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="About Amine Mahjoub | AI Engineer & Blockchain Innovator"
        description={description}
        canonical={`${siteUrl}/about`}
        keywords={[
          "About Amine Mahjoub",
          "Who is Amine Mahjoub",
          "Amine Mahjoub biography",
          "AI engineer Tunisia",
        ]}
        schema={[aboutPageSchema, faqSchema, breadcrumbSchema]}
      />

      <header className="bg-gradient-to-br from-primary/10 via-background to-background py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <Link to="/" className="text-sm text-primary hover:underline">
              ← Back to home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient">
              About Amine Mahjoub
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.education} – {personalInfo.university}</span>
              <span>•</span>
              <span>Available for international collaborations</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-20">
        <section>
          <h2 className="text-3xl font-semibold mb-6">Mission & Vision</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p>
              I am Amine Mahjoub, a Tunisian engineer passionate about designing intelligent systems that
              deliver measurable impact. My journey spans AI-driven predictive healthcare, blockchain-enabled
              circular economy initiatives, and inclusive technologies that prioritise accessibility.
            </p>
            <p>
              Through research, entrepreneurship, and community leadership, I help organisations transform ideas
              into secure, scalable solutions. I thrive in cross-functional teams where data science, cloud
              infrastructure, and human-centred design intersect.
            </p>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Core Focus Areas</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>AI/ML pipelines for healthcare, smart cities, and financial forecasting</li>
              <li>Blockchain architectures that secure supply chains and recycling ecosystems</li>
              <li>Internet of Things platforms that connect sensors, edge devices, and cloud analytics</li>
              <li>Inclusive interfaces including sign language recognition and voice-led experiences</li>
              <li>Technical leadership in communities, hackathons, and incubation programmes</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-6">Notable Achievements</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>Best Final Year Project at the University of Gafsa for AI and IoT innovation</li>
              <li>OpenGovDataHack incubation support from the World Bank</li>
              <li>R&D internships across France and Tunisia in conversational AI and cybersecurity</li>
              <li>Community leadership roles within Tunisian IT networks and open-source initiatives</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <article key={project.id} className="p-6 border border-border rounded-xl bg-muted/10 hover:bg-muted/20 transition-colors">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.longDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.slice(0, 4).map((tag) => (
                    <span key={tag} className="text-xs uppercase tracking-wide px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Experience Snapshot</h2>
          <div className="space-y-6">
            {experience.slice(0, 4).map((role) => (
              <article key={role.id} className="p-6 border border-border rounded-xl bg-muted/10">
                <h3 className="text-xl font-semibold">{role.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {role.organization} • {role.period} • {role.location}
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  {role.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Research Interests</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {research.map((item) => (
              <article key={item.id} className="p-6 border border-border rounded-xl bg-muted/10">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mt-3">
                  {item.status} • {item.year}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="group border border-border rounded-xl bg-muted/10 p-6">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-foreground">
                  {item.question}
                  <span className="ml-4 text-primary group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <p className="mt-4 text-sm text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="border border-border rounded-2xl p-10 bg-gradient-to-br from-primary/5 to-transparent">
          <h2 className="text-3xl font-semibold mb-4">Collaborate with Amine Mahjoub</h2>
          <p className="text-muted-foreground mb-6">
            Ready to transform your AI, blockchain, or IoT initiative into a production-grade solution?
            Let’s design research-backed, secure, and human-centred systems together.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-5 py-3 rounded-full bg-primary text-primary-foreground font-medium"
            >
              Email {personalInfo.name}
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;

