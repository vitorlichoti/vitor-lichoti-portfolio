import golang from '../../public/golang.svg'
import kotlin from '../../public/kotlin.svg'
import next from '../../public/next.svg'
import react from '../../public/react.svg'
import python from '../../public/python.svg'
import reactNative from '../../public/react-native.svg'
import typescript from '../../public/typescript.svg'
import kotlinMultiplatform from '../../public/kotlin-multiplatform.svg'

import Image from 'next/image'

export default function ProgramingLanguages() {
  const languages = ['Golang', 'Kotlin', 'Next.js', 'React.js', 'Python', 'React Native', 'TypeScript', 'Kotlin Multiplatform']
  return (
    <>
      {languages.map((language, index) => (
        <div key={index} className=''>
          <Image src={language} alt={language} width={100} height={100} />
          <p className='text-yellow-100 opacity-70'>{language}</p>
        </div>
      ))}
    </>
  )
}