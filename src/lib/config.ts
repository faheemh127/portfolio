const getEnvVariable = (key: string, fallback = ""): string => {
  const value = process.env[key];

  if (!value) {
    console.warn(`Missing environment variable: ${key}`);
    return fallback;
  }

  return value;
};

export const config = {
  siteName: getEnvVariable("NEXT_PUBLIC_SITE_NAME", "Default Site"),
  siteUrl: getEnvVariable("NEXT_PUBLIC_SITE_URL", "https://default.com"),
  contactEmail: getEnvVariable(
    "NEXT_PUBLIC_CONTACT_EMAIL",
    "contact@default.com"
  ),
};
