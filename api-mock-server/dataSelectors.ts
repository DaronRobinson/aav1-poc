import { isAfter, isBefore } from 'date-fns'
import { isDate } from 'lodash'

import { weeks } from './data'

export function searchWeeksByStartEndDates(startDate?: Date | null, endDate?: Date | null) {
  return weeks.filter(
    a =>
      (!isDate(endDate) || isBefore(a.startDate, endDate)) &&
      (!isDate(startDate) || isAfter(a.endDate, startDate))
  )
}