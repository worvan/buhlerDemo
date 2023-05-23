import {Component, Input, OnInit} from '@angular/core';
import {MachineItem} from "../common/machine.model";
import { MACHINE_STATUS } from "../common/machine.model";

@Component({
  selector: 'app-machine-status',
  templateUrl: './machine-status.component.html',
  styleUrls: ['./machine-status.component.scss']
})
export class MachineStatusComponent implements OnInit {

  constructor() { }

  @Input() machineArray: Array<MachineItem> = [];

  get MACHINE_STATUS() { return MACHINE_STATUS; }

  ngOnInit(): void {
  }

  public getClassByStatus(status: MACHINE_STATUS): string {
    let styleClass = 'machine-item';
    switch( status ) {
      case MACHINE_STATUS.RUNNING: {
        styleClass += ' running';
        break;
      }
      case MACHINE_STATUS.WARNING: {
        styleClass += ' warning';
        break;
      }
      case MACHINE_STATUS.ALARM: {
        styleClass += ' alarm';
        break;
      }
    }
    return styleClass;
  }

}
