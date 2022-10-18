import { atom, selector } from "recoil";

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

export const appOptionState = selector({
  key : "app-options",
  get : ({get}) => {

    const appOptions = get(appOptionsStore);

    const { whiteBackground , biggerCommands } = appOptionKey;
    const {
      [whiteBackground]: whiteBackgroundChecked,
      [biggerCommands]: biggerCommandsChecked,
    } = appOptions;

    return ({
      whiteBackground : whiteBackgroundChecked,
      biggerCommands : biggerCommandsChecked
    })
  }
})