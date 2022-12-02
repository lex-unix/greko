import Myth from '@/components/myth'
import Parchment from '@/components/parchment'

export default function Myths() {
  return (
    <Parchment>
      <div className="pt-16">
        <h1 className="mb-4 text-3xl font-bold uppercase md:text-center md:text-5xl">
          Надзвичайні грецькі міфи
        </h1>
        <h3 className="mb-8 text-xl md:text-center md:text-2xl">
          Відкрий для себе історії античної Греції
        </h3>
        <Myth
          title="Деметра і Персефона"
          href="demetra-i-persefona"
          src="/pegasus.png"
        >
            З давніх-давен шанували смертні люди Деметру – богиню родючості, сестру
            всемогутнього Зевса. Це вона навчила людей обробляти землю, користатися
            її дарами, вона щедро давала людям достаток і мир. Як і інші безсмертні,
            Деметра жила на захмарнім Олімпі, але більше любила...
        </Myth>
        <Myth title="Нарцис" href="narcis" src="/god-statue.png">
            Далеко за межі Беотії линула слава сліпого віщуна Тіресія. Сам Зевс
            колись дозволив йому бачити прийдешнє, і Тіресій віщував усім людям
            правду. Якось прийшла до нього блакитноока німфа Ліріопея дізнатись про
            долю свого сина Нарциса, напрочуд гарного...
        </Myth>
      </div>
    </Parchment>
  )
}
