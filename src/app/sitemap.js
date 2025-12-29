export default async function sitemap() {
  // Corrected: Removed trailing slash from the base URL
  const baseUrl = "https://growthfairness.com";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/adhd`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/anxiety`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/appointment`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/appointments`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/assessment-tools`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/bipolar`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/bipolar-disorders`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/depression`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/depressive-disorders`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/evaluation`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/forms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insurances`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insurances-cost`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/medication`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/medication-management`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/mental-health-support-that-changes-lives`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ocd`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ptsd`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/telepsychiatry`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/therapy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ways-to-overcome-anxiety`,
      lastModified: new Date(),
    },

    // BLOG ARTICLES
    {
      url: `${baseUrl}/ocd-explained-when-thoughts-feel-loud-and-uncontrollable`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/living-with-anxiety-when-the-mind-refuses-to-rest`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/depression-is-not-laziness-understanding-the-invisible-weight`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/schizophrenia-beyond-the-myths-understanding-reality-perception`,
      lastModified: new Date(),
    },
  ];
}