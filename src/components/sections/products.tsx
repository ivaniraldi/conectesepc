import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const products = [
  {
    title: "Brazil PC Desktops",
    description: "Industrializados com precisão e performance, nossos desktops são projetados para atender às necessidades específicas de cada cliente, com configurações personalizáveis e suporte dedicado.",
    features: [
      "Processadores de última geração",
      "Memória RAM de alta velocidade",
      "Opções de armazenamento SSD e HDD",
      "Placas de vídeo para todas as necessidades",
      "Gabinete robusto e customizável"
    ],
    image: "https://i.imgur.com/IJs4lqU.png",
    aiHint: "powerful desktop computer"
  },
  {
    title: "Brazil PC All in One",
    description: "Combine design clean com alta performance. Os computadores All in One da Brazil PC vêm equipados com processadores Intel, memória DDR3 ou DDR4 e telas com borda infinita.",
    features: [
      "Design elegante e compacto",
      "Telas Full HD com borda infinita",
      "Processadores Intel eficientes",
      "Ideal para escritórios e recepções",
      "Fácil instalação e setup"
    ],
    image: "https://i.imgur.com/bJwZ5qS.png",
    aiHint: "sleek all-in-one computer"
  },
  {
    title: "Brazil PC Slim",
    description: "Projetados para operações que exigem desempenho em espaços reduzidos. A linha Slim entrega tecnologia em um formato compacto, robusto e personalizável.",
    features: [
      "Formato compacto e versátil",
      "Baixo consumo de energia",
      "Desempenho robusto para tarefas do dia-a-dia",
      "Suporte a múltiplos monitores",
      "Ideal para pontos de venda (PDV) e automação"
    ],
    image: "https://i.imgur.com/SyoKkDd.png",
    aiHint: "compact slim pc"
  },
  {
    title: "Brazil PC Linha White",
    description: "Unindo estética minimalista e alta performance, a Linha White oferece soluções sob medida para ambientes que valorizam organização, leveza visual e eficiência técnica.",
    features: [
      "Estética clean e minimalista",
      "Componentes de alta performance",
      "Perfeito para ambientes médicos e de design",
      "Organização e visual leve",
      "Configurações personalizadas"
    ],
    image: "https://i.imgur.com/EgOnJjf.png",
    aiHint: "white minimalist computer"
  }
];

export function Products() {
  return (
    <section id="produtos" className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline animate-fade-in-up text-primary">Nossas Soluções em Tecnologia</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Descubra a linha de produtos Brazil PC que melhor se adapta às suas necessidades.
        </p>
      </div>
      <div className="mt-16 space-y-24">
        {products.map((product, index) => (
          <div key={product.title} className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className={`relative aspect-square md:aspect-video rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
              <Image src={product.image} alt={product.title} layout="fill" objectFit="cover" data-ai-hint={product.aiHint} className="" />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl lg:text-3xl font-bold font-headline text-primary">{product.title}</h3>
              <p className="text-muted-foreground">{product.description}</p>
              <ul className="space-y-3 pt-4">
                {product.features.map(feature => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
