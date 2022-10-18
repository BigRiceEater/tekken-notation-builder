import ErrorCommand from "./error-command";
import { useRecoilValue } from "recoil";
import { appOptionsStore, appOptionKey } from "../store/app-options";

// https://github.com/facebook/create-react-app/issues/9831#issuecomment-716063951
/* 
  Failing to use craco to indicate these image files are not es Modules, the next best 
  workaround is by using the .default when declaring the require() for now.
  
  const image = require('../assets/one.svg).default

  but strangely when directly using in image src attriute, default is not needed.
*/

// 'icon' should be given the CommandName to find the corresponding filename to load
const Command = ({ icon }) => {

  const appOptions = useRecoilValue(appOptionsStore);

  const { biggerCommands } = appOptionKey;
  const {
    [biggerCommands]: biggerCommandsChecked,
  } = appOptions;

  try {
    if (icon === "error") {
      return <ErrorCommand cmd={icon} />;
    } else {
      return (
        <img
          style={{ width: biggerCommandsChecked ? 64 : 32 }}
          src={require(`../assets/${icon}.svg`)}
        />
      );
    }
  } catch (err) {
    console.error(err);
  }
};

export default Command;
