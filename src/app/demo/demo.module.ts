import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import {MaterialModule} from '../shared/material.module';
import {FormsModule} from '@angular/forms';
import { FlexboxComponent } from './flexbox/flexbox.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [ButtonsComponent, FlexboxComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    DemoRoutingModule,
  ]
})
export class DemoModule { }
