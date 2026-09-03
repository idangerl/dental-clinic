'use client'

import Link from 'next/link'
import { Heart, Share2, Share, Rss, Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    product: [
      { label: 'Servicios', href: '#services' },
      { label: 'Sobre Nosotros', href: '#about' },
      { label: 'Beneficios', href: '#benefits' },
      { label: 'Testimonios', href: '#testimonials' },
    ],
    company: [
      { label: 'Blog', href: '#' },
      { label: 'Carreras', href: '#' },
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Términos de Servicio', href: '#' },
    ],
    contact: [
      { icon: Phone, label: '+1 (555) 123-4567', href: 'tel:+15551234567' },
      { icon: Mail, label: 'contacto@sonrisaysalud.com', href: 'mailto:contacto@sonrisaysalud.com' },
      { icon: MapPin, label: 'Calle Principal 123, Ciudad, País', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: Heart, href: '#', label: 'Facebook' },
    { icon: Share2, href: '#', label: 'Instagram' },
    { icon: Rss, href: '#', label: 'Twitter' },
    { icon: Share, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-foreground text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-white font-bold">S&S</span>
              </div>
              <span className="text-lg font-semibold">Sonrisa & Salud</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Clínica dental de clase mundial comprometida con tu sonrisa y bienestar bucal.
            </p>
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-primary/20 hover:bg-primary transition-colors flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Servicios</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Empresa</h4>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={`${link.href}-${index}`}>
                  <a href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <ul className="space-y-3">
              {links.contact.map((item, index) => {
                const Icon = item.icon
                return (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
                    >
                      <Icon size={16} className="group-hover:text-primary transition-colors" />
                      <span>{item.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>&copy; {currentYear} Sonrisa & Salud. Todos los derechos reservados.</p>
          <p>
            Diseñado y construido con{' '}
            <span className="text-primary">
              ❤
            </span>{' '}
            para tu sonrisa
          </p>
        </div>
      </div>
    </footer>
  )
}
