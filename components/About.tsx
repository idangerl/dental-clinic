'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'

export function About() {
  const timeline = [
    { year: '2009', event: 'Fundación de Sonrisa & Salud' },
    { year: '2012', event: 'Expansión a 3 sedes' },
    { year: '2016', event: 'Certificación internacional ISO' },
    { year: '2020', event: 'Centro de implantología avanzada' },
  ]

  const values = [
    { title: 'Excelencia', description: 'Compromiso con la calidad en cada tratamiento' },
    { title: 'Confianza', description: 'Relación transparente y honesta con nuestros pacientes' },
    { title: 'Innovación', description: 'Tecnología y técnicas dentales más avanzadas' },
    { title: 'Humanidad', description: 'Atención personalizada y empática siempre' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/clinic-about.jpg"
                alt="Equipo profesional de especialistas dentales"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">Sobre Nosotros</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                15 años de Excelencia Dental
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desde 2009, Sonrisa & Salud ha sido sinónimo de confianza, excelencia y cuidado personalizado. Nuestro equipo de especialistas dedicados ha transformado miles de sonrisas.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Nuestra Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar atención dental de clase mundial con tecnología avanzada, creando sonrisas saludables y pacientes confiados en un ambiente cálido y profesional.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Nuestra Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser la clínica dental referente de la región, reconocida por la excelencia clínica, innovación tecnológica y el compromiso con la satisfacción y el bienestar de nuestros pacientes.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20 border-t border-border pt-20">
          <h3 className="text-3xl font-bold text-foreground mb-12">Nuestro Recorrido</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300"
              >
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white" />
                <p className="text-3xl font-bold text-primary mb-2">{item.year}</p>
                <p className="text-foreground font-medium">{item.event}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="border-t border-border pt-20">
          <h3 className="text-3xl font-bold text-foreground mb-12">Nuestros Valores</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
