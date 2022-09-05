export default async (context, locale) => {
  return await Promise.resolve({
    welcome: "Welkom",
    welcomeToTheBlog: "Welkom op de blog",
    nav: {
      home: "Thuis",
      blog: "De Blog",
    },
  });
};
