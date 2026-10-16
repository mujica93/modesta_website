import type { Metadata } from "next"
import { ScholarshipsPage } from "@/components/scholarships-page"

export const metadata: Metadata = {
  title: "Becas de Rendimiento | U.E. Colegio Modesta Bor",
  description:
    "Becas y reconocimientos académicos, deportivos y artísticos del U.E. Colegio Modesta Bor.",
}

export default function ScholarshipsRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <ScholarshipsPage />
    </main>
  )
}
