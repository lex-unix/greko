import HeroCard from '@/components/hero-card'
import Parchment from '@/components/parchment'

export default function Heroes() {
  return (
    <Parchment>
      <div className="pt-16">
        <h1 className="mb-4 text-3xl font-bold uppercase md:text-center md:text-5xl">
          Відомі персонажі грецької міфології
        </h1>
        <h3 className="text-xl md:text-center md:text-2xl">
          Дізнайся хто вбив Медусу Горгону або хто врятував світ від
          гіганьтського бика Балрога
        </h3>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
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
