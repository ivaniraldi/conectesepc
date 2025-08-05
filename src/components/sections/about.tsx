import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-headline animate-fade-in-up text-primary">Sobre Nós</h2>
            <p className="text-muted-foreground">
              A CONECTE-SE REPRESENTAÇÕES é sua parceira estratégica no fornecimento de tecnologia de ponta. Somos representantes oficiais da Brazil PC, uma marca que se destaca pela qualidade, performance e capacidade de customização de seus equipamentos.
            </p>
            <p className="text-muted-foreground">
              Nossa missão é conectar empresas e pessoas às melhores soluções tecnológicas, oferecendo um atendimento consultivo, suporte ágil e produtos que impulsionam o crescimento e a eficiência. Valorizamos a confiança, o compromisso com o cliente e a excelência em tudo que fazemos.
            </p>
          </div>
          <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-2xl">
             <Image 
                src="https://i.imgur.com/P7Q85Py.jpeg" 
                alt="Equipe da Conecte-se em uma reunião" 
                layout="fill"
                objectFit="cover"
                data-ai-hint="business team meeting"
                className="bg-background"
             />
          </div>
        </div>
      </div>
    </section>
  );
}
