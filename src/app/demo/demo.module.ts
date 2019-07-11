import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import {MatButtonModule, MatCheckboxModule, MatIconModule} from '@angular/material';


@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule
  ]
})
export class DemoModule { }
