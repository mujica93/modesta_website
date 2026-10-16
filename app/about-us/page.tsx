import type { Metadata } from "next"
import { AboutUsIndexPage } from "@/components/about-us-index-page"

export const metadata: Metadata = {
  title: "Sobre nosotros | U.E. Colegio Modesta Bor",
  description:
    "Conozca la identidad, misión, valores, servicios y convivencia del U.E. Colegio Modesta Bor.",
}

export default function AboutUsRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutUsIndexPage />
    </main>
  )
}
