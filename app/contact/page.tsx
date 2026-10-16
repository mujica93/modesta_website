import type { Metadata } from "next"
import { ContactPageView } from "@/components/contact-page"

export const metadata: Metadata = {
  title: "Contacto | U.E. Colegio Modesta Bor",
  description:
    "Contacte a la U.E. Colegio Modesta Bor: dirección en Cabudare, teléfono 0251 263 2132 y correo pcuecmodestabor@gmail.com.",
}

export default function ContactRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <ContactPageView />
    </main>
  )
}
