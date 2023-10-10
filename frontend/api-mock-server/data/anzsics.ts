import { Anzsic } from "../schemas";
import { timestamps } from "./lib";

export const anzsics: Anzsic[] = [
  {
    id: '0011',
    divisionCode: "A",
    division: "Agriculture, Forestry and Fishing",
    subdivision: "Agriculture",
    group: "Nursery and Floriculture Production (001)",
    class: "Nursery Production (Under Cover)",
    label: "Nursery Production (Under Cover) (0011)",
    risk: "L",
    emissionData: "Freight, agrochemicals, organic waste",
  },
  {
    id: '0301',
    divisionCode: "A",
    division: "Agriculture, Forestry and Fishing",
    subdivision: "Forestry and Logging",
    group: "Forestry and Logging (030)",
    class: "Forestry",
    label: "Forestry (0301)",
    risk: "M",
    emissionData: "Vehicles, fuel storage, freight, agrochemicals, process emissions, deforestation, land-use change",
  },
  {
    id: '2142',
    divisionCode: "C",
    division: "Manufacturing",
    subdivision: "Primary Metal and Metal Product Manufacturing",
    group: "Basic Non-Ferrous Metal Product Manufacturing (214)",
    class: "Aluminium Rolling, Drawing, Extruding",
    label: "Aluminium Rolling, Drawing, Extruding (2142)",
    risk: "H",
    emissionData: "Freight, furnaces, process emissions, wastewater treatment",
  },
  {
    id: '4221',
    divisionCode: "G",
    division: "Retail Trade",
    subdivision: "Other Store-Based Retailing",
    group: "Electrical and Electronic Goods Retailing (422)",
    class: "Electrical, Electronic and Gas Appliance Retailing",
    label: "Electrical, Electronic and Gas Appliance Retailing (4221)",
    risk: "L",
    emissionData: "CGC1",
  },
  {
    id: '4900',
    divisionCode: "I",
    division: "Transport, Postal and Warehousing",
    subdivision: "Air and Space Transport",
    group: "Air and Space Transport (490)",
    class: "Air and Space Transport",
    label: "Air and Space Transport (4900)",
    risk: "H",
    emissionData: "Aircraft, freight, air conditioning, refrigeration, catering, waste & sewerage disposal",
  },
  {
    id: '5809',
    divisionCode: "J",
    division: "Information Media and Telecommunications",
    subdivision: "Telecommunications Services",
    group: "Telecommunications Services (580)",
    class: "Other Telecommunications Services",
    label: "Other Telecommunications Services (5809)",
    risk: "M",
    emissionData: "Electrical switch gear and circuit breakers - likely to have SF6, freight, contractors",
  }
];


