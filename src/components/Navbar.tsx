import Link from "next/link";

import { textLang } from "../../public/locales/global";

export default function Navbar() {
  return (
    <nav className="inline-flex space-x-4">
      <Link href="#projects" className="text-md font-semibold text-yellow-50 opacity-60">{textLang['ptBr'].nav_projects}</Link>
      <Link href="#about" className="text-md font-semibold text-yellow-50 opacity-60">{textLang['ptBr'].nav_text_about}</Link>
      <Link href="#contact" className="text-md font-semibold text-yellow-50 opacity-60">{textLang['ptBr'].nav_text_contact}</Link>
    </nav>
  );
}