export default async (context, locale) => {
  return await Promise.resolve({
    welcome: "Welcome",
    welcomeToTheBlog: "Welcome to the blog",
    nav: {
      home: "Home",
      blog: "The Blog",
    },
  });
};
