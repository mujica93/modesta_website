/** School year in Venezuela typically starts around September. */
export function getSchoolYearBounds(date = new Date()) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const startYear = month >= 9 ? year : year - 1
  const endYear = startYear + 1

  return { startYear, endYear }
}

export function getSchoolYearLabel(date = new Date()) {
  const { startYear, endYear } = getSchoolYearBounds(date)
  return `${startYear}-${endYear}`
}

export function getSchoolYearShortLabel(date = new Date()) {
  const { startYear, endYear } = getSchoolYearBounds(date)
  return `${startYear}-${String(endYear).slice(-2)}`
}
