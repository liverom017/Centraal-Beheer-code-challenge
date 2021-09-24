import { Injectable } from '@angular/core';
import { voertuigenLijst } from 'src/voertuigenData';
import { voertuigType, subType } from 'src/Interfaces';

@Injectable({
  providedIn: 'root',
})
export class FormdataService {
  constructor() {}
  /**
   * Getters voor form velden data
   * op een live site kan dit worden verandert
   * om data van een database te halen
   * @returns
   */
  getVtList(): voertuigType[] {
    return voertuigenLijst;
  }

  getSubList(index: number): subType[] {
    return voertuigenLijst[index].subCatogieen!;
  }

  getURL(index: number): string {
    return voertuigenLijst[index].url;
  }
}
