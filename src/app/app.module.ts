import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { MachineStatusComponent } from './machine-status/machine-status.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    MachineStatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
