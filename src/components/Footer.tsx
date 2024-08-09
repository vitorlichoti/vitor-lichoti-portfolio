import Image from 'next/image';
import github from '../../public/assets/dark/github.png';
import whatsapp from '../../public/assets/dark/whatsapp.png';
import gmail from '../../public/assets/dark/gmail.png';
import linkedin from '../../public/assets/dark/linkedin.png';

export default function Footer() {
  return (
    <footer
      className="ml-20 mr-20"
      style={{flexDirection: 'column', width: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '60px'}}
    >
      <hr className="border-yellow-100 border-opacity-25" style={{width: '90%'}} />
      <div style={{display: 'flex', height: '40px', alignItems: 'center', padding: '40px', gap: 20}}>
        <div className="inline-flex" style={{gap: 10}}>
          <Image src={github} alt="Github" width={30} height={30} />
          <Image src={whatsapp} alt="Whatsapp" width={30} height={30} />
          <Image src={linkedin} alt="Linkedin" width={30} height={30} />
          <Image src={gmail} alt="Gmail" width={30} height={30} />
        </div>
        <p className="text-yellow-50 opacity-60" style={{fontSize: '14px'}}>&copy; 2022 Vitor Lichoti</p>
      </div>
    </footer>
  );
}