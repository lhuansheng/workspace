export enum methodEnum {
  log,info, warn, debug, error
}
export type EnumKeys = keyof typeof methodEnum
export type methodEnumInterface = {
  [key in EnumKeys]: (...args: any[]) => void;
}

export interface LogInfos {
  logType: EnumKeys,
  infos: any[]
}