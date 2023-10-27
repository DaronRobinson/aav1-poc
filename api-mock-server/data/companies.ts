import { Company } from '../schemas'
import { timestamps } from './lib'

export const companyIds = {
  ovation: 9215,
  teKuiti: 9217
}

export const companies: Company[] = [
  {
    id:   companyIds.ovation,
    name: 'Ovation',
    ...timestamps
  },
  {
    id:   companyIds.teKuiti,
    name: 'Te Kuiti',
    ...timestamps
  }
]