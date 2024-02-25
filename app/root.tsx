import "./index.css";
import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { clsx } from "clsx";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />

        <link rel="icon" href="/favicon.svg" />
        <Links />
      </head>

      <body className="font-sans bg-black text-white min-h-screen">
        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="max-w-[940px] mx-auto flex flex-col min-h-screen">
      <Topbar />

      <div className="grow">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

const pages = [
  { title: "Sprecherarbeit", page: "sprecherarbeit/" },
  { title: "Coaching", page: "coaching/" },
  { title: "Sonstiges", page: "sonstige-taetigkeiten/" },
  { title: "Biografie", page: "biografie/" },
  { title: "Kontakt", page: "kontakt/" },
];

function Topbar() {
  return (
    <div className="flex justify-between py-8 items-center">
      <strong className="text-3xl">
        <NavLink
          to="/"
          title="Zum Start"
          className={({ isActive }) =>
            clsx(
              "hover:text-red-700 transition-colors duration-75",
              isActive && "text-red-700"
            )
          }
        >
          Hicham-Tankred Felske
        </NavLink>
      </strong>

      <nav>
        <ul className="flex gap-8 text-sm pt-1">
          {pages.map((page) => (
            <li key={page.page}>
              <NavLink
                to={`/${page.page}`}
                className={({ isActive }) =>
                  clsx(
                    "hover:text-red-700 uppercase transition-colors duration-75",
                    isActive && "text-red-700"
                  )
                }
              >
                {page.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <nav className="py-2 flex justify-center uppercase">
      <div>
        <small className="text-sm">&copy; tankred-felske.de, 2024</small>{" "}
        &middot;{" "}
        <NavLink
          className={({ isActive }) =>
            clsx(
              "text-sm hover:text-red-700 transition-colors duration-75",
              isActive && "text-red-700"
            )
          }
          to="/impressum"
        >
          Datenschutzerklärung & Impressum
        </NavLink>
      </div>
    </nav>
  );
}
