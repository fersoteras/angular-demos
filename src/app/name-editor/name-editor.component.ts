import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css'],
})
export class NameEditorComponent {
  constructor(private formBuilder: FormBuilder) {}

  updateAmount() {
    // this.deposit.setValue('0000');
  }

  myForm = this.formBuilder.group({
    deposit: [
      '',
      [
        Validators.required, // Validators
        Validators.min(1),
        Validators.max(1000000),
      ],
    ],
  });

  onSubmit() {
    // some operations here
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
