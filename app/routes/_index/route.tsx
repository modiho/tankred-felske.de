import taniPic from "./Tani2018.jpg";
import synchronPic from "./synchron.jpg";
import coachingPic from "./coaching-edit.jpg";
import moderationPic from "./moderation-edit.jpg";
import type { MetaFunction } from "@remix-run/node";
import { NavLink } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Hicham-Tankred Felske" }];
};

export default function Index() {
  return (
    <div
      style={{ backgroundImage: `url('${taniPic}')` }}
      className="w-full h-[719px] bg-no-repeat bg-center relative mt-4"
    >
      <NavLink
        id="faceRect"
        to="/biografie"
        className="absolute border border-white left-[310px] top-0 h-[376px] w-[320px] text-transparent hover:text-red-800 hover:border-red-800 focus:text-red-800 focus:border-red-800 transition-colors hover:z-10  [&>div]:hover:bg-[rgba(0,0,0,.2)] [&>div]:focus:bg-[rgba(0,0,0,.2)] text-center focus:outline-none"
      >
        <div className="w-full h-full p-2 transition-colors">
          <strong className="font-bold text-2xl uppercase italic">
            Biografie
          </strong>
        </div>
      </NavLink>

      <NavLink
        to={"/sprecherarbeit"}
        style={{ backgroundImage: `url('${synchronPic}')` }}
        className="w-[295px] border border-white h-[355px] bg-[-55px_0]  absolute top-[160px] left-[16px] block bg-cover bg-no-repeat focus:text-red-800 focus:border-red-800 hover:text-red-800 hover:border-red-800 transition-colors [&>div]:hover:bg-[rgba(0,0,0,.2)] [&>div]:focus:bg-[rgba(0,0,0,.2)] focus:outline-none"
      >
        <div className="w-full h-full p-2 transition-colors">
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
        to={"/coaching"}
        className="block border border-white bg-cover bg-no-repeat w-[285px] h-[325px] bg-[-100px_0] absolute top-[375px] left-[328px] focus:text-red-800 focus:border-red-800 hover:text-red-800 hover:border-red-800 transition-colors [&>div]:hover:bg-[rgba(0,0,0,.4)] [&>div]:focus:bg-[rgba(0,0,0,.4)] focus:outline-none"
        style={{ backgroundImage: `url('${coachingPic}')` }}
      >
        <div className="h-full w-full p-2 transition-colors">
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

      <NavLink
        to={"/sonstige-taetigkeiten"}
        className="block bg-cover bg-no-repeat border-white border text-black w-[280px] h-[340px] bg-[-200px_0] absolute top-[185px] focus:text-red-800 focus:border-red-800 hover:text-red-800 hover:border-red-800 left-[629px] transition-colors [&>div]:hover:bg-[rgba(0,0,0,.2)] [&>div]:focus:bg-[rgba(0,0,0,.2)] focus:outline-none"
        style={{ backgroundImage: `url('${moderationPic}')` }}
      >
        <div className="h-full w-full p-2 transition-colors">
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
    </div>
  );
}
