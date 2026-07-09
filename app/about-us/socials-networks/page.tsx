import type { Metadata } from "next"
import { SocialsNetworksPage } from "@/components/socials-networks-page"

export const metadata: Metadata = {
  title: "Nuestras Redes | U.E. Colegio Modesta Bor",
  description:
    "Síguenos en Instagram @uecolegiomodestabor y en YouTube para conocer la vida escolar, proyectos educativos y novedades del U.E. Colegio Modesta Bor.",
}

export default function SocialsNetworksRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <SocialsNetworksPage />
    </main>
  )
}
