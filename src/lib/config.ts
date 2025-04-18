const getEnvVariable = (key: string, fallback = ""): string => {
  const value = process.env[key];

  if (!value) {
    console.warn(`Missing environment variable: ${key}`);
    return fallback;
  }

  return value;
};

export const config = {
  siteName: getEnvVariable("NEXT_PUBLIC_SITE_NAME", "Faheem Hassan Portfolio"),
  siteUrl: getEnvVariable("NEXT_PUBLIC_SITE_URL", "https://faheemhassan.dev"),
  contactEmail: getEnvVariable(
    "NEXT_PUBLIC_CONTACT_EMAIL",
    "info@faheemhassan.dev"
  ),
};
