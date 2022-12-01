import Image from 'next/image'
import Masthead from '../components/masthead'
import Parchment from '../components/parchment'

export default function Home() {
  return (
    <>
      <Masthead />
      <Parchment>
        <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex justify-between items-center flex-col md:flex-row">
            <div className="max-w-[700px] w-full">
              <h2 className="text-4xl font-semibold mb-4 md:mb-10">
                LOREM IPSUM
              </h2>
              <p className="italic mb-4 md:mb-0">
                Aute ullamco ullamco sint laborum culpa ut ullamco Lorem magna
                occaecat anim do. Nulla adipisicing incididunt dolore mollit id
                dolore culpa commodo sit exercitation ea sit consectetur fugiat.
                Aliquip pariatur tempor ut ex veniam pariatur officia non ad
                laborum eiusmod laborum. Pariatur aute occaecat est sunt. Cillum
                labore commodo sunt amet.
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
              <h2 className="text-4xl font-semibold mb-4 md:mb-10">
                LOREM IPSUM
              </h2>
              <p className="italic mb-4 md:mb-0">
                Aute ullamco ullamco sint laborum culpa ut ullamco Lorem magna
                occaecat anim do. Nulla adipisicing incididunt dolore mollit id
                dolore culpa commodo sit exercitation ea sit consectetur fugiat.
                Aliquip pariatur tempor ut ex veniam pariatur officia non ad
                laborum eiusmod laborum. Pariatur aute occaecat est sunt. Cillum
                labore commodo sunt amet.
              </p>
            </div>
          </div>
        </div>
      </Parchment>
    </>
  )
}
