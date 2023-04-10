import Head from "next/head";
import { Inter } from "next/font/google";

import {NavBar,BannerCard,Banner_Habana,Banner_DownloadApp,Banner_Jobs,Banner_Contacts,Footer} from "@/components/organisms";
import {IconBox, IconCar, IconHotel,IconMoney, IconPassport, IconPhone, IconPlane, IconShop} from "@/resources"




const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Cubamax</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      <NavBar/>
      </div>
      <div >
        <BannerCard cardsArray={cardsArray} />
      </div>
      <div >
        <Banner_Habana title="¿Va a visitar a Cuba pronto?" description=" Conozca que debe tener en cuenta para su visita." />
      </div>
      <div >
        <Banner_DownloadApp title={"Visita la tienda para que descargues nuestra APP"} 
        description={""}
         linkAppStore={"https://www.apple.com/es/app-store/"} linkGooglePlay={"https://play.google.com/store/apps/"}  />
      </div>
      <div>
        <Banner_Jobs />
      </div>
      <div>
        <Banner_Contacts />
      </div>
      <div>
        <Footer />
      </div>
     
    </>
  );
}

const cardsArray = [
  {
    title: "Remesas",
    description: "Cubamax",
    icon: IconMoney,
    bgColor: "white",
    iconColor: "#349898",
  },
  {
    title: "Tienda",
    description: "Cubamax",
    icon: IconShop,
    bgColor: "white",
    iconColor: "#349898",
  },
  {
    title: "Recargas",
    description: "Cubamax",
    icon: IconPhone,
    bgColor: "white",
    iconColor: "#349898",
  },
  {
    title: "Viajes",
    description: "Cubamax",
    icon: IconPlane,
    bgColor: "white",
    iconColor: "#349898",
  },
  {
    title: "Consulado",
    description: "Cubamax",
    icon: IconPassport,
    bgColor: "white",
    iconColor: "#349898",
  },
  {
    title: "Paquete",
    description: "Cubamax",
    icon: IconBox,
    bgColor: "white",
    iconColor: "#349898",
  },
  {
    title: "Hotel",
    description: "Cubamax",
    icon: IconHotel,
    bgColor: "white",
    iconColor: "#349898",
  },
  {
    title: "Auto",
    description: "Cubamax",
    icon: IconCar,
    bgColor: "white",
    iconColor: "#349898",
  },
];
