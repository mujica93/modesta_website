"use client"

import { BookOpen, Check, ClipboardList } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { useLang } from "@/lib/i18n"
import type { Grade } from "@/lib/supplies-data"

export function GradeDialog({
  grade,
  open,
  onOpenChange,
}: {
  grade: Grade | null
  open: boolean
  onOpenChange: (o: boolean) => void
}) {
  const { lang, t } = useLang()
  if (!grade) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] gap-0 overflow-y-auto p-0 sm:max-w-2xl">
        <DialogHeader className="sticky top-0 z-10 border-b border-border bg-card px-6 py-4 text-left">
          <DialogTitle className="text-xl font-heading">{grade.name[lang]}</DialogTitle>
          <DialogDescription>
            {t("hero.badge")}
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-6 px-6 py-6">
          {/* Standard blocks */}
          {grade.blocks?.map((block) => (
            <div key={block.title.es} className="flex flex-col gap-3">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-primary">
                {block.title.es.toLowerCase().includes("text") ? (
                  <BookOpen className="h-4 w-4" />
                ) : (
                  <ClipboardList className="h-4 w-4" />
                )}
                {block.title[lang]}
              </h3>
              <ul className="grid gap-1.5 sm:grid-cols-2">
                {block.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Subject table (bachillerato) */}
          {grade.subjects && (
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-2.5 font-semibold text-foreground">{t("list.subject")}</th>
                    <th className="px-4 py-2.5 font-semibold text-foreground">{t("list.required")}</th>
                  </tr>
                </thead>
                <tbody>
                  {grade.subjects.map((s, i) => (
                    <tr key={i} className="border-t border-border align-top">
                      <td className="px-4 py-3 font-medium text-primary">{s.subject}</td>
                      <td className="px-4 py-3 leading-relaxed text-foreground/90">{s.items}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Notes */}
          {grade.notes && (
            <div className="flex flex-col gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
              <span className="text-sm font-semibold text-foreground">{t("list.notes")}</span>
              {grade.notes.map((n, i) => (
                <p key={i} className="text-sm leading-relaxed text-foreground/80">
                  {n[lang]}
                </p>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
