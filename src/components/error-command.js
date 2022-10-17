import { useEffect } from "react";
import { WarningTwoTone } from "@ant-design/icons";
import { toast } from "react-toastify";

const ErrorCommand = ({ cmd, options }) => {
  
  useEffect(() => {
    toast(`${cmd} is wrong!`);
  }, []);

  return (
    <WarningTwoTone
      twoToneColor="#eb2f96"
      style={{ fontSize: options.biggerCommands ? 64 : 32 }}
    />
  );
};

export default ErrorCommand;
