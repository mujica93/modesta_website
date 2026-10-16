import type { Metadata } from "next"
import { PerspectivesPage } from "@/components/perspectives-page"

export const metadata: Metadata = {
  title: "Perspectivas del Colegio | U.E. Colegio Modesta Bor",
  description:
    "Instalaciones y planta física de La Casa de los Saberes: espacios para el aprendizaje y la vida escolar.",
}

export default function PerspectivesRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <PerspectivesPage />
    </main>
  )
}
