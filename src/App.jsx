import { useSelector } from "react-redux";
import "./App.css";
import Router from "./Routes/Routes";
import { Navigate } from "react-router-dom";

function App() {
  const { auth } = useSelector((state) => state);
  return <Router {...auth} />;
}

export default App;
