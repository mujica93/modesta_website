import type { Metadata } from "next"
import { AlumniPage } from "@/components/alumni-page"

export const metadata: Metadata = {
  title: "Ex Alumnos | U.E. Colegio Modesta Bor",
  description:
    "Historias y logros de egresados del U.E. Colegio Modesta Bor en distintas trayectorias profesionales.",
}

export default function AlumniRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <AlumniPage />
    </main>
  )
}
