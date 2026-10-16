import type { Metadata } from "next"
import { GalleryPage } from "@/components/gallery-page"

export const metadata: Metadata = {
  title: "Galería | U.E. Colegio Modesta Bor",
  description:
    "Galería de momentos escolares del U.E. Colegio Modesta Bor: arte, proyectos, tradiciones y convivencia.",
}

export default function GalleryRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <GalleryPage />
    </main>
  )
}
