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

      <body className="font-sans">
        {children}

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div>
      <Topbar />

      <Outlet />
    </div>
  );
}

function Topbar() {
  return (
    <div className="flex justify-between">
      <strong>
        <Link to="/">Hisham-Tankred Felske</Link>
      </strong>

      <nav>
        <ul className="flex">
          <li>
            <Link to="/sprecherarbeit">Sprecherarbeit</Link>
          </li>
          <li>
            <Link to="/coaching">Coaching</Link>
          </li>
          <li>
            <Link to="/sonstiges">Sonstiges</Link>
          </li>
          <li>
            <Link to="/biografie">Biografie</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
