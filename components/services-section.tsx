import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Smartphone, Database, Palette, Code, Zap } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "Desenvolvimento Web",
      description: "Sites e aplicações web modernas, responsivas e otimizadas para performance.",
      features: ["React & Next.js", "TypeScript", "SEO Otimizado", "Performance"],
    },
    {
      icon: Smartphone,
      title: "Aplicações Mobile",
      description: "Apps mobile nativos e híbridos para iOS e Android com excelente UX.",
      features: ["React Native", "Flutter", "UI/UX Design", "App Store"],
    },
    {
      icon: Database,
      title: "Backend & APIs",
      description: "APIs robustas, escaláveis e seguras para suas aplicações.",
      features: ["Node.js", "Python", "PostgreSQL", "Cloud Deploy"],
    },
    {
      icon: Palette,
      title: "Social Media & Marketing",
      description: "Estratégias digitais, gestão de redes sociais e criação de conteúdo visual.",
      features: ["Gestão de Redes", "Design Gráfico", "Campanhas", "Analytics"],
    },
    {
      icon: Zap,
      title: "Automação & Integração",
      description: "Automações personalizadas, chatbots e integração de sistemas para otimizar processos.",
      features: ["Chatbots", "APIs Integration", "Workflows", "Scripts Python"],
    },
    {
      icon: Code,
      title: "Consultoria Digital",
      description: "Consultoria completa em transformação digital e otimização de processos tecnológicos.",
      features: ["Análise Técnica", "Arquitetura", "Mentoria", "Estratégia Digital"],
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Meus <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ofereço soluções digitais completas, desde desenvolvimento até automações e estratégias de marketing
            digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border-border/50 hover:border-primary/30 hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-balance">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-pretty">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-primary font-medium">
                      • {feature}
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="w-full mt-6 border-primary/50 text-primary hover:bg-primary/10 group-hover:border-primary transition-all duration-300 bg-transparent"
                >
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
