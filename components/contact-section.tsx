"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Monta a mensagem para o WhatsApp
    const { name, email, subject, message } = formData
    const phoneNumber = "5512991015266"
    const text = `Olá, meu nome é ${name} (Email: ${email}) Assunto:${subject} Mensagem: ${message}`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "davisnaider06@gmail.com",
      href: "mailto:davisnaider06@gmail.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (12) 99101-5266",
      href: "tel:+5512991015266",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Jacareí, SP",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Vamos conversar sobre seu próximo projeto. Estou sempre aberto a novas oportunidades.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Vamos trabalhar juntos!</h3>
              <p className="text-muted-foreground text-pretty mb-8">
                Estou sempre interessado em novos projetos e oportunidades. Se você tem uma ideia ou precisa de ajuda
                com desenvolvimento, não hesite em entrar em contato.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Me siga nas redes sociais</h4>
              <div className="flex space-x-4">
                {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  >
                    {social.charAt(0)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Envie uma mensagem</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-border/50 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Seu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-border/50 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Assunto"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-border/50 focus:border-primary transition-colors duration-300"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
