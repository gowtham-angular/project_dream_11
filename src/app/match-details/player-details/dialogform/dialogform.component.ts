import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-dialogform',
  templateUrl: './dialogform.component.html',
  styleUrls: ['./dialogform.component.sass']
})
export class DialogformComponent implements OnInit {

  proForm: FormGroup;
  constructor(private fb: FormBuilder, public dialog: MatDialog) {

    this.proForm = this.fb.group({
      unique_id: [''],
      name: ['', [Validators.required]],
      playing_role: ['', [Validators.required]],
      batting: ['', [Validators.required]],
      bowling: ['', [Validators.required]],
      country: ['', [Validators.required]],
      batting_position: ['', [Validators.required]],
      credits: ['', [Validators.required]],
      batting_rating: ['', [Validators.required]],
      bowling_rating: ['', [Validators.required]],
    });
  }
  ngOnInit() {

  }

  closeDialog(): void {
    this.dialog.closeAll();
  }
  onSubmit() {
    console.log('Form Value', this.proForm.value);
  }
}
