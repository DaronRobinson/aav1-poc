import { isAfter, isEqual } from 'date-fns'

export function isDateEqualOrAfter(dateLeft: Date, dateRight: Date) {
  return isEqual(dateLeft, dateRight) || isAfter(dateLeft, dateRight)
}