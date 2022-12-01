import Image from 'next/image'
import Masthead from '@/components/masthead'
import Parchment from '@/components/parchment'

export default function Home() {
  return (
    <>
      <Masthead />
      <Parchment>
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mx-4 w-full max-w-[700px]">
              <h2 className="mb-3 text-4xl font-semibold md:mb-4">
                Занурся у Всесвіт Грецьких Богів
              </h2>
              <p className="mb-4 text-xl italic md:mb-0">
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
          <div className="flex flex-col-reverse items-center justify-between md:flex-row">
            <Image
              src="/man-and-kid.png"
              alt="Warriors In Cave"
              width={520}
              height={320}
            />
            <div className="w-full max-w-[700px] md:ml-8">
              <h2 className="mb-3 text-4xl font-semibold md:mb-4">Геракл</h2>
              <p className="mb-4 text-xl italic md:mb-0">
                Який є символом велетенської сили та незламності...
              </p>
            </div>
          </div>
        </div>
      </Parchment>
    </>
  )
}
