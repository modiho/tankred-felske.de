import taniPic from "./Tani2018.jpg";
import synchronPic from "./synchron.jpg";
import coachingPic from "./coaching.jpg";
import moderation from "./moderation.jpg";
import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";

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
      <div
        id="faceRect"
        className="absolute left-[310px] top-0 h-[376px] w-[320px] border border-white"
      ></div>

      <NavLink
        to={"/sprecherarbeit"}
        className="block bg-cover bg-no-repeat w-[305px] h-[355px] border border-white bg-[-55px_0] p-2 absolute top-[150px] left-[6px] hover:text-red-800 hover:border-red-800"
        style={{ backgroundImage: `url('${synchronPic}')` }}
      >
        <div className="text-center">
          <strong className="font-bold text-2xl uppercase italic">
            Sprecherarbeit
          </strong>
        </div>

        <ul className="list-['\00B7'] mt-36 ml-32 text-xl indent-2">
          <li>Synchron</li>
          <li>Hörspiel</li>
          <li>Voice-Over</li>
          <li>Werbung</li>
          <li>etc.</li>
        </ul>
      </NavLink>
    </div>
  );
}
