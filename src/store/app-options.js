import { atom } from "recoil";

export const appOptionKey = {
  whiteBackground: "white-background-checked",
  biggerCommand: "bigger-commands-checked",
};

export const appOptionsStore = atom({
  key: "app-options",
  default: {
    [appOptionKey.whiteBackground]: false,
    [appOptionKey.biggerCommand]: false,
  },
});
