import { Action } from '@ngrx/store';
import { MachineItem } from '../common/machine.model';

export enum MachineActionType {
  ADD_MACHINE = 'ADD_MACHINE',
  UPDATE_MACHINE_STATUS = 'UPDATE_MACHINE_STATUS',
  DROP_MACHINE = 'DROP_MACHINE',
  INIT_MACHINE = 'INIT_MACHINE'
}

export class AddMachineAction implements Action {
  readonly type = MachineActionType.ADD_MACHINE;
  constructor(public payload: MachineItem) { }
}

export class UpdateMachineStatus implements Action {
  readonly type = MachineActionType.UPDATE_MACHINE_STATUS;
  constructor(public payload: Partial<MachineItem>) { }
}

export class InitMachineAction implements Action {
  readonly type = MachineActionType.INIT_MACHINE;
}

export class DropMachineAction implements Action {
  readonly type = MachineActionType.DROP_MACHINE;
}

export type MachineReducerActions = AddMachineAction | UpdateMachineStatus | DropMachineAction | InitMachineAction;
