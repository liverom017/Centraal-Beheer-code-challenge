import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KentekenformatterService {
  constructor() {}
  /**
   * Kentereken formatter, zet de letter naar uppercase
   * en zet een streepje in het midden
   * @param kenteken
   * @returns
   */
  formatKenteken(kenteken: string) {
    kenteken = kenteken.toUpperCase();
    return (
      kenteken.slice(0, 2) +
      '-' +
      kenteken.slice(2, 4) +
      '-' +
      kenteken.slice(4, 6)
    );
  }
}
