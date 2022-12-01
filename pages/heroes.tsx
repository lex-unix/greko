import HeroCard from '@/components/hero-card'
import Parchment from '@/components/parchment'

export default function Heroes() {
  return (
    <Parchment>
      <div className="pt-16">
        <h1 className="text-3xl md:text-5xl uppercase md:text-center mb-4 font-bold">
          Відомі персонажі грецької міфології
        </h1>
        <h3 className="text-xl md:text-2xl md:text-center">
          Дізнайся хто вбив Медусу Горгону або хто врятував світ від
          гіганьтського бика Балрога
        </h3>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          <HeroCard
            name="Паровий Мінотавр"
            description="Some description of the hero goes here"
            src="big-bison.png"
            href="minotavr"
          />
          <HeroCard
            name="Тесей з головою Медузи"
            description="Some description of the hero goes here"
            src="lost-head.png"
            href="tesey"
          />
          <HeroCard
            name="Стімпанк Горгулья"
            description="Some description of the hero goes here"
            src="flying-dummy.png"
            href="gorgulya"
          />
        </div>
      </div>
    </Parchment>
  )
}
