export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-muted-foreground text-pretty">
              Desenvolvedor Full Stack especializado em criar experiências digitais modernas e funcionais.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Links Rápidos</h4>
            <div className="space-y-2">
              {["Início", "Sobre", "Serviços", "Portfolio", "Contato"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Serviços</h4>
            <div className="space-y-2">
              {["Desenvolvimento Web", "Apps Mobile", "UI/UX Design", "Consultoria", "Automação"].map((service) => (
                <div key={service} className="text-muted-foreground">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-muted-foreground">© 2024 Davi Snaider. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
