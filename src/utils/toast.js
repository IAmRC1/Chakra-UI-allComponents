import { toast } from 'react-toastify';

export default function notify(
  msg = '',
  position = 'top-right',
  autoClose = 3000,
  hideProgressBar = false,
  closeOnClick = true,
  pauseOnHover = true,
){
  return toast(msg, {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable: false,
    progress: undefined,
  });
}