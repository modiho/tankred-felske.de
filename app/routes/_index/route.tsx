import taniPic from "./Tani2018.jpg";
import synchronPic from "./synchron.jpg";
import coachingPic from "./coaching-edit.jpg";
import moderationPic from "./moderation-edit.jpg";
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
        style={{ backgroundImage: `url('${synchronPic}')` }}
        className="w-[295px] h-[355px] bg-[-55px_0]  absolute top-[160px] left-[16px] block bg-cover bg-no-repeat "
      >
        <div className="border border-white p-2 hover:text-red-800 hover:border-red-800 w-full h-full hover:bg-[rgba(0,0,0,.2)] transition-colors">
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
        </div>
      </NavLink>

      <NavLink
        to={"/sonstige-taetigkeiten"}
        className="block bg-cover bg-no-repeat w-[280px] h-[340px] bg-[-200px_0] absolute top-[185px] left-[629px]"
        style={{ backgroundImage: `url('${moderationPic}')` }}
      >
        <div className="p-2 border border-white  hover:text-red-800 hover:border-red-800 text-black h-full w-full hover:bg-[rgba(0,0,0,.3)] transition-colors">
          <div className="text-center">
            <strong className="font-bold text-2xl uppercase italic">
              Sonstiges
            </strong>
          </div>

          <ul className="list-['\00B7'] mt-32 ml-36 text-xl indent-2">
            <li>Musik</li>
            <li>Moderation</li>
            <li>Theater</li>
            <li>Schauspiel</li>
            <li>etc.</li>
          </ul>
        </div>
      </NavLink>

      <NavLink
        to={"/coaching"}
        className="block bg-cover bg-no-repeat w-[285px] h-[325px] bg-[-100px_0] absolute top-[375px] left-[328px]"
        style={{ backgroundImage: `url('${coachingPic}')` }}
      >
        <div className="p-2 border border-white  hover:text-red-800 hover:border-red-800 h-full w-full hover:bg-[rgba(0,0,0,.4)] transition-colors">
          <div className="text-center">
            <strong className="font-bold text-2xl uppercase italic">
              Coaching
            </strong>
          </div>

          <ul className="list-['\00B7'] mt-44 ml-16 text-xl indent-2">
            <li>Monologarbeit</li>
            <li>Schauspielunterricht</li>
            <li>Bühnenpräsenz</li>
          </ul>
        </div>
      </NavLink>
    </div>
  );
}
