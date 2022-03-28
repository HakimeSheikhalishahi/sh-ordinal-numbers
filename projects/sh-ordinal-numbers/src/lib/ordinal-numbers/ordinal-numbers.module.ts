import { NgModule } from '@angular/core';
import { OrdinalPipe } from './pipe/ordinal.pipe';

@NgModule({
  declarations: [
    OrdinalPipe
  ],
  exports: [
    OrdinalPipe
  ]
})
export class OrdinalNumbersModule { }
