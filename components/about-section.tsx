import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Smartphone, Database } from "lucide-react"

export function AboutSection() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "PostgreSQL",
    "HTML/CSS",
    "AWS",
    "Docker",
    "Git",
    "Figma",
    "Tailwind CSS",
    "Express",
    "VB.NET",
    "SQL Server",
    "Python"
  ]

  const expertise = [
    {
      icon: Code,
      title: "Desenvolvimento Frontend",
      description: "Criação de interfaces modernas e responsivas com React, Next.js e TypeScript.",
    },
    {
      icon: Database,
      title: "Desenvolvimento Backend",
      description: "APIs robustas e escaláveis com Node.js, e bancos de dados relacionais.",
    },
    {
      icon: Smartphone,
      title: "Design Responsivo",
      description: "Experiências otimizadas para todos os dispositivos e tamanhos de tela.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Design centrado no usuário com foco em usabilidade e experiência.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Sobre <span className="text-primary">Mim</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
             Desenvolvedor apaixonado por tecnologia com mais de 5 anos de experiência criando soluções digitais
            inovadoras.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground text-pretty">
              Sou um desenvolvedor full stack especializado em criar experiências digitais excepcionais. Minha jornada
              na tecnologia começou há mais de 5 anos, e desde então tenho me dedicado a dominar as mais modernas
              tecnologias web.
            </p>
            <p className="text-lg text-muted-foreground text-pretty">
              Acredito que a melhor tecnologia é aquela que resolve problemas reais de forma elegante e eficiente. Por
              isso, sempre busco equilibrar inovação técnica com usabilidade e performance.
            </p>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 border-border/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-balance">{item.title}</h3>
                  <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
