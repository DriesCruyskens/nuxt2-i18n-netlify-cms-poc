export default async (context, locale) => {
  return await Promise.resolve({
    welcome: "Bienvenue",
    welcomeToTheBlog: "Bienvenue chez le blog",
    nav: {
      home: "Acceuil",
      blog: "Le Blog",
    },
  });
};
