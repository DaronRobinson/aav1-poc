import type { ConfigFile } from '@rtk-query/codegen-openapi'

export default {
  schemaFile:     'http://localhost:3000/documentation/json',
  apiFile:        '../src/store/apiBase.ts',
  outputFile:     '../src/store/api.ts',
  apiImport:      'apiBase',
  exportName:     'api',
  hooks:          true,
  argSuffix:      'Request',
  responseSuffix: 'Result'
} satisfies ConfigFile