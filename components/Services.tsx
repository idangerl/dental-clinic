'use client'
import { WhatsAppConsultoriosLink } from '@/lib/site-data'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkle, Smile, Crown, Lightbulb, Wind, Baby, Wrench, Scissors } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Smile,
      title: 'Limpieza Dental',
      description: 'Profilaxis y limpieza profesional para mantener dientes saludables y brillantes',
    },
    {
      icon: Wind,
      title: 'Ortodoncia',
      description: 'Alineamiento de dientes con técnicas convencionales y digitales avanzadas',
    },
    {
      icon: Crown,
      title: 'Implantes Dentales',
      description: 'Restauración de dientes perdidos con implantes de titanio duraderos y naturales',
    },
    {
      icon: Sparkle,
      title: 'Blanqueamiento Dental',
      description: 'Tratamientos de blanqueamiento profesional para una sonrisa radiante',
    },
    {
      icon: Lightbulb,
      title: 'Endodoncia',
      description: 'Tratamiento de conductos radiculares con tecnología rotativa de precisión',
    },
    {
      icon: Baby,
      title: 'Odontopediatría',
      description: 'Cuidado dental especializado y ameno para niños de todas las edades',
    },
    {
      icon: Wrench,
      title: 'Rehabilitación Oral',
      description: 'Restauración completa de tu boca con coronas, puentes y protésicos',
    },
    {
      icon: Scissors,
      title: 'Cirugía Dental',
      description: 'Extracciones y procedimientos quirúrgicos con técnicas minimamente invasivas',
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Servicios</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
            Tratamientos Integrales para Tu Sonrisa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios dentales para todas tus necesidades de salud oral
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:bg-white cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                {/* <button className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 gap-0 transition-all">
                  Más info
                  <ArrowRight size={16} className="ml-1" />
                </button> */}
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-12 rounded-3xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-border text-center space-y-6">
          <h3 className="text-3xl font-bold text-foreground">¿Necesitas Consulta?</h3>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Nuestro equipo está listo para ayudarte. Agenda tu cita hoy y comienza tu viaje hacia una sonrisa radiante.
          </p>
          <a   href={WhatsAppConsultoriosLink}
                          target="_blank"
                          rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-white rounded-full font-semibold h-12 px-8 inline-flex items-center gap-2">
            Agendar Ahora
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
