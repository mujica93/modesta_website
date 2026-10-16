import type { Metadata } from "next"
import { AdmissionPage } from "@/components/admission-page"

export const metadata: Metadata = {
  title: "Admisión | U.E. Colegio Modesta Bor",
  description:
    "Conozca el proceso de admisión del U.E. Colegio Modesta Bor y solicite una entrevista para iniciar la inscripción.",
}

export default function AdmissionRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <AdmissionPage />
    </main>
  )
}
