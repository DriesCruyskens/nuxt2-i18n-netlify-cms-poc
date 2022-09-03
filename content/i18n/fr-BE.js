export default async (context, locale) => {
  return await Promise.resolve({
    welcome: "Bienvenue",
    home: "Acceuil",
    blog: "Le Blog"
  });
};
