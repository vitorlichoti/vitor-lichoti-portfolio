import ImageLogo from "./ImageLogo";
import Navbar from "./Navbar";
import SetupMenu from "./SetupMenu";
import Image from "next/image";

import { textLang } from "../../public/locales/global";

import heroDarkBG from "../../public/herodarkbg.png";

export default function Header() {
  return (
    <header className="ml-20 mr-20">
      <div className="inline-flex justify-between w-full">
        <div className="px-6 py-4 content-end">
          <ImageLogo />
        </div>
        <div className="px-6 py-4 content-end">
          <Navbar />
        </div>
        <div className="px-6 py-4 content-end justify-center">
          <SetupMenu />
        </div>
      </div>
      
      <Image
        src={heroDarkBG}
        alt={textLang['ptBr'].hero_image_alt}
        style={{position: 'absolute', left: 0, top: 0, zIndex: -1}}
        layout="fill"
        objectFit="cover"
        className="opacity-80"
      />
    </header>
  );
}