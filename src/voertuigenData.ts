import { voertuigType, subType } from './Interfaces';

export const voertuigenLijst: voertuigType[] = [
  {
    id: 0,
    type: 'Auto',
    url: '../../assets/auto.jpg',
    selected: false,
    subCatogieen: [
      { subtype: 'Hatchback', kenteken: '' },
      { subtype: 'Sedan', kenteken: '' },
      { subtype: 'Station', kenteken: '' },
      { subtype: 'Cabriolet', kenteken: '' },
      { subtype: 'Coupé', kenteken: '' },
      { subtype: 'Multi Purpose Vehicle (MVP)', kenteken: '' },
      { subtype: 'Terreinauto', kenteken: '' },
    ],
  },
  {
    id: 1,
    type: 'Motor',
    url: '../../assets/motor.jpg',
    selected: false,
    subCatogieen: [
      { subtype: 'All-road', kenteken: '' },
      { subtype: 'Naked', kenteken: '' },
      { subtype: 'Enduro', kenteken: '' },
      { subtype: 'Race', kenteken: '' },
      { subtype: 'Toermotor', kenteken: '' },
      { subtype: 'Chopper', kenteken: '' },
      { subtype: 'Zijspan', kenteken: '' },
    ],
  },
  {
    id: 2,
    type: 'Scooter',
    url: '../../assets/scooter.jpg',
    selected: false,
    subCatogieen: [],
  },
];
