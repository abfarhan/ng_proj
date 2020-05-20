import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyCalcModule } from './currency-calc/currency-calc.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CurrencyCalcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
