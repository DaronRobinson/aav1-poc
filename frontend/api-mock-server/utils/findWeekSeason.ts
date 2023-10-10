import { isWithinInterval } from 'date-fns'

import { seasons, weeks } from '../data'

export function findWeekSeason(weekId: number) {
  const week = weeks.find(a => a.id == weekId)

  if (week) {
    return seasons.find(a => isWithinInterval(week.startDate, { start: a.startDate, end: a.endDate  }))
  }

  return null
}