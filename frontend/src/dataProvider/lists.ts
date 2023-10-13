// export const sectors = [
//   'Communication Services',
//   'Consumer Discretionary',
//   'Consumer Staples',
//   'Energy',
//   'Financials',
//   'Health Care',
//   'Industrials',
//   'Information Technology',
//   'Materials',
//   'Real Estate',
//   'Utilities',
// ].map(sector => ({ id: sector, name: sector }));

// export const sizes = [
//   { id: 1, name: '1 employee' },
//   { id: 10, name: '2-9 employees' },
//   { id: 50, name: '10-49 employees' },
//   { id: 250, name: '50-249 employees' },
//   { id: 500, name: '250 or more employees' },
// ];


export const certificationProgrammes = [
  { id: 'carbonzero', name: 'Toitū net carbonzero'},
  { id: 'carbonreduce', name: 'Toitū carbonreduce'},
  { id: 'verification-only', name: 'Verification Only'},
];

export const certificationStages = [
  'Certification',
  'Surveillance',
].map(item => ({ id: item, name: item }));

export const auditObjectives = [
  "To determine whether the organisation’s GHG measurements (emissions data and calculations) and reduction(s) meet certification requirements for the Programme as detailed in the Criteria and Scope below.",
  "To determine whether the organisation’s GHG measurement (emissions data and calculations) meet(s) the criteria and requirements of ISO 14064-1:2018 and the intended use of the inventory." 
].map(item => ({ id: item, name: item }));

export const auditCriteria = [
  `ISO 14064-1:2018, ISO 14064-3:2019, Toitū Programme Technical Requirements 3.1, Audit & Certification Technical requirements 3.0, Certification Mark Guide v3.0`,
   `ISO 14064-1:2018, ISO 14064-3:2019, Audit & Certification Technical Requirements 3.0`,
].map(item => ({ id: item, name: item }));

export const auditScope = [
  'All emissions sources required by the Programme within the boundary indicated for the operational activities and services of the nominated legal entity within New Zealand.' ,
  'All Category 1 and 2 emissions sources required by ISO 14064 - 1: 2018 and selected Category 3, 4, 5 & 6 emissions within the boundary indicated for the operational activities and services of the nominated legal entity within New Zealand aligned with the intended use of the inventory'
].map(item => ({ id: item, name: item }));

export const auditType = [
  'Mixed engagement (Verification & Validation)',
  'Validation only',
  'Verification only'
].map(item => ({ id: item, name: item }));
