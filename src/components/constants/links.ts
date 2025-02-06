const INTERNAL_ROUTES: Record<string, string> = {
  HOME: "/",
  CONTACT: "/contact",
  ABOUT: "/about",
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
];

const LINKS = { INTERNAL_ROUTES, MENU };

export default LINKS;
