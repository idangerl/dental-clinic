"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Paciente de Implantes",
    rating: 5,
    text: "El equipo fue profesional y me hizo sentir cómoda desde el primer momento. Los resultados superaron mis expectativas. Totalmente recomendado.",
  },
  {
    name: "Carlos Rodríguez",
    role: "Paciente de Ortodoncia",
    rating: 5,
    text: "Mi sonrisa cambió completamente. El Dr. López explicó todo el proceso con mucha paciencia y siempre estuvo pendiente de cada detalle.",
  },
  {
    name: "Ana Martínez",
    role: "Paciente de Blanqueamiento",
    rating: 5,
    text: "El resultado fue increíble y en muy poco tiempo. La atención fue excelente y todo el personal fue muy amable. Sin duda volveré.",
  },
  {
    name: "David Fernández",
    role: "Paciente de Endodoncia",
    rating: 5,
    text: "Tenía mucho miedo del procedimiento, pero el equipo fue increíblemente empático. Me sentí tranquilo durante todo el tratamiento.",
  },
  {
    name: "Laura Pérez",
    role: "Paciente de Limpieza Dental",
    rating: 5,
    text: "Una atención excelente y muy detallada. Incluso aprendí nuevas formas de cuidar mi salud bucal. La clínica es moderna y acogedora.",
  },
  {
    name: "Jorge Sánchez",
    role: "Paciente de Rehabilitación",
    rating: 5,
    text: "Transformaron completamente mi sonrisa y mi confianza. El equipo de especialistas fue excepcional. Estoy muy agradecido.",
  },
];

export function Testimonials() {
  const autoplay = Autoplay({
    delay: 5000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [autoplay],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* =========================
            HEADER
        ========================== */}

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Testimonios
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            La confianza de nuestros pacientes
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Cada sonrisa cuenta una historia. Conoce la experiencia de pacientes
            que confiaron en nuestro equipo.
          </p>
        </div>

        {/* =========================
            CAROUSEL
        ========================== */}

        <div className="relative px-2 sm:px-5 lg:px-6">
          {/* Viewport */}
          <div ref={emblaRef} className="overflow-hidden">
            {/* Slides */}
            <div className="-ml-4 flex touch-pan-y">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="
                    min-w-0
                    flex-[0_0_100%]
                    pl-4

                    sm:flex-[0_0_50%]

                    lg:flex-[0_0_33.333333%]
                  "
                >
                  <article
                    className="
                      group
                      flex
                      h-full
                      min-h-[320px]
                      flex-col
                      rounded-3xl
                      border
                      border-border
                      bg-white
                      p-7
                      shadow-sm

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-primary/30
                      hover:shadow-xl

                      sm:p-8
                    "
                  >
                    {/* Top */}
                    <div className="flex items-start justify-between">
                      {/* Stars */}
                      <div className="flex gap-1">
                        {Array.from({
                          length: testimonial.rating,
                        }).map((_, i) => (
                          <Star
                            key={i}
                            size={17}
                            strokeWidth={1.5}
                            className="fill-primary text-primary"
                          />
                        ))}
                      </div>

                      {/* Quote */}
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

                          transition-transform
                          duration-300

                          group-hover:scale-110
                        "
                      >
                        <Quote size={18} />
                      </div>
                    </div>

                    {/* Text */}
                    <blockquote
                      className="
                        mt-6
                        flex-1
                        text-[15px]
                        leading-7
                        text-muted-foreground
                      "
                    >
                      “{testimonial.text}”
                    </blockquote>

                    {/* Author */}
                    <div className="mt-7 border-t border-border pt-5">
                      <div className="flex items-center gap-3">
                        {/* Avatar */}
                        <div
                          className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-primary/10
                            text-sm
                            font-bold
                            text-primary
                          "
                        >
                          {testimonial.name
                            .split(" ")
                            .map((word) => word[0])
                            .slice(0, 2)
                            .join("")}
                        </div>

                        {/* Name */}
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>

                          <p className="mt-0.5 text-sm font-medium text-primary">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* =========================
              PREVIOUS BUTTON
          ========================== */}

          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Testimonio anterior"
            className="
              absolute
              left-0
              top-1/2
              z-10

              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center

              rounded-full
              border
              border-border
              bg-white
              text-foreground
              shadow-lg

              transition-all
              duration-300

              hover:scale-105
              hover:border-primary
              hover:bg-primary
              hover:text-white

              focus:outline-none
              focus:ring-2
              focus:ring-primary
              focus:ring-offset-2
            "
          >
            <ChevronLeft size={21} />
          </button>

          {/* =========================
              NEXT BUTTON
          ========================== */}

          <button
            type="button"
            onClick={scrollNext}
            aria-label="Siguiente testimonio"
            className="
              absolute
              right-0
              top-1/2
              z-10

              flex
              h-11
              w-11
              -translate-y-1/2
              items-center
              justify-center

              rounded-full
              border
              border-border
              bg-white
              text-foreground
              shadow-lg

              transition-all
              duration-300

              hover:scale-105
              hover:border-primary
              hover:bg-primary
              hover:text-white

              focus:outline-none
              focus:ring-2
              focus:ring-primary
              focus:ring-offset-2
            "
          >
            <ChevronRight size={21} />
          </button>
        </div>

        {/* =========================
            DOTS
        ========================== */}

        <div className="mt-9 flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => scrollTo(index)}
              aria-label={`Ir al grupo ${index + 1}`}
              aria-current={selectedIndex === index ? "true" : undefined}
              className={`
                h-2
                rounded-full
                transition-all
                duration-300

                ${
                  selectedIndex === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-primary/50"
                }
              `}
            />
          ))}
        </div>

        {/* =========================
            TRUST INDICATORS
        ========================== */}

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {/* Patients */}
          <div
            className="
              rounded-2xl
              border
              border-border
              bg-white
              p-6
              text-center
              shadow-sm

              transition-shadow
              duration-300

              hover:shadow-md
            "
          >
            <p className="text-4xl font-bold tracking-tight text-primary">
              5000+
            </p>

            <p className="mt-2 font-medium text-foreground">
              Pacientes satisfechos
            </p>
          </div>

          {/* Recommendation */}
          <div
            className="
              rounded-2xl
              border
              border-border
              bg-white
              p-6
              text-center
              shadow-sm

              transition-shadow
              duration-300

              hover:shadow-md
            "
          >
            <p className="text-4xl font-bold tracking-tight text-secondary">
              98%
            </p>

            <p className="mt-2 font-medium text-foreground">
              De nuestros pacientes nos recomienda
            </p>
          </div>

          {/* Experience */}
          <div
            className="
              rounded-2xl
              border
              border-border
              bg-white
              p-6
              text-center
              shadow-sm

              transition-shadow
              duration-300

              hover:shadow-md
            "
          >
            <p className="text-4xl font-bold tracking-tight text-primary">
              15+
            </p>

            <p className="mt-2 font-medium text-foreground">
              Años de experiencia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
