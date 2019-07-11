import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {User} from '../../models/user';
import {FormControl, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  user: User;
  avatars = ['svg-1', 'svg-2', 'svg-3', 'svg-4'];
  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: UserService
  ) { }

  name = new FormControl('', [Validators.required]);

  getErrorMessages() {
    return this.name.hasError('required') ? 'Name is required' : '';
  }

  ngOnInit() {
    this.user = new User();
  }

  save() {
    this.userService.addUser(this.user).then(user => {
      this.dialogRef.close(user);
    });
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}

