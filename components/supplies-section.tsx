"use client"

import { useMemo, useState } from "react"
import { Search, BookOpen, ClipboardList, ArrowRight, GraduationCap } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useLang } from "@/lib/i18n"
import { GRADES, LEVELS, type Grade, type LevelId } from "@/lib/supplies-data"
import { GradeDialog } from "@/components/grade-dialog"

function countItems(grade: Grade) {
  if (grade.subjects) return grade.subjects.length
  return grade.blocks?.reduce((acc, b) => acc + b.items.length, 0) ?? 0
}

export function SuppliesSection() {
  const { lang, t } = useLang()
  const [query, setQuery] = useState("")
  const [activeLevel, setActiveLevel] = useState<LevelId | "all">("all")
  const [selected, setSelected] = useState<Grade | null>(null)
  const [open, setOpen] = useState(false)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return GRADES.filter((g) => {
      const matchLevel = activeLevel === "all" || g.level === activeLevel
      const matchQuery =
        q === "" ||
        g.name.es.toLowerCase().includes(q) ||
        g.name.en.toLowerCase().includes(q) ||
        g.short.toLowerCase().includes(q)
      return matchLevel && matchQuery
    })
  }, [query, activeLevel])

  const openGrade = (g: Grade) => {
    setSelected(g)
    setOpen(true)
  }

  const filters: { id: LevelId | "all"; label: string }[] = [
    { id: "all", label: t("filter.all") },
    ...LEVELS.map((l) => ({ id: l.id, label: l.name[lang] })),
  ]

  return (
    <section id="listas" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:px-6 md:py-20">
      <div className="flex flex-col gap-6">
        {/* Search + filters */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("search.placeholder")}
              className="pl-9"
              aria-label={t("search.placeholder")}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveLevel(f.id)}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeLevel === f.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border py-16 text-center text-muted-foreground">
            {t("list.empty")}
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((g) => {
              const level = LEVELS.find((l) => l.id === g.level)
              const count = countItems(g)
              return (
                <button
                  key={g.id}
                  onClick={() => openGrade(g)}
                  className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary font-heading">
                      {g.short}
                    </span>
                    <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                      {level?.name[lang]}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-foreground font-heading">{g.name[lang]}</h3>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      {g.subjects ? (
                        <>
                          <BookOpen className="h-3.5 w-3.5" />
                          {count} {t("card.subjects")}
                        </>
                      ) : (
                        <>
                          <ClipboardList className="h-3.5 w-3.5" />
                          {count} {t("card.items")}
                        </>
                      )}
                    </span>
                  </div>
                  <span className="mt-auto flex items-center gap-1 text-sm font-medium text-primary">
                    {t("card.view")}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              )
            })}
          </div>
        )}
      </div>

      <GradeDialog grade={selected} open={open} onOpenChange={setOpen} />
    </section>
  )
}
