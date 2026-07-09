import type { Metadata } from "next"
import { FootprintModestaBorPage } from "@/components/footprint-modesta-bor-page"

export const metadata: Metadata = {
  title: "La huella de Modesta Bor | U.E. Colegio Modesta Bor",
  description:
    "Biografía de Modesta Bor, compositora venezolana que inspira la identidad del U.E. Colegio Modesta Bor — La Casa de los Saberes.",
}

export default function FootprintModestaBorRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <FootprintModestaBorPage />
    </main>
  )
}
