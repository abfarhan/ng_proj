import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyCalcComponent } from './currency-calc.component';



@NgModule({
  declarations: [CurrencyCalcComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CurrencyCalcComponent]
})
export class CurrencyCalcModule { }
