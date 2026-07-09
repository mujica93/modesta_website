import type { Metadata } from "next"
import { HomePage } from "@/components/home-page"

export const metadata: Metadata = {
  title: "U.E. Colegio Modesta Bor - La Casa de los Saberes",
  description:
    "Contribuir con el desarrollo integral de los estudiantes en forma intelectual, afectiva, social, física, artística, espiritual y con el autodescubrimiento de los talentos especiales de cada uno.",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HomePage />
    </main>
  )
}
