export default function sitemap() {
  const baseUrl = "https://www.shuntitaly.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/contatti`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/soluzioni/shunt-alta-corrente`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/soluzioni/shunt-custom`,
      lastModified: new Date()
    },
    {
      url: `${baseUrl}/soluzioni/busbar-integrate`,
      lastModified: new Date()
    }
  ];
}