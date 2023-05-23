import {Component, OnDestroy, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {MachineItem, MACHINE_STATUS} from "./common/machine.model";
import {Store} from "@ngrx/store";
import {InitMachineAction} from "./store/machine.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store<{machineStore: Array<MachineItem>}>
  ) { }

  public machineArray: Array<MachineItem> = [];

  displayTime;
  interval;

  ngOnInit() {
    this.store.select('machineStore').subscribe( (value) => {
      this.machineArray = value;
    });

    this.store.next(new InitMachineAction());

    this.interval = setInterval( () => { this.displayTime = new Date(); }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
