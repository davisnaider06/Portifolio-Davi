import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function PortfolioSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Tamplate de plataforma de e-commerce, sistema de pagamentos e gestão de estoque.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "https://neotek.netlify.app/",
      githubUrl: "https://github.com/davisnaider06/neoTek_ecom",
    },
    {
      title: "Task Management App",
      description: "Aplicativo de gerenciamento de tarefas com colaboração em tempo real e integração com calendário.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "https://tiddo.netlify.app/",
      githubUrl: "https://github.com/davisnaider06/todo-list",
    },
    {
      title: "CRM nexaflow",
      description: "Dashboard com visualização de dados e agendamento de consultas, leads, e estatisticas.",
      image: "/healthcare-dashboard-medical-interface.png",
      technologies: ["HTML/CSS", "NODE.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/davisnaider06/nexaflow-crm",
    },
    {
      title: "Real Estate Platform",
      description: "Plataforma imobiliária com busca avançada, tours virtuais e sistema de CRM integrado.",
      image: "/real-estate-website.png",
      technologies: ["Next.js", "Prisma", "AWS", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Learning Management System",
      description: "Sistema de gestão de aprendizagem com videoaulas, quizzes e acompanhamento de progresso.",
      image: "/online-learning-platform.png",
      technologies: ["React", "Express", "MongoDB", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fintech Mobile App",
      description: "Aplicativo financeiro com transferências, investimentos e análise de gastos pessoais.",
      image: "/fintech-mobile-app.png",
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Meu <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Alguns dos projetos que desenvolvi, demonstrando minhas habilidades e experiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 border-border/50 hover:border-primary/30"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={1000}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-2">
                    <Button
                      asChild
                      size="sm"
                      variant="secondary"
                      className="bg-background/90 hover:bg-primary hover:text-primary-foreground"
                    >
                      <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      variant="secondary"
                      className="bg-background/90 hover:bg-primary hover:text-primary-foreground"
                    >
                      <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-balance">{project.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
            <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
            >
            <a
              href="https://github.com/davisnaider06?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Todos os Projetos
            </a>
            </Button>
        </div>
      </div>
    </section>
  )
}
