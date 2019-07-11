import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {User} from '../../models/user';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  user: User;
  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>
  ) { }

  name = new FormControl('', [Validators.required]);

  getErrorMessages() {
    return this.name.hasError('required') ? 'Name is required' : '';
  }

  ngOnInit() {
    this.user = new User();
  }

  save() {
    this.dialogRef.close(this.user);
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}

