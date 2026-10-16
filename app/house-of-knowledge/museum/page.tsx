import type { Metadata } from "next"
import { MuseumPage } from "@/components/museum-page"

export const metadata: Metadata = {
  title: "Museo Virtual 2022 | U.E. Colegio Modesta Bor",
  description:
    "Museo Virtual 2022 del U.E. Colegio Modesta Bor: proyecto de Arte y Patrimonio de estudiantes de 1° Año.",
}

export default function MuseumRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <MuseumPage />
    </main>
  )
}
