'use client'

import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { WhatsAppConsultoriosLink } from '@/lib/site-data'
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">
      {/* Mensaje */}
      <div className="hidden md:block bg-card border border-border rounded-2xl px-4 py-3 shadow-lg animate-fadeIn">
        <p className="text-sm font-medium text-foreground">
          💬 ¿Necesitas una cita?
        </p>
        <p className="text-xs text-muted-foreground">
          Estamos disponibles por WhatsApp
        </p>
      </div>

      {/* Botón */}
      <a
  href={WhatsAppConsultoriosLink}
    target="_blank"
    rel="noopener noreferrer"
  className="
    h-16
    w-16
    rounded-full
    bg-green-500
    flex
    items-center
    justify-center
    text-white
    shadow-2xl
    hover:scale-110
    transition-all
    duration-300
  "
>
  <FaWhatsapp size={34} />
</a>
    </div>
  )
}