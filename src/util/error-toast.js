import { toast } from "react-toastify";

const showErrorToast = ({cmd}) =>
  toast.error(`${cmd} is not recognised`, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

export default showErrorToast;
