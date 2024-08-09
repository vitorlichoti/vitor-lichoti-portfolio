import Header from "@/components/Header";
import Image from "next/image";

import samurai from "../../public/samurai.png";

import { textLang } from "../../public/locales/global";
import ProgramingLanguages from "@/components/ProgramingLanguages";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  
  return (
    <div className="">
      <Header />
      <hr className="ml-20 mr-20 border-yellow-100 border-opacity-25" />
      <main className="ml-20 mr-20">
        <div className="inline-flex justify-center" style={{height: '80vh', alignItems: 'center', gap: '30%', width: '100%'}}>
          <div className="content-end" style={{maxWidth: '500px'}}>
            <h1 className="text-7xl font-bold text-yellow-100 opacity-70">{textLang['ptBr'].hero_title}</h1>
            <p className="text-xl ml-4 mt-3 text-yellow-100 opacity-70">{textLang['ptBr'].hero_subtitle}</p>
          </div>
          <Image
            src={samurai}
            alt="Samurai"
            width={350}
            height={350}
            className="opacity-70"
          />
        </div>

      </main>
      <section className="ml-20 mr-20 mt-10">
        <ProgramingLanguages />
      </section>
      <section className="ml-20 mr-20 mt-40"> 
        <div className="inline-flex justify-center w-full">
          <div className="content-end" style={{width: '500px'}}>
            <h1 id="projects" className="text-4xl text-center font-bold text-yellow-100 opacity-70">{textLang['ptBr'].projects_section_title}</h1>
          </div>
        </div>
        <Projects />
      </section>

      <Footer />
    </div>
  );
}
