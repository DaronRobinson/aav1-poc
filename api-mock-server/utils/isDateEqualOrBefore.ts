import { isAfter, isBefore, isEqual } from 'date-fns'

export function isDateEqualOrBefore(dateLeft: Date, dateRight: Date) {
  return isEqual(dateLeft, dateRight) || isBefore(dateLeft, dateRight)
}