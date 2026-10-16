import type { Metadata } from "next"
import { PartnersPage } from "@/components/partners-page"

export const metadata: Metadata = {
  title: "Socios y Amigos | U.E. Colegio Modesta Bor",
  description:
    "Alianzas estratégicas del U.E. Colegio Modesta Bor con UPEL-IPB, FUNDELA, FUNDAESCUCHARTE y RIOM.",
}

export default function PartnersRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <PartnersPage />
    </main>
  )
}
