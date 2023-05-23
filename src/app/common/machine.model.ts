
export enum MACHINE_STATUS { RUNNING, WARNING, ALARM }

export interface MachineItem {
  id: number;
  machineName: string;
  machineStatus: MACHINE_STATUS
  machineIcon: string;
}


