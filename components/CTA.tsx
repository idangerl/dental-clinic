'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section id="cta" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/95 to-secondary/95 p-12 md:p-20 text-center space-y-8 shadow-2xl">
          {/* Accent elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl mx-auto">
              Tu Sonrisa Perfecta Te Espera
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Toma el primer paso hacia una sonrisa más radiante y saludable. Nuestro equipo está listo para ayudarte.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white hover:bg-white/90 text-primary rounded-full font-semibold h-12 px-8 flex items-center justify-center gap-2"
              >
                Reservar Consulta
                <ArrowRight size={18} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full font-semibold h-12 px-8 border-2 border-white text-white hover:bg-white/10 bg-transparent"
              >
                Más Información
              </Button>
            </div>

            <p className="text-sm text-white/80 pt-4">
              ✓ Consulta inicial sin costo | ✓ Atención 24/7 para emergencias | ✓ Financiamiento disponible
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
