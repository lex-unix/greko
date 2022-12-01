import Image from 'next/image'
import Masthead from '@/components/masthead'
import Parchment from '@/components/parchment'

export default function Home() {
  return (
    <>
      <Masthead />
      <Parchment>
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="max-w-[700px] w-full mx-4">
              <h2 className="text-4xl font-sans font-semibold mb-3 md:mb-4">
                Занурся у Всесвіт Грецьких Богів
              </h2>
              <p className="italic text-xl mb-4 md:mb-0">
                Походження світу і богів. Народження Зевса. Зевс скидає Крона.
                Боротьба богів-олімпійців з титанами Боротьба Зевса з Тіфоном.
                Олімп Посейдон і Божества моря ...
              </p>
            </div>
            <Image
              src="/olympian-gods.png"
              alt="Olympian Gods"
              width={520}
              height={320}
            />
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <Image
              src="/man-and-kid.png"
              alt="Warriors In Cave"
              width={520}
              height={320}
            />
            <div className="md:ml-8 max-w-[700px] w-full">
              <h2 className="text-4xl font-semibold mb-3 md:mb-4">Геракл</h2>
              <p className="italic text-xl mb-4 md:mb-0">
                Який є символом велетенської сили та незламності...
              </p>
            </div>
          </div>
        </div>
      </Parchment>
    </>
  )
}
