import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
};

export const successNotification = (title) => toast.success(title, style);

export const errorNotification = (title) => toast.error(title, style);

export const warningNotification = (title) => toast.warning(title, style);
