
'use client'

import {
  Sparkles,
  Zap,
  Eye,
  Heart,
  Building2,
  Users,
  CheckCircle2,
} from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      icon: Heart,
      title: 'Atención Personalizada',
      description:
        'Cada paciente recibe un plan de tratamiento personalizado según sus necesidades y objetivos.',
    },
    {
      icon: Zap,
      title: 'Tecnología Avanzada',
      description:
        'Equipos de última generación para diagnósticos precisos y tratamientos más eficientes.',
    },
    {
      icon: Eye,
      title: 'Diagnóstico Preciso',
      description:
        'Utilizamos radiografía digital y sistemas de imagen 3D para ofrecer diagnósticos de máxima precisión.',
    },
    {
      icon: Sparkles,
      title: 'Tratamientos Integrales',
      description:
        'Desde prevención hasta rehabilitación oral, cubrimos todas tus necesidades dentales.',
    },
    {
      icon: Building2,
      title: 'Instalaciones Modernas',
      description:
        'Una clínica completamente equipada con espacios cómodos, modernos y acogedores.',
    },
    {
      icon: Users,
      title: 'Equipo Especializado',
      description:
        'Profesionales certificados y especialistas con amplia experiencia en tratamientos odontológicos.',
    },
  ]

  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* =========================
            HEADER
        ========================== */}

        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Por Qué Elegirnos
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            Una experiencia dental pensada para ti
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Combinamos tecnología, experiencia y atención personalizada para
            ofrecer tratamientos seguros, precisos y enfocados en tu bienestar.
          </p>
        </div>

        {/* =========================
            MAIN CONTENT
        ========================== */}

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* =========================
              BENEFITS LIST
          ========================== */}

          <div className="space-y-2">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon

              return (
                <div
                  key={index}
                  className="
                    group
                    relative
                    flex
                    gap-5
                    rounded-2xl
                    p-5
                    transition-all
                    duration-300

                    hover:bg-white
                    hover:shadow-sm
                  "
                >

                  {/* Active indicator */}
                  <div
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-0
                      w-1
                      -translate-y-1/2
                      rounded-full
                      bg-primary
                      transition-all
                      duration-300

                      group-hover:h-12
                    "
                  />

                  {/* Icon */}
                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-primary/10
                      text-primary
                      transition-all
                      duration-300

                      group-hover:bg-primary
                      group-hover:text-white
                      group-hover:scale-105
                    "
                  >
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* Text */}
                  <div className="pt-0.5">
                    <h3
                      className="
                        text-lg
                        font-semibold
                        text-foreground
                        transition-colors
                        duration-300

                        group-hover:text-primary
                      "
                    >
                      {benefit.title}
                    </h3>

                    <p className="mt-1.5 max-w-xl text-sm leading-6 text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>

                </div>
              )
            })}
          </div>

          {/* =========================
              IMAGE
          ========================== */}

          <div className="relative">

            {/* Main image */}
            <div
              className="
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[2rem]
                bg-muted
                shadow-2xl

                sm:aspect-[4/4.5]
              "
            >
              <img
                src="/dental-clinic.jpg"
                alt="Profesional odontológico atendiendo a un paciente"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700

                  hover:scale-105
                "
              />

              {/* Image overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/30
                  via-transparent
                  to-transparent
                "
              />
            </div>

            {/* =========================
                FLOATING CARD
            ========================== */}

            <div
              className="
                absolute
                -bottom-6
                -left-5
                max-w-[250px]
                rounded-2xl
                border
                border-border
                bg-white
                p-5
                shadow-xl

                sm:-left-8
                sm:p-6
              "
            >
              <div className="flex items-start gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-primary/10
                    text-primary
                  "
                >
                  <CheckCircle2 size={21} />
                </div>

                <div>
                  <p className="font-semibold text-foreground">
                    Atención de confianza
                  </p>

                  <p className="mt-1 text-sm leading-5 text-muted-foreground">
                    Cuidamos cada detalle de tu experiencia.
                  </p>
                </div>

              </div>
            </div>

            {/* Decorative element */}
            <div
              className="
                absolute
                -right-4
                -top-4
                -z-10
                h-24
                w-24
                rounded-2xl
                bg-primary/10

                sm:-right-6
                sm:-top-6
              "
            />

          </div>

        </div>
      </div>
    </section>
  )
}

