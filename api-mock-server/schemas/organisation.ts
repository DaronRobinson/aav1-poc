import { Static, Type } from '@sinclair/typebox'

import { ApiDate, defineSchema, Nullable } from './typebox'

export type Organisation = Static<typeof organisationSchema>
export const [organisationSchema, organisationSchemaRef] = defineSchema('Organisation', Type.Object({
  id: Type.String(),
  name: Type.String(),
  legalName: Type.String(),
  type: Type.String(),
  businessType: Type.String(),
  highestParentCompanyId: Type.String(),
  highestParentCompany: Type.String(),//denormalised?
  description: Type.String(),
  statementOfIntent: Type.String(),
  anzsicCode: Type.String(),
  createdAt: ApiDate(),
  updatedAt: ApiDate(),
  deletedAt: Nullable(ApiDate())
}))


// {
//   "organisationId": "O-123",
//     "organisationName": "Example Co",
//       "organisationLegalName": "Legal Example Co", // For New Zealand, we can check it from here https://companies-register.companiesoffice.govt.nz/
//         "organisationType": "Limited",
//           "businessType": "Manufacturing",
//             "highestParentCompanyId": "O-123",
//               "highestParentCompany": "Example Co", // Can be other value
//                 "organisationDescription": "Loremipsum long description as company description/introduction text in Markdown",
//                   "statementOfIntent": "Describe intended use and users in Markdown for reporting generation",
//                     "anzsic": {
//     "class": "",
//       "group": "",
//         "subdivision": "",
//           "division": ""
//   }
// }