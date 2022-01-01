/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Link from "next/link";
import Particule from "./Particule";
import Carousel from "./Carousel";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { margin } from "@mui/system";
import Stepers from "./Stepers";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  borderRadius: 10,
  margin: 10,
  width: "auto",
}));

export default function Layout({ children, page }) {
  return (
    <>
      <div className="puzzle3d">
        <Particule />

        <div className="conteneurBtn">
          <Typography
            variant="h2"
            component="h4"
            color="#00000"
            width={"70%"}
            paddingBottom={5}
          >
            Decouvrez une aventure unique
          </Typography>
          <Typography
            variant="h4"
            component="h4"
            color="#00000"
            width={"70%"}
            paddingBottom={5}
          >
            La première quète archéologique numerique qui vas au dela du temps
          </Typography>
          <Button variant="contained" endIcon={<KeyboardArrowRightIcon />}>
            Commencer
          </Button>
        </div>
      </div>
      <Typography
        variant="h2"
        component="h2"
        color="#00000"
        width={"70%"}
        paddingBottom={5}
        textAlign={"center"}
        margin={"auto"}
      >
        Reconstituer les pièces
      </Typography>
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
      <div
        style={{
          height: "100%",
          width: "100%",
          paddingTop: "5%",
          cursor: "pointer",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000"
            fillOpacity="1"
            d="M0,128L30,133.3C60,139,120,149,180,160C240,171,300,181,360,202.7C420,224,480,256,540,245.3C600,235,660,181,720,176C780,171,840,213,900,218.7C960,224,1020,192,1080,192C1140,192,1200,224,1260,213.3C1320,203,1380,149,1410,122.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <Particule />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000"
            fillOpacity="1"
            d="M0,96L48,85.3C96,75,192,53,288,58.7C384,64,480,96,576,96C672,96,768,64,864,58.7C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div>
          <Typography
            variant="h2"
            component="h4"
            color="#00000"
            width={"70%"}
            paddingBottom={5}
            textAlign={"center"}
            margin={"auto"}
          >
            Créez et vendez vos NFT
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            width: "100%",
            margin: "auto",
          }}
        >
          <Stepers />
          <Carousel />
        </div>
      </div>
    </>
  );
}
