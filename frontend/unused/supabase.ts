export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      addresses: {
        Row: {
          businessUnitId: number | null
          city: string | null
          country: string | null
          createdAt: string | null
          deletedAt: string | null
          id: number
          isPrimaryAddress: boolean | null
          postCode: number | null
          stateOrProvince: string | null
          streetAddress: string | null
          suburb: string | null
          updatedAt: string | null
        }
        Insert: {
          businessUnitId?: number | null
          city?: string | null
          country?: string | null
          createdAt?: string | null
          deletedAt?: string | null
          id?: number
          isPrimaryAddress?: boolean | null
          postCode?: number | null
          stateOrProvince?: string | null
          streetAddress?: string | null
          suburb?: string | null
          updatedAt?: string | null
        }
        Update: {
          businessUnitId?: number | null
          city?: string | null
          country?: string | null
          createdAt?: string | null
          deletedAt?: string | null
          id?: number
          isPrimaryAddress?: boolean | null
          postCode?: number | null
          stateOrProvince?: string | null
          streetAddress?: string | null
          suburb?: string | null
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "addresses_businessUnitId_fkey"
            columns: ["businessUnitId"]
            referencedRelation: "businessUnits"
            referencedColumns: ["id"]
          }
        ]
      }
      anzsics: {
        Row: {
          class: string | null
          division: string | null
          divisionCode: string | null
          emissionData: string | null
          group: string | null
          id: string
          label: string | null
          risk: string | null
          subdivision: string | null
        }
        Insert: {
          class?: string | null
          division?: string | null
          divisionCode?: string | null
          emissionData?: string | null
          group?: string | null
          id: string
          label?: string | null
          risk?: string | null
          subdivision?: string | null
        }
        Update: {
          class?: string | null
          division?: string | null
          divisionCode?: string | null
          emissionData?: string | null
          group?: string | null
          id?: string
          label?: string | null
          risk?: string | null
          subdivision?: string | null
        }
        Relationships: []
      }
      businessUnits: {
        Row: {
          addressId: number | null
          country: string | null
          createdAt: string | null
          deletedAt: string | null
          id: number
          isHeadOffice: boolean | null
          name: string | null
          organisationId: number | null
          type: string | null
          updatedAt: string | null
        }
        Insert: {
          addressId?: number | null
          country?: string | null
          createdAt?: string | null
          deletedAt?: string | null
          id?: number
          isHeadOffice?: boolean | null
          name?: string | null
          organisationId?: number | null
          type?: string | null
          updatedAt?: string | null
        }
        Update: {
          addressId?: number | null
          country?: string | null
          createdAt?: string | null
          deletedAt?: string | null
          id?: number
          isHeadOffice?: boolean | null
          name?: string | null
          organisationId?: number | null
          type?: string | null
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "businessUnits_addressId_fkey"
            columns: ["addressId"]
            referencedRelation: "addresses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "businessUnits_organisationId_fkey"
            columns: ["organisationId"]
            referencedRelation: "organisations"
            referencedColumns: ["id"]
          }
        ]
      }
      contacts: {
        Row: {
          createdAt: string | null
          deletedAt: string | null
          email: string | null
          firstName: string | null
          id: number
          lastName: string | null
          organisationId: number | null
          phone: number | null
          role: string | null
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string | null
          deletedAt?: string | null
          email?: string | null
          firstName?: string | null
          id?: number
          lastName?: string | null
          organisationId?: number | null
          phone?: number | null
          role?: string | null
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string | null
          deletedAt?: string | null
          email?: string | null
          firstName?: string | null
          id?: number
          lastName?: string | null
          organisationId?: number | null
          phone?: number | null
          role?: string | null
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contacts_organisationId_fkey"
            columns: ["organisationId"]
            referencedRelation: "organisations"
            referencedColumns: ["id"]
          }
        ]
      }
      organisations: {
        Row: {
          anzsicCode: string | null
          businessType: string | null
          createdAt: string | null
          deletedAt: string | null
          description: string | null
          highestParentCompany: string | null
          highestParentCompanyId: number | null
          id: number
          legalName: string | null
          name: string | null
          statementOfIntent: string | null
          type: string | null
          updatedAt: string | null
        }
        Insert: {
          anzsicCode?: string | null
          businessType?: string | null
          createdAt?: string | null
          deletedAt?: string | null
          description?: string | null
          highestParentCompany?: string | null
          highestParentCompanyId?: number | null
          id?: number
          legalName?: string | null
          name?: string | null
          statementOfIntent?: string | null
          type?: string | null
          updatedAt?: string | null
        }
        Update: {
          anzsicCode?: string | null
          businessType?: string | null
          createdAt?: string | null
          deletedAt?: string | null
          description?: string | null
          highestParentCompany?: string | null
          highestParentCompanyId?: number | null
          id?: number
          legalName?: string | null
          name?: string | null
          statementOfIntent?: string | null
          type?: string | null
          updatedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "organisations_anzsicCode_fkey"
            columns: ["anzsicCode"]
            referencedRelation: "anzsics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "organisations_highestParentCompanyId_fkey"
            columns: ["highestParentCompanyId"]
            referencedRelation: "organisations"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          createdAt: string | null
          deletedAt: string | null
          email: string | null
          firstName: string | null
          id: number
          lastLogin: string | null
          lastName: string | null
          password: string | null
          role: string | null
          updatedAt: string | null
        }
        Insert: {
          createdAt?: string | null
          deletedAt?: string | null
          email?: string | null
          firstName?: string | null
          id?: number
          lastLogin?: string | null
          lastName?: string | null
          password?: string | null
          role?: string | null
          updatedAt?: string | null
        }
        Update: {
          createdAt?: string | null
          deletedAt?: string | null
          email?: string | null
          firstName?: string | null
          id?: number
          lastLogin?: string | null
          lastName?: string | null
          password?: string | null
          role?: string | null
          updatedAt?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
