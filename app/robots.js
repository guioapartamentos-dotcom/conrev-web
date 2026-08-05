export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://conrev.com.co/sitemap.xml",
    host: "https://conrev.com.co",
  };
}