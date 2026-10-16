import type { Metadata } from "next"
import { HouseOfKnowledgeIndexPage } from "@/components/house-of-knowledge-index-page"

export const metadata: Metadata = {
  title: "Casa de los Saberes | U.E. Colegio Modesta Bor",
  description:
    "Explore el museo virtual, becas, ex alumnos, socios, perspectivas y galería del U.E. Colegio Modesta Bor.",
}

export default function HouseOfKnowledgeRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <HouseOfKnowledgeIndexPage />
    </main>
  )
}
