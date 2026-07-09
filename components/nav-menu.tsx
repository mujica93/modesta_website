"use client"

import { ChevronDown } from "lucide-react"
import { useLang } from "@/lib/i18n"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavItem {
  label: string
  href: string
  submenu?: { label: string; href: string }[]
}

export function NavMenu() {
  
  const { lang } = useLang(); 

  const currentYear = new Date().getFullYear();
  const previousYear = currentYear - 1;

  const navItems: Record<string, NavItem[]> = {
    es: [
      {
        label: "Inicio",
        href: "/index",
        submenu: [
          { label: "Pagos", href: "/index/payments" }
        ]
      },
      {
        label: `Utiles Escolares`,
        href: "/supplies",
        submenu: [
          { label: `Año Escolar ${currentYear}-${previousYear}`, href: "/supplies" },
          { label: "Solicitar Entrevista", href: "/supplies/interview-request" },
        ],
      },
      {
        label: "Sobre nosotros",
        href: "/about-us",
        submenu: [
          { label: "La huella de Modesta Bor", href: "/about-us/footprint-modesta-bor" },
          { label: "Misión y Visión", href: "/about-us/mission-vision" },
          { label: "Objetivos", href: "/about-us/objetives" },
          { label: "Valores", href: "/about-us/values" },
          { label: "Servicios", href: "/about-us/services" },
          { label: "Manual de Convivencia", href: "/about-us/conviviality" },
          { label: "Nuestras Redes", href: "/about-us/socials-networks" },
        ],
      },
      {
        label: "Admisión",
        href: "/admission"
      },
      {
        label: "Casa de los Saberes",
        href: "/house-of-knowledge",
        submenu: [
          { label: "Museo Virtual 2022", href: "/house-of-knowledge/museum" },
          { label: "Becas de Rendimiento", href: "/house-of-knowledge/scholarships" },
          { label: "Ex Alumnos", href: "/house-of-knowledge/alumni" },
          { label: "Socios y Amigos", href: "/house-of-knowledge/partners" },
          { label: "Perspectivas del Colegio", href: "/house-of-knowledge/perspectives" },
          { label: "Galeria", href: "/house-of-knowledge/gallery" },
        ],
      },
      {
        label: "Contacto",
        href: "/contact"
      },
    ],
    en: [
      {
        label: "Home",
        href: "/index",
        submenu: [
          { label: "Payments", href: "/index/payments" }
        ]
      },
      {
        label: `School Supplies`,
        href: "/supplies",
        submenu: [
          { label: `School Year ${currentYear}-${previousYear}`, href: "/supplies" },
          { label: "Request Interview", href: "/supplies/interview-request" },
        ],
      },
      {
        label: "About us",
        href: "/about-us",
        submenu: [
          { label: "The Footprint of Modesta Bor", href: "/about-us/footprint-modesta-bor" },
          { label: "Mission and Vision", href: "/about-us/mission-vision" },
          { label: "Objectives", href: "/about-us/objetives" },
          { label: "Values", href: "/about-us/values" },
          { label: "Services", href: "/about-us/services" },
          { label: "Conviviality Manual", href: "/about-us/conviviality" },
          { label: "Our Networks", href: "/about-us/socials-networks" },
        ],
      },
      {
        label: "Admission",
        href: "/admission"
      },
      {
        label: "House of Knowledge",
        href: "/house-of-knowledge",
        submenu: [
          { label: "Virtual Museum 2022", href: "/house-of-knowledge/museum" },
          { label: "Performance Scholarships", href: "/house-of-knowledge/scholarships" },
          { label: "Alumni", href: "/house-of-knowledge/alumni" },
          { label: "Friends and Partners", href: "/house-of-knowledge/friends-and-partners" },
          { label: "College Perspectives", href: "/house-of-knowledge/perspectives" },
          { label: "Gallery", href: "/house-of-knowledge/gallery" },
        ],
      },
      {
        label: "Contact",
        href: "/contact"
      },
    ],
  }

  const items = navItems[lang]

  return (
    <nav className="hidden md:flex items-center gap-0.5">
      {items.map((item) => {
        if (item.submenu) {
          return (
            <DropdownMenu key={item.label}>
              <DropdownMenuTrigger asChild>
                <button className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {item.submenu.map((subitem) => (
                    <a href={subitem.href} className="cursor-pointer">
                      <DropdownMenuItem key={subitem.label} asChild style={{ cursor: "pointer" }}>
                          {subitem.label}
                      </DropdownMenuItem>
                    </a>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        }

        return (
          <a
            key={item.label}
            href={item.href}
            className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors whitespace-nowrap"
          >
            {item.label}
          </a>
        )
      })}
    </nav>
  )
}
