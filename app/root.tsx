import "./index.css";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" dir="ltr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />

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
  "Sprecherarbeit",
  "Coaching",
  "Sonstiges",
  "Biografie",
  "Kontakt",
];

function Topbar() {
  return (
    <div className="flex justify-between py-8 items-center">
      <strong className="text-3xl">
        <Link to="/" title="Zurück zum Start">
          Hisham-Tankred Felske
        </Link>
      </strong>

      <nav>
        <ul className="flex gap-8 text-sm pt-1">
          {pages.map((page) => (
            <li key={page}>
              <Link
                to={`/${page.toLowerCase()}`}
                className="hover:text-red-600 uppercase transition-colors duration-75"
              >
                {page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function Footer() {
  return (
    <nav className="py-2 flex justify-center">
      <div>
        <small className="text-sm">&copy; tankred-felske.de, 2024</small>{" "}
        &middot;{" "}
        <Link
          className="text-sm hover:text-red-600 transition-colors duration-75"
          to="/impressum"
        >
          Datenschutzerklärung & Impressum
        </Link>
      </div>
    </nav>
  );
}
