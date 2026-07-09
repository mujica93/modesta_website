import type { Metadata } from "next"
import { ConvivialityManualPage } from "@/components/conviviality-manual-page"

export const metadata: Metadata = {
  title: "Manual de Convivencia | U.E. Colegio Modesta Bor",
  description:
    "Manual de convivencia escolar del U.E. Colegio Modesta Bor: derechos, deberes y responsabilidades de estudiantes, padres y representantes.",
}

export default function ConvivialityRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <ConvivialityManualPage />
    </main>
  )
}
