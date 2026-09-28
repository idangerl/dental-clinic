"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { WhatsAppConsultoriosLink } from "@/lib/site-data";

export function Hero() {
  const stats = [
    {
      number: "+5000",
      title: "Pacientes",
      subtitle: "Atendidos",
    },
    {
      number: "15+",
      title: "Años",
      subtitle: "De experiencia",
    },
    {
      number: "98%",
      title: "Satisfacción",
      subtitle: "De pacientes",
    },
  ];

  return (
    <section
      id="inicio"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slideInLeft">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                Tu Mejor Sonrisa,
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Comienza Aquí
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Brindamos atención odontológica integral con tecnología moderna,
                tratamientos personalizados y un equipo comprometido con tu
                bienestar y confianza.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WhatsAppConsultoriosLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-semibold h-12 px-8 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Agendar Consulta
                <ArrowRight size={18} />
              </a>
              <a
    href={WhatsAppConsultoriosLink}
                target="_blank"
                rel="noopener noreferrer"
  className="rounded-full font-semibold h-12 px-8 border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center"
>
  Conocer más
</a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div
                  key={stat.title}
                  className="
        relative
        bg-card
        border
        border-border
        rounded-2xl
        p-5
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
      "
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-2xl" />

                  <div className="pt-2">
                    <p className="text-3xl font-bold text-primary">
                      {stat.number}
                    </p>

                    <p className="mt-2 font-semibold text-foreground">
                      {stat.title}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {stat.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image with floating cards */}
          <div className="relative h-96 lg:h-full min-h-96 flex items-center justify-center">
            {/* Main Image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shadow-lg">
              <Image
                src="/clinic-hero-2.jpg"
                alt="Clínica dental premium con tecnología avanzada"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating cards */}
            <div className="absolute top-8 -left-4 bg-white rounded-2xl p-4 shadow-xl border border-border max-w-xs hover:shadow-2xl transition-all duration-300 animate-slideInLeft hover:-translate-y-2">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Tecnología Digital
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Diagnóstico preciso y tratamientos modernos
                  </p>
                </div>
              </div>
            </div>

            <div
              className="absolute bottom-8 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-border max-w-xs hover:shadow-2xl transition-all duration-300 animate-slideInRight hover:-translate-y-2"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    Atención Personalizada
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Tratamientos adaptados a cada paciente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
