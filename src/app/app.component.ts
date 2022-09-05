import { FormBuilder, Validators } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectos-articulados';

  public resultadoEvaluacion: string = "";
  public porcentajeTotal: number = 0;
  public sumatoria: number = 0;
  //firstFormGroup: number = 0;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    secondCtrl: ['', Validators.required],
    thirdCtrl: ['', Validators.required],
    fourthCtrl: ['', Validators.required],
    fifthCtrl: ['', Validators.required],
    sixthCtrl: ['', Validators.required],
    seventhCtrl: ['', Validators.required],
    eighthCtrl: ['', Validators.required],
    ninthCtrl: ['', Validators.required],

  });


  onSum() {
    console.log(this.firstFormGroup.get('firstCtrl').value);
  }

  onSum2() {
    console.log((this.firstFormGroup.get('firstCtrl').value) + (this.firstFormGroup.get('secondCtrl').value));

  }

  sumatoriaNotas() {
    this.sumatoria =
      (Number(this.firstFormGroup.get('firstCtrl').value)) +
      (Number(this.firstFormGroup.get('secondCtrl').value)) +
      (Number(this.firstFormGroup.get('thirdCtrl').value)) +
      (Number(this.firstFormGroup.get('fourthCtrl').value)) +
      (Number(this.firstFormGroup.get('fifthCtrl').value)) +
      (Number(this.firstFormGroup.get('sixthCtrl').value)) +
      (Number(this.firstFormGroup.get('seventhCtrl').value)) +
      (Number(this.firstFormGroup.get('eighthCtrl').value)) +
      (Number(this.firstFormGroup.get('ninthCtrl').value));
    console.log(this.sumatoria);

    this.porcentajeTotal =
      (2.5 * Number(this.firstFormGroup.get('firstCtrl').value)) +
      (2.5 * Number(this.firstFormGroup.get('secondCtrl').value)) +
      (3.75 * Number(this.firstFormGroup.get('thirdCtrl').value)) +
      (2.50 * Number(this.firstFormGroup.get('fourthCtrl').value)) +
      (3.75 * Number(this.firstFormGroup.get('fifthCtrl').value)) +
      (1.25 * Number(this.firstFormGroup.get('sixthCtrl').value)) +
      (1.25 * Number(this.firstFormGroup.get('seventhCtrl').value)) +
      (3.75 * Number(this.firstFormGroup.get('eighthCtrl').value)) +
      (3.75 * Number(this.firstFormGroup.get('ninthCtrl').value));



    if (this.porcentajeTotal >= 76) {
      this.resultadoEvaluacion = "Proyecto Aprobado";
    } else {
      if ((this.porcentajeTotal <= 75) && (this.porcentajeTotal >= 51)) {
        this.resultadoEvaluacion = "Proyecto por Mejorar";
      }
      else {
        if (this.porcentajeTotal <= 50) {
          this.resultadoEvaluacion = "Replantear Propuesta";
        }

      }

    }
    console.log(this.sumatoria);
    console.log(this.porcentajeTotal);
    console.log(this.resultadoEvaluacion);
  }
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }

}
