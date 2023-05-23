import {MACHINE_STATUS, MachineItem} from "../common/machine.model";
import {MachineActionType, MachineReducerActions} from "./machine.action";

const initialState: Array<MachineItem> = [
  {  id: 0, machineName: 'Scale', machineStatus: MACHINE_STATUS.RUNNING, machineIcon: 'system_update_alt' },
  {  id: 1, machineName: 'Attacher', machineStatus: MACHINE_STATUS.ALARM, machineIcon: 'inventory_2' },
  {  id: 2, machineName: 'Packer', machineStatus: MACHINE_STATUS.RUNNING, machineIcon: 'line_weight' },
  {  id: 3, machineName: 'Closer', machineStatus: MACHINE_STATUS.WARNING, machineIcon: 'grid_on' },
];

export function machineReducer( state: Array<MachineItem>, action: MachineReducerActions ): Array<MachineItem> {
  switch(action.type) {
    case MachineActionType.ADD_MACHINE: {
      return [...state, action.payload];
    }
    case MachineActionType.UPDATE_MACHINE_STATUS: {
      const toUpdate = state.findIndex( value => value.id === action.payload.id);
      if(toUpdate >= 0) {
        const updatedMachineStatus = { ...state[toUpdate], machineStatus: action.payload.machineStatus };
        const updatedMachines = [...state];
        updatedMachines[toUpdate] = updatedMachineStatus;
        return [...updatedMachines]
      }
       return [...state];//maybe throw error if index not found?
    }
    case MachineActionType.INIT_MACHINE: {
      return [...initialState];
    }
    default: return state;
  }
}
