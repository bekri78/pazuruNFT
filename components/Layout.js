/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Carousele from "./Carousel";
import Magicien from "../public/magicien.png";
import Mozaic from "../public/mozaic.png";
export default function Layout({ children, page, href }) {
  return (
    <>
      <div className="contain">
        <div className="f">
          <video
            loop
            muted
            autoPlay={true}
            src={require("../public/video.webm")}
            className="videoImg"
          />
        </div>
        <div className="ff">
          {" "}
          <video
            loop
            muted
            autoPlay={true}
            src={require("../public/rari.webm")}
            className="videoImg"
          />
        </div>
        <div className="fff">
          <video
            loop
            muted
            autoPlay={true}
            src={require("../public/Monsters.webm")}
            className="videoImg"
          />
        </div>
        <div className="fffff">
          <video
            loop
            muted
            autoPlay={true}
            src={require("../public/chaussure.webm")}
            className="videoImg"
          />
        </div>
        <div className="ffff">
          <video
            loop
            muted
            autoPlay={true}
            src={require("../public/read.webm")}
            className="videoImg"
          />
        </div>
        <div className="ffffff">
          <video
            loop
            muted
            autoPlay={true}
            src={require("../public/Meridiem.webm")}
            className="videoImg"
          />
        </div>
        <div className="fffffff">
          <video
            loop
            muted
            autoPlay={true}
            src={require("../public/peluche.webm")}
            className="videoImg"
          />
        </div>
      </div>

      <div className=" pt-5 text-center min-h-screen">
        <Head>
          <title>{page}</title>
        </Head>
        <header>
          <h1 className="mb-2"> crypto watch </h1>
          <div className=" inline-grid grid-cols-2 gap-x-10 p-4">
            <Link href="/">
              <a> Accueil</a>
            </Link>
            <Link href="/about">
              <a> a propos</a>
            </Link>
            <Link href="/crypto">
              <a> crypto</a>
            </Link>
          </div>
          <div></div>
        </header>
        <main>{children}</main>
        <footer>
          <h2> footer</h2>

          <p>
            Lorem ipsum Le lorem ipsum est, en imprimerie, une suite de mots
            sans signification utilisée à titre provisoire pour calibrer une
            mise en page, le texte définitif venant remplacer le faux-texte dès
            qu'il est prêt ou que la mise en page est achevée. Généralement, on
            utilise un texte en faux latin, le Lorem ipsum ou Lipsum.{" "}
          </p>
        </footer>

        <style jsx>
          {`
            p {
              color: red;
            }
          `}
        </style>
      </div>
    </>
  );
}
