import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectos-articulados';

  //firstFormGroup: number = 0;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });

  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });

  sixthFormGroup = this._formBuilder.group({
    sixthCtrl: ['', Validators.required],
  });

  seventhFormGroup = this._formBuilder.group({
    seventhCtrl: ['', Validators.required],
  });

  eighthFormGroup = this._formBuilder.group({
    eighthCtrl: ['', Validators.required],
  });

  ninthFormGroup = this._formBuilder.group({
    ninthCtrl: ['', Validators.required],
  });

  onSum() {
    console.log(this.firstFormGroup.get('firstCtrl').value);
  }

  onSum2() {
    console.log((this.firstFormGroup.get('firstCtrl').value) + (this.secondFormGroup.get('secondCtrl').value));

  }

  sumatoriaNotas() {
    let sumatoria =
      (this.firstFormGroup.get('firstCtrl').value) +
      (this.secondFormGroup.get('secondCtrl').value) +
      (this.thirdFormGroup.get('thirdCtrl').value) +
      (this.fourthFormGroup.get('fourthCtrl').value) +
      (this.fifthFormGroup.get('fifthCtrl').value) +
      (this.sixthFormGroup.get('sixthCtrl').value) +
      (this.seventhFormGroup.get('seventhCtrl').value) +
      (this.eighthFormGroup.get('eighthCtrl').value) +
      (this.ninthFormGroup.get('ninthCtrl').value);
    console.log(sumatoria);

  }
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }

}
