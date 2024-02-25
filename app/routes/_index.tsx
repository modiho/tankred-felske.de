import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Hicham-Tankred Felske" }];
};

export default function Index() {
  return <div> Hallo </div>;
}
