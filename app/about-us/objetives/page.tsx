import type { Metadata } from "next"
import { ObjectivesPage } from "@/components/objectives-page"

export const metadata: Metadata = {
  title: "Objetivos | U.E. Colegio Modesta Bor",
  description:
    "Objetivos del U.E. Colegio Modesta Bor: fomentar el desarrollo integral de los estudiantes con valores, en un centro educacional de Básica, Media y Diversificada.",
}

export default function ObjectivesRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <ObjectivesPage />
    </main>
  )
}
