import Header from "@/components/Header";
import Image from "next/image";

import samurai from "../../public/samurai.png";

import { textLang } from "../../public/locales/global";
import ProgramingLanguages from "@/components/ProgramingLanguages";

export default function Home() {
  return (
    <>
      <Header />
      <hr className="ml-20 mr-20 border-yellow-100 border-opacity-25" />
      <main className="ml-20 mr-20">
        <div className="inline-flex justify-center w-full" style={{height: '80vh', alignItems: 'center', gap: '450px'}}>
          <div className="content-end" style={{width: '500px'}}>
            <h1 className="text-8xl font-bold text-yellow-100 opacity-70">{textLang['ptBr'].hero_title}</h1>
            <p className="text-2xl ml-5 mt-5 text-yellow-100 opacity-70">{textLang['ptBr'].hero_subtitle}</p>
          </div>
          <Image
            src={samurai}
            alt="Samurai"
            width={350}
            height={350}
            className="opacity-70"
          />
        </div>

        <ProgramingLanguages />
      </main>
    </>
  );
}
