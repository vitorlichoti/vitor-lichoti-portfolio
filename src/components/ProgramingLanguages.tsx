'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { useEffect, useState } from "react";
import { languagesList } from '../common/constants';

export default function ProgrammingLanguages() {
  const mode = 'dark';

  const [waitSec, setWaitSec] = useState<string[]>([]);

  useEffect(() => {
    setWaitSec(languagesList);
  }, []);
                                         
  return (            
    <AliceCarousel    
      autoPlay
      autoPlayInterval={2000}
      infinite
      disableButtonsControls
      disableDotsControls
      responsive={
          {
            0: { items: 1 },
            1024: { items: 6 }
          }
      }
      items={waitSec?.map((language, index) => (
        <div key={index} style={{ height: '46px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
          <Image src={`/assets/${mode}/${language.toLowerCase().replace(' ', '-')}.png`} alt={language} width={36} height={36} />
          <div className='text-xl text-yellow-100 opacity-60'>{language}</div>
        </div>
      ))}
    />
  );
}
