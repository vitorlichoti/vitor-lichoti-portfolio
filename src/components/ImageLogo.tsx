import Image from "next/image";

import darkLogo from "../../public/dark-logo.png";
import lightLogo from "../../public/light-logo.png";

import { textLang } from "../../public/locales/global";

export default function ImageLogo() {
  return (
    <Image
      src={lightLogo}
      alt={textLang['ptBr'].logo_image_alt}
      width={50}
      height={50}
    />
  );
}