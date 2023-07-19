import { createContext, useContext } from 'react';
import { ToastContainer, toast, ToastPosition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IToastContextData } from '@/interfaces/IToast-Interface';
import { ToastType } from '@/types/TToast-Type';

const ToastContext = createContext<IToastContextData>({} as IToastContextData);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const showToast = (message: string, type: ToastType = 'info', position: ToastPosition = 'top-right') => {
    switch (type) {
      case 'success':
        toast.success(message, { position });
        break;
      case 'error':
        toast.error(message, { position });
        break;
      case 'warning':
        toast.warning(message, { position });
        break;
      default:
        toast.info(message, { position });
        break;
    }
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <ToastContainer />
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
