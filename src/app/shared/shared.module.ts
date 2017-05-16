import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';

@NgModule({
  imports:      [ CommonModule, MaterializeModule ],
  declarations: [  ],
  exports:      [ CommonModule, FormsModule, MaterializeModule ]
})
export class SharedModule { }
