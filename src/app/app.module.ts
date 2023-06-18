import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MutantDetectorComponent } from './mutant-detector/mutant-detector.component';
import { MutantHelpComponent } from './mutant-help/mutant-help.component';

@NgModule({
  declarations: [
    AppComponent,
    MutantDetectorComponent,
    MutantHelpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
