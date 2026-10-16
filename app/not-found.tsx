import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col items-center justify-center gap-4 px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">404</p>
      <h1 className="text-3xl font-bold text-foreground font-heading">Página no encontrada</h1>
      <p className="max-w-md text-muted-foreground">
        La página que buscas no existe o fue movida. Puedes volver al inicio o explorar las secciones del colegio.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className={buttonVariants()}>
          Ir al inicio
        </Link>
        <Link href="/contact" className={buttonVariants({ variant: "outline" })}>
          Contacto
        </Link>
      </div>
    </main>
  )
}
