import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyectos-articulados';

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  fourthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  fifthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  sixthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  seventhFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  eighthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  ninthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });



  isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }

}
