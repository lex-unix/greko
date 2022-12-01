import Myth from '@/components/myth'
import Parchment from '@/components/parchment'

export default function Myths() {
  return (
    <Parchment>
      <div className="pt-16">
        <h1 className="text-3xl md:text-5xl uppercase md:text-center mb-4 font-bold">
          Надзвичайні грецькі міфи
        </h1>
        <h3 className="text-xl md:text-2xl md:text-center mb-6">
          Відкрий для себе історії античної Греції
        </h3>
        <Myth
          title="ДЕМЕТРА І ПЕРСЕФОНА"
          href="/demetra-i-persefona"
          src="/pegasus.png"
        >
          Nisi ipsum consectetur ad ut sint ex culpa enim ex cillum occaecat
          tempor. In enim voluptate quis ex eiusmod aliquip aliquip laboris
          excepteur culpa exercitation eu enim. Occaecat sit amet consectetur
          proident officia enim tempor cillum deserunt cillum in.
        </Myth>
        <Myth title="НАРЦИС" href="/narcis" src="/god-statue.png">
          Nisi ipsum consectetur ad ut sint ex culpa enim ex cillum occaecat
          tempor. In enim voluptate quis ex eiusmod aliquip aliquip laboris
          excepteur culpa exercitation eu enim. Occaecat sit amet consectetur
          proident officia enim tempor cillum deserunt cillum in.
        </Myth>
      </div>
    </Parchment>
  )
}
