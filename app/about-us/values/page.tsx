import type { Metadata } from "next"
import { ValuesPage } from "@/components/values-page"

export const metadata: Metadata = {
  title: "Valores | U.E. Colegio Modesta Bor",
  description:
    "Valores institucionales del U.E. Colegio Modesta Bor: honestidad, compromiso, responsabilidad, solidaridad y formación integral de la comunidad educativa.",
}

export default function ValuesRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <ValuesPage />
    </main>
  )
}
