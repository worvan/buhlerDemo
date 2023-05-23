import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { MachineStatusComponent } from './machine-status/machine-status.component';
import { StoreModule } from "@ngrx/store";
import { machineReducer } from "./store/machine.reducer";

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    MachineStatusComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ machineStore: machineReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
