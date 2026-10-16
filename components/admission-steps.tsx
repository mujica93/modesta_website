"use client"

import { useLang } from "@/lib/i18n"
import type { AdmissionStep } from "@/lib/admission-data"

type AdmissionStepsProps = {
  steps: AdmissionStep[]
}

export function AdmissionSteps({ steps }: AdmissionStepsProps) {
  const { lang } = useLang()

  return (
    <ol className="grid gap-4 sm:grid-cols-2">
      {steps.map((step) => (
        <li
          key={step.id}
          className="rounded-2xl border border-border bg-card p-5 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-sm font-bold text-primary font-heading">
              {step.number}
            </span>
            <div>
              <h3 className="font-semibold text-foreground font-heading">{step.title[lang]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description[lang]}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}
