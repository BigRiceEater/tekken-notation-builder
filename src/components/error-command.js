import { WarningTwoTone } from "@ant-design/icons";
import { useRecoilValue } from "recoil";
import { appOptionsStore } from "../store/app-options"

const ErrorCommand = ({ cmd }) => {

  const appOptions = useRecoilValue(appOptionsStore);

  const { biggerCommands } = appOptions
  return (
    <WarningTwoTone
      twoToneColor="#eb2f96"
      style={{ padding: "0px 2px", fontSize: biggerCommands ? 64 : 32 }}
    />
  );
};

export default ErrorCommand;
