import taniPic from "./Tani2018.jpg";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "Hicham-Tankred Felske" }];
};

console.log(taniPic);

export default function Index() {
  return (
    <div
      style={{ backgroundImage: `url('${taniPic}')` }}
      className="w-full h-[719px] bg-no-repeat bg-center relative"
    >
      <div className="absolute left-[310px] top-0 h-[376px] w-[320px] border border-white"></div>
    </div>
  );
}
