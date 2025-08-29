"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-primary font-medium text-lg animate-fade-in-up delay-200">Olá, eu sou</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance animate-fade-in-up delay-300">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Davi Snaider
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground/90 animate-fade-in-up delay-400">
                Especialista em Soluções Digitais
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg text-pretty animate-fade-in-up delay-500">
                Desenvolvedor Full Stack com mais de 5 anos de experiência, transformando ideias em soluções digitais
                completas. Especializado em desenvolvimento de software, automações e consultoria tecnológica, ofereço
                desde aplicações web modernas até estratégias digitais personalizadas.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Entre em Contato
              </Button>
              
                
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 animate-fade-in-up delay-700">
              <a
                href="https://github.com/davisnaider06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/davi-s-a7a99432b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/davisnaideroficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up delay-800">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-2">
                <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                  <Image
                    src="/foto-formatura-3.png"
                    alt="Davi Snaider - Desenvolvedor"
                    width={300}
                    height={300}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce delay-1000"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-bounce delay-1500"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  )
}
