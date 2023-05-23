import {Component, Input, OnInit} from '@angular/core';
import {MachineItem, MACHINE_STATUS} from "../common/machine.model";
import {Store} from "@ngrx/store";
import {UpdateMachineStatus} from "../store/machine.action";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(private store: Store<{machineStore: Array<MachineItem>}>) { }

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

  public onCycleStatus(machineId: number) {
    const foundId = this.machineArray.findIndex( (value) => value.id === machineId );
    if(foundId >= 0) {
      const newStatus = (this.machineArray[foundId].machineStatus + 1) % 3;
      this.store.dispatch( new UpdateMachineStatus({id: machineId, machineStatus: newStatus} ) );
    }
  }

}
