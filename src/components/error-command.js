import { useEffect, useRef } from "react";
import { WarningTwoTone } from "@ant-design/icons";
import { toast } from "react-toastify";

const ErrorCommand = ({ cmd, options }) => {
  // The alert will only show once in the whole lifetime of this particular instances existence
  const showAlert = useRef(true);

  useEffect(() => {
    if (showAlert.current) {
      toast.error(`${cmd} is not recognised`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      showAlert.current = false;
    }
  }, []);

  return (
    <WarningTwoTone
      twoToneColor="#eb2f96"
      style={{ fontSize: options.biggerCommands ? 64 : 32 }}
    />
  );
};

export default ErrorCommand;
