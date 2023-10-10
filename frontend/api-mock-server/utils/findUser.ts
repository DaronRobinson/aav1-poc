import { agents, livestockAdmins, plantCoordinators, procurementManagers, regionalManagers, vendorSupportUsers, vendors } from '../data'

export function findUser(userId: number) {
  const allUser = [
    ...agents,
    ...livestockAdmins,
    ...plantCoordinators,
    ...procurementManagers,
    ...regionalManagers,
    ...vendors,
    ...vendorSupportUsers
  ]

  return allUser.find(a => a.id == userId)
}