import type { Metadata } from "next"
import { PaymentsPage } from "@/components/payments-page"

export const metadata: Metadata = {
  title: "Reporte de Pagos | U.E. Colegio Modesta Bor",
  description:
    "Reporte su pago a la administración del colegio mediante el formulario oficial. Este reporte no constituye una factura fiscal.",
}

export default function PaymentsRoutePage() {
  return (
    <main className="min-h-screen bg-background">
      <PaymentsPage />
    </main>
  )
}
