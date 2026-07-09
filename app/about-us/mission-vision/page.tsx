import type { Metadata } from "next"
import { MissionVisionPage } from "@/components/mission-vision-page"

export const metadata: Metadata = {
  title: "Misión y Visión | U.E. Colegio Modesta Bor",
  description:
    "Misión y visión del U.E. Colegio Modesta Bor: desarrollo integral de los estudiantes y excelencia académica con formación en valores.",
}

export default function MissionVisionRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <MissionVisionPage />
    </main>
  )
}
