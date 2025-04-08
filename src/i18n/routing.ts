import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en", "es"],
  defaultLocale: "pt",
  pathnames: {
    "/": {
      pt: "/",
      en: "/",
      es: "/",
    },
    "/escunas": {
      pt: "/escunas",
      en: "/escunas",
      es: "/escunas",
    },
    "/jeep": {
      pt: "/jeep",
      en: "/jeep",
      es: "/jeep",
    },
    "/privativos": {
      pt: "/privativos",
      en: "/privativos",
      es: "/privativos",
    },
  },
});

export type Locale = (typeof routing)["locales"][number];
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
