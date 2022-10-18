import { atom } from 'recoil'

export const controlConfigState = atom({
  key : "control-config",
  default : {
    whiteBackgroundChecked : false,
    biggerCommandsChecked : false
  }
})