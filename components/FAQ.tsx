
'use client'

import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'
import { WhatsAppConsultoriosLink } from '@/lib/site-data'
export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: '¿Cada cuánto debo visitar al dentista?',
      answer:
        'Se recomienda una revisión cada 6 meses. Sin embargo, algunas personas pueden necesitar visitas más frecuentes dependiendo de su condición bucal. Nuestros especialistas te orientarán según tu caso específico.',
    },
    {
      question: '¿Los implantes dentales son permanentes?',
      answer:
        'Los implantes de titanio pueden durar toda la vida si se cuidan adecuadamente. Requieren buenos hábitos de higiene y revisiones periódicas. Son una de las soluciones más duraderas para dientes perdidos.',
    },
    {
      question: '¿Qué tratamientos ofrecen para niños?',
      answer:
        'Ofrecemos odontopediatría integral: limpiezas, sellantes preventivos, ortodoncia infantil, tratamiento de caries y flúor. Nuestro equipo especializado hace que la experiencia sea cómoda y agradable para los niños.',
    },
    {
      question: '¿Atienden emergencias dentales?',
      answer:
        'Sí, atendemos emergencias dentales. Contamos con horarios extendidos y un equipo disponible para casos urgentes como fracturas, dolores agudos y traumatismos.',
    },
    {
      question: '¿Cómo puedo agendar una cita?',
      answer:
        'Puedes agendar por teléfono, a través de nuestro sitio web o visitando la clínica. Nuestro equipo administrativo te asignará la cita en la fecha y hora que mejor te convenga.',
    },
    {
      question: '¿Aceptan seguros dentales?',
      answer:
        'Sí, trabajamos con la mayoría de los seguros dentales del país. Te recomendamos contactarnos para verificar tu cobertura específica.',
    },
    {
      question: '¿Cuánto dura una limpieza dental?',
      answer:
        'Una limpieza dental profesional generalmente dura entre 45 minutos y 1 hora. El tiempo puede variar según la cantidad de acumulación de sarro y la condición de tus encías.',
    },
    {
      question: '¿El blanqueamiento dental daña los dientes?',
      answer:
        'El blanqueamiento profesional es seguro cuando se realiza correctamente. Utilizamos productos de calidad clínica que no dañan el esmalte. Algunos pacientes pueden experimentar sensibilidad temporal.',
    },
  ]

  return (
    <section
      id="faq"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-slate-900
      "
    >

      {/* =========================
          BACKGROUND IMAGE
      ========================== */}

      <div className="absolute inset-0">

        <img
          src="/dental-faq.avif"
          alt=""
          aria-hidden="true"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />

    


      </div>

      {/* =========================
          CONTENT
      ========================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          py-20
          sm:px-6
          sm:py-24
          lg:px-8
        "
      >

        <div className="grid items-center lg:grid-cols-[1.05fr_0.95fr]">

          {/* =========================
              LEFT — FAQ
          ========================== */}

          <div
            className="
              max-w-2xl
              rounded-[2rem]
              border
              border-white/20
              bg-white/95
              p-6
              shadow-2xl
              backdrop-blur-md

              sm:p-8
              lg:p-10
            "
          >

            {/* Heading */}

            <div className="mb-8 space-y-4">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Preguntas Frecuentes
              </p>

              <h2
                className="
                  text-3xl
                  font-bold
                  leading-tight
                  tracking-tight
                  text-foreground

                  sm:text-4xl
                "
              >
                Respuestas a tus dudas
              </h2>

              <p className="text-base leading-relaxed text-muted-foreground">
                Todo lo que necesitas saber antes de comenzar tu tratamiento.
                Si tienes alguna otra pregunta, nuestro equipo estará encantado
                de ayudarte.
              </p>

            </div>

            {/* =========================
                ACCORDION
            ========================== */}

            <div className="space-y-2">

              {faqs.map((faq, index) => {

                const isOpen = openIndex === index

                return (
                  <div
                    key={index}
                    className={`
                      overflow-hidden
                      rounded-xl
                      border
                      transition-all
                      duration-300

                      ${
                        isOpen
                          ? 'border-primary/30 bg-primary/[0.03]'
                          : 'border-border bg-white'
                      }
                    `}
                  >

                    {/* Question */}

                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(
                          isOpen ? null : index
                        )
                      }
                      aria-expanded={isOpen}
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-4
                        px-5
                        py-4
                        text-left

                        transition-colors
                        duration-200

                        hover:bg-muted/40

                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-primary
                        focus-visible:ring-inset
                      "
                    >

                      <span
                        className={`
                          text-sm
                          font-semibold
                          leading-6
                          transition-colors
                          duration-200

                          ${
                            isOpen
                              ? 'text-primary'
                              : 'text-foreground'
                          }
                        `}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`
                          flex
                          h-8
                          w-8
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          transition-all
                          duration-300

                          ${
                            isOpen
                              ? 'bg-primary text-white'
                              : 'bg-primary/10 text-primary'
                          }
                        `}
                      >
                        <ChevronDown
                          size={17}
                          className={`
                            transition-transform
                            duration-300

                            ${
                              isOpen
                                ? 'rotate-180'
                                : ''
                            }
                          `}
                        />
                      </span>

                    </button>

                    {/* Answer */}

                    <div
                      className={`
                        grid
                        transition-all
                        duration-300
                        ease-in-out

                        ${
                          isOpen
                            ? 'grid-rows-[1fr] opacity-100'
                            : 'grid-rows-[0fr] opacity-0'
                        }
                      `}
                    >

                      <div className="overflow-hidden">

                        <div
                          className="
                            border-t
                            border-border
                            px-5
                            pb-5
                            pt-4
                          "
                        >
                          <p
                            className="
                              text-sm
                              leading-6
                              text-muted-foreground
                            "
                          >
                            {faq.answer}
                          </p>
                        </div>

                      </div>

                    </div>

                  </div>
                )
              })}

            </div>

            {/* =========================
                CONTACT CTA
            ========================== */}

            <div
              className="
                mt-7
                flex
                flex-col
                gap-4
                rounded-2xl
                bg-primary/[0.06]
                p-5

                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-primary
                    text-white
                  "
                >
                  <MessageCircle size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    ¿Tienes otra pregunta?
                  </p>

                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Estamos aquí para ayudarte.
                  </p>
                </div>

              </div>

              <a
                  href={WhatsAppConsultoriosLink}
                                target="_blank"
                                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-primary
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-white

                  transition-all
                  duration-300

                  hover:bg-primary/90
                  hover:shadow-lg
                  hover:-translate-y-0.5
                "
              >
                Contáctanos
              </a>

            </div>

          </div>

          {/* =========================
              RIGHT — VISUAL SPACE
          ========================== */}

          <div className="hidden lg:block" />

        </div>
      </div>

    </section>
  )
}
