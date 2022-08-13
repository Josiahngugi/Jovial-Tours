import "./styles.css";
import Menu from "./components/menu/Menu";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
}
