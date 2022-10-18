import { atom } from "recoil";

export const appOptionsStore = atom({
  key: "app-options",
  default: {
    whiteBackground: false,
    biggerCommands: false,
  },
});
