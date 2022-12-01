import Myth from '../components/myth'
import Parchment from '../components/parchment'

export default function Myths() {
  return (
    <Parchment>
      <div className="pt-16">
        <h1 className="text-5xl uppercase text-center mb-4 font-bold">
          Надзвичайні грецькі міфи
        </h1>
        <h3 className="text-2xl text-center mb-10">
          Відкрий для себе історії античної Греції
        </h3>
        <Myth title="Lorem ipsum" href="/myth-1" src="/pegasus.png">
          Nisi ipsum consectetur ad ut sint ex culpa enim ex cillum occaecat
          tempor. In enim voluptate quis ex eiusmod aliquip aliquip laboris
          excepteur culpa exercitation eu enim. Occaecat sit amet consectetur
          proident officia enim tempor cillum deserunt cillum in.
        </Myth>
        <Myth title="Lorem ipsum" href="/myth-1" src="/god-statue.png">
          Nisi ipsum consectetur ad ut sint ex culpa enim ex cillum occaecat
          tempor. In enim voluptate quis ex eiusmod aliquip aliquip laboris
          excepteur culpa exercitation eu enim. Occaecat sit amet consectetur
          proident officia enim tempor cillum deserunt cillum in.
        </Myth>
      </div>
    </Parchment>
  )
}
