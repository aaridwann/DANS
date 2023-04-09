import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CLEAR_WARNING } from "../../Redux/features/Error/ErrorSlice";

export default function ToastComponent() {
  const { error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error.waning || error.error) {
      toast.error(error.message);
      setTimeout(() => dispatch(CLEAR_WARNING()), 2000);
    }
  }, [error.waning, error.error]);

  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
}
