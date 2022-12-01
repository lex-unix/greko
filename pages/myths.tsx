import Myth from '@/components/myth'
import Parchment from '@/components/parchment'

export default function Myths() {
  return (
    <Parchment>
      <div className="pt-16">
        <h1 className="mb-4 text-3xl md:text-5xl uppercase md:text-center font-bold">
          Надзвичайні грецькі міфи
        </h1>
        <h3 className="text-xl md:text-2xl md:text-center mb-8">
          Відкрий для себе історії античної Греції
        </h3>
        <Myth
          title="Деметра і Персефона"
          href="demetra-i-persefona"
          src="/pegasus.png"
        >
          Nisi ipsum consectetur ad ut sint ex culpa enim ex cillum occaecat
          tempor. In enim voluptate quis ex eiusmod aliquip aliquip laboris
          excepteur culpa exercitation eu enim. Occaecat sit amet consectetur
          proident officia enim tempor cillum deserunt cillum in.
        </Myth>
        <Myth title="Нарцис" href="/narcis" src="/god-statue.png">
          Nisi ipsum consectetur ad ut sint ex culpa enim ex cillum occaecat
          tempor. In enim voluptate quis ex eiusmod aliquip aliquip laboris
          excepteur culpa exercitation eu enim. Occaecat sit amet consectetur
          proident officia enim tempor cillum deserunt cillum in.
        </Myth>
      </div>
    </Parchment>
  )
}
