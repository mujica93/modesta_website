import type { Metadata } from "next"
import { ServicesPage } from "@/components/services-page"

export const metadata: Metadata = {
  title: "Servicios | U.E. Colegio Modesta Bor",
  description:
    "Servicios educativos del U.E. Colegio Modesta Bor: educación musical, deporte, inglés y atención personalizada para la formación integral de los estudiantes.",
}

export default function ServicesRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <ServicesPage />
    </main>
  )
}
