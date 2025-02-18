const INTERNAL_ROUTES: Record<string, string> = {
  HOME: "/",
  CONTACT: "/contact",
  ABOUT: "/about",
  USERS: "/users",
  POSTS: "/posts",
};

const MENU = [
  {
    label: "Home",
    href: INTERNAL_ROUTES.HOME,
  },
  {
    label: "Contact",
    href: INTERNAL_ROUTES.CONTACT,
  },
  {
    label: "About",
    href: INTERNAL_ROUTES.ABOUT,
  },
  {
    label: "Posts",
    href: INTERNAL_ROUTES.POSTS,
  },
  {
    label: "Users",
    href: INTERNAL_ROUTES.USERS,
  },
];

const LINKS = { INTERNAL_ROUTES, MENU };

export default LINKS;
