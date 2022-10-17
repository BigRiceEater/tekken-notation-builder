import { WarningTwoTone } from "@ant-design/icons";

const ErrorCommand = ({options}) => {
  return (
    <WarningTwoTone
      twoToneColor="#eb2f96"
      style={{ fontSize: options.biggerCommands ? 64 : 32 }}
    />
  );
};

export default ErrorCommand;
