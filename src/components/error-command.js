import { WarningTwoTone } from "@ant-design/icons";
import { useRecoilValue } from "recoil";
import { appOptionsStore, appOptionKey} from "../store/app-options"

const ErrorCommand = ({ cmd }) => {

  const appOptions = useRecoilValue(appOptionsStore);

  const { biggerCommands } = appOptionKey;
  const {
    [biggerCommands]: biggerCommandsChecked,
  } = appOptions;
  return (
    <WarningTwoTone
      twoToneColor="#eb2f96"
      style={{ padding: "0px 2px", fontSize: biggerCommandsChecked ? 64 : 32 }}
    />
  );
};

export default ErrorCommand;
