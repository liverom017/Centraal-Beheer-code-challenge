// Interface voor de voortuig catogorie & subtype
export interface subType {
  id?: number;
  subtype: string;
  kenteken: string;
}

export interface voertuigType {
  id?: number;
  type: string;
  url: string;
  selected: boolean;
  subCatogieen?: subType[];
}
