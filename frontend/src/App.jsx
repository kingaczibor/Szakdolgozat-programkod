import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home";
import Endpage from "./components/Endpage";
import DashboardRepair from "./components/DashboardRepair";
import Dashboard from "./components/Dashboard";
import Install from "./components/Install";
import Repair from "./components/Repair";
import Login from "./components/Login";
import Installform from "./components/Installform";
import Repairform from "./components/Repairform";
import Registration from "./components/Registration";
import ItemRegister from "./components/ItemRegister";
import { ToastContainer, Zoom } from "react-toastify";

export default function App() {
  const [installs, setInstalls] = useState([]);
  const [repairs, setRepairs] = useState([]);

  return (
    <>
      <ToastContainer autoClose={3000} position={"top-center"} />
      <Routes>
        <Route path={"*"} element={<Home />} />
        <Route path={"/install"} element={<Install />} />
        <Route
          path={"/install/form"}
          element={
            <Installform installs={installs} setInstalls={setInstalls} />
          }
        />
        <Route
          path={"/repairform"}
          element={<Repairform repairs={repairs} setRepairs={setRepairs} />}
        />
        <Route
          path={"/dashboard"}
          element={<Dashboard installs={installs} />}
        />
        <Route
          path={"/dashboardrepair"}
          element={<DashboardRepair repairs={repairs} />}
        />
        <Route path={"/repair"} element={<Repair />} />
        <Route path={"/end"} element={<Endpage />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/registration"} element={<Registration />} />
        <Route path={"/itemregistration"} element={<ItemRegister />} />
      </Routes>
    </>
  );
}
