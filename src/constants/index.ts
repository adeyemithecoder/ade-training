export const headerLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Create Event",
    route: "/events/create",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
];
export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  url: "",
  limit: 40,
};
export const courses = [
  {
    img: "/img/html.png",
    route: "/courses/html",
    text: "html",
    style: { "--v": 1 },
  },
  {
    img: "/img/css.jpg",
    route: "/courses/css",
    text: "css",
    style: { "--v": 2 },
  },
  {
    img: "/img/tailwind.png",
    route: "/courses/tailwind",
    text: "tailwind",
    style: { "--v": 3 },
  },
  {
    img: "/img/javascript.jpg",
    route: "/courses/javascript",
    text: "javascript",
    style: { "--v": 4 },
  },
  {
    img: "/img/typescript.png",
    route: "/courses/typescript",
    text: "typescript",
    style: { "--v": 13 },
  },
  {
    img: "/img/react.jpg",
    route: "/courses/react",
    text: "react",
    style: { "--v": 5 },
  },
  {
    img: "/img/reactnative.jpg",
    route: "/courses/reactnative",
    text: "react-native",
    style: { "--v": 10 },
  },
  {
    img: "/img/next.png",
    route: "/courses/next",
    text: "next.js",
    style: { "--v": 6 },
  },
  {
    img: "/img/node.jpg",
    route: "/courses/node",
    text: "node",
    style: { "--v": 7 },
  },
  {
    img: "/img/express.jpg",
    route: "/courses/express",
    text: "express",
    style: { "--v": 8 },
  },
  {
    img: "/img/prisma.png",
    route: "/courses/prisma",
    text: "prisma",
    style: { "--v": 9 },
  },
  {
    img: "/img/mongodb.png",
    route: "/courses/mongodb",
    text: "mongodb",
    style: { "--v": 11 },
  },
  {
    img: "/img/postgress.png",
    route: "/courses/postgress",
    text: "postgress",
    style: { "--v": 12 },
  },
];
