import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { KentekenformatterService } from 'src/app/services/kentekenformatter.service';
import { FormdataService } from 'src/app/services/formdata.service';
import { voertuigType, subType } from 'src/Interfaces';
// import { KentekenCheck } from 'rdw-kenteken-check/src/kenteken-check-nl-class';

@Component({
  selector: 'app-vt-form',
  templateUrl: './vt-form.component.html',
  styleUrls: ['./vt-form.component.css'],
})
export class VtFormComponent implements OnInit {
  catogorieForm: FormGroup;
  vt: voertuigType[] = this.fs.getVtList();
  subT: subType[] = [];
  @Input() URL: string = '../../../assets/auto.jpg';
  kentekenF: string = '';

  constructor(
    private fb: FormBuilder,
    private fs: FormdataService,
    private ktf: KentekenformatterService
  ) {}

  ngOnInit(): void {
    this.catogorieForm = this.fb.group({
      catogorien: [null, Validators.required],
      subCat: [null, Validators.required],
      kenteken: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(8),
          Validators.pattern('[a-zA-Z 0-9 -]*'),
        ],
      ],
    });
  }

  /**
   * Getters
   */
  get getKenteken() {
    return this.catogorieForm.get('kenteken')?.value;
  }

  get getSubType() {
    return this.catogorieForm.get('subCat')?.value.subtype;
  }

  get getSelectCat() {
    return this.catogorieForm.get('catogorien')?.value;
  }

  /**
   * Setter
   * @param formated
   */

  setKenteken(formated: string) {
    this.catogorieForm.controls['kenteken'].setValue(formated);
  }

  /**
   * On select event handler
   * Als een voertuig catogorie wordt geslecteerd
   * Set de URL van de foto naar dat van de voertuig
   * catogorie
   * Als de sub type lijst niet leeg is
   * vraagt ie de lijst op van de service.
   * Hij maakt ook de lijst als de keuze wordt aangepast
   * @param e
   */
  onSelect(e: Event) {
    this.URL = this.fs.getURL(this.getSelectCat.id);
    if (this.getSelectCat.subCatogieen.length > 0) {
      this.subT = this.fs.getSubList(this.getSelectCat.id);
    } else {
      this.subT = [];
    }
  }

  /**
   * On Input event
   * Als de gebruiker 6 tekens heeft ingevoerd
   * formaat die de string naar de uppercase
   * met -
   */
  onInput(e: Event) {
    if (this.getKenteken.length == 6) {
      this.setKenteken(this.ktf.formatKenteken(this.getKenteken));
      console.log(this.kentekenF);
    }
  }

  /** On Submit
   * Voor dit project werken we offline
   * maar in het echt kunnen we hier de Form
   * values omzetten naar JSON (JSON.stringfy) en
   * sturen via https
   */
  onSubmit(e: Event) {
    console.log(this.getSelectCat.type, this.getSubType, this.getKenteken);
  }
}

