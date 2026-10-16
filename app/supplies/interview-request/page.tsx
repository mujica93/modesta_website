import type { Metadata } from "next"
import { InterviewRequestPage } from "@/components/interview-request-page"

export const metadata: Metadata = {
  title: "Solicitud de Entrevista | U.E. Colegio Modesta Bor",
  description:
    "Solicite una entrevista para el proceso de admisión del U.E. Colegio Modesta Bor mediante el formulario oficial.",
}

export default function InterviewRequestRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <InterviewRequestPage />
    </main>
  )
}
