export default async (context, locale) => {
  return await Promise.resolve({
    welcome: "Welkom",
    home: "Thuis",
    blog: "De Blog",
  });
};
