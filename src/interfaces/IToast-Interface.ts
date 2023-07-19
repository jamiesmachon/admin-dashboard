import { ToastType } from "@/types/TToast-Type";
import { ToastPosition } from "react-toastify";

export interface IToastContextData {
  showToast: (
    message: string,
    type?: ToastType,
    position?: ToastPosition
  ) => void;
}
