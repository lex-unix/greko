import HeroCard from '../components/hero-card'
import Parchment from '../components/parchment'

export default function Heroes() {
  return (
    <Parchment>
      <div className="pt-16">
        <h1 className="text-5xl uppercase text-center mb-4 font-bold">
          Відомі персонажі грецької міфології
        </h1>
        <h3 className="text-2xl text-center">
          Дізнайся хто вбив Медусу Горгону або хто врятував світ від
          гіганьтського бика Балрога
        </h3>
        <div className="grid grid-cols-3 mt-10">
          <HeroCard
            name="Барлак"
            description="Some description of the hero goes here"
            src="big-bison.png"
            href="balrock"
          />
          <HeroCard
            name="Lorem ipsum"
            description="Some description of the hero goes here"
            src="flying-dummy.png"
            href="flying-dummy"
          />
          <HeroCard
            name="Lorem ipsum"
            description="Some description of the hero goes here"
            src="lost-head.png"
            href="lost-head"
          />
        </div>
      </div>
    </Parchment>
  )
}
