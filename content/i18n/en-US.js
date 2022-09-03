export default async (context, locale) => {
  return await Promise.resolve({
    welcome: "Welcome",
    home: "Home",
    blog: "The Blog",
  });
};
