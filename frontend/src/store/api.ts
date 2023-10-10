import { apiBase as api } from "./apiBase";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    addressesSearch: build.query<AddressesSearchResult, AddressesSearchRequest>(
      {
        query: () => ({ url: `/addresses` }),
      }
    ),
    addressessFind: build.query<AddressessFindResult, AddressessFindRequest>({
      query: (queryArg) => ({ url: `/addresses/${queryArg.addressId}` }),
    }),
    anzsicsSearch: build.query<AnzsicsSearchResult, AnzsicsSearchRequest>({
      query: () => ({ url: `/anzsics` }),
    }),
    anzsicsFind: build.query<AnzsicsFindResult, AnzsicsFindRequest>({
      query: (queryArg) => ({ url: `/anzsics/${queryArg.anzsicCode}` }),
    }),
    businessUnitSearch: build.query<
      BusinessUnitSearchResult,
      BusinessUnitSearchRequest
    >({
      query: () => ({ url: `/businessUnits` }),
    }),
    businessUnitFind: build.query<
      BusinessUnitFindResult,
      BusinessUnitFindRequest
    >({
      query: (queryArg) => ({
        url: `/businessUnits/${queryArg.businessUnitId}`,
      }),
    }),
    contactsSearch: build.query<ContactsSearchResult, ContactsSearchRequest>({
      query: () => ({ url: `/contacts` }),
    }),
    contactsFind: build.query<ContactsFindResult, ContactsFindRequest>({
      query: (queryArg) => ({ url: `/contacts/${queryArg.contactId}` }),
    }),
    organisationsSearch: build.query<
      OrganisationsSearchResult,
      OrganisationsSearchRequest
    >({
      query: () => ({ url: `/organisations` }),
    }),
    organisationsFind: build.query<
      OrganisationsFindResult,
      OrganisationsFindRequest
    >({
      query: (queryArg) => ({
        url: `/organisations/${queryArg.organisationId}`,
      }),
    }),
    usersSearch: build.query<UsersSearchResult, UsersSearchRequest>({
      query: () => ({ url: `/users` }),
    }),
    usersFind: build.query<UsersFindResult, UsersFindRequest>({
      query: (queryArg) => ({ url: `/users/${queryArg.userId}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as api };
export type AddressesSearchResult =
  /** status 200 Default Response */ (Address & {})[];
export type AddressesSearchRequest = void;
export type AddressessFindResult =
  /** status 200 Default Response */ Address & {};
export type AddressessFindRequest = {
  addressId: string;
};
export type AnzsicsSearchResult =
  /** status 200 Default Response */ (Anzsic & {})[];
export type AnzsicsSearchRequest = void;
export type AnzsicsFindResult = /** status 200 Default Response */ Anzsic & {};
export type AnzsicsFindRequest = {
  anzsicCode: string;
};
export type BusinessUnitSearchResult =
  /** status 200 Default Response */ (BusinessUnit & {})[];
export type BusinessUnitSearchRequest = void;
export type BusinessUnitFindResult =
  /** status 200 Default Response */ BusinessUnit & {};
export type BusinessUnitFindRequest = {
  businessUnitId: string;
};
export type ContactsSearchResult =
  /** status 200 Default Response */ (Contact & {})[];
export type ContactsSearchRequest = void;
export type ContactsFindResult =
  /** status 200 Default Response */ Contact & {};
export type ContactsFindRequest = {
  contactId: string;
};
export type OrganisationsSearchResult =
  /** status 200 Default Response */ (Organisation & {})[];
export type OrganisationsSearchRequest = void;
export type OrganisationsFindResult =
  /** status 200 Default Response */ Organisation & {};
export type OrganisationsFindRequest = {
  organisationId: string;
};
export type UsersSearchResult =
  /** status 200 Default Response */ (User & {})[];
export type UsersSearchRequest = void;
export type UsersFindResult = /** status 200 Default Response */ User & {};
export type UsersFindRequest = {
  userId: string;
};
export type Address = {
  id: string;
  businessUnitId: string;
  isPrimaryAddress: boolean;
  streetAddress: string;
  suburb: string;
  city: string;
  stateOrProvince: string;
  postCode: string;
  country: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
export type Anzsic = {
  id: string;
  divisionCode: string;
  division: string;
  subdivision: string;
  group: string;
  class: string;
  label: string;
  risk: string;
  emissionData: string;
};
export type BusinessUnit = {
  id: string;
  organisationId: string;
  addressId: string;
  name: string;
  type: string;
  country: string;
  isHeadOffice: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
export type Contact = {
  id: string;
  organisationId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
export type Organisation = {
  id: string;
  name: string;
  legalName: string;
  type: string;
  businessType: string;
  highestParentCompanyId: string;
  highestParentCompany: string;
  description: string;
  statementOfIntent: string;
  anzsicCode: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  lastLogin: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
export const {
  useAddressesSearchQuery,
  useAddressessFindQuery,
  useAnzsicsSearchQuery,
  useAnzsicsFindQuery,
  useBusinessUnitSearchQuery,
  useBusinessUnitFindQuery,
  useContactsSearchQuery,
  useContactsFindQuery,
  useOrganisationsSearchQuery,
  useOrganisationsFindQuery,
  useUsersSearchQuery,
  useUsersFindQuery,
} = injectedRtkApi;
