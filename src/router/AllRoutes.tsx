import { Routes, Route } from "react-router-dom";
import App from "../App";
import AddBoarder from "../components/AddBoarder";
import { ContextProvider } from "../states/UseContext";
import HomePage from "../pages/Home";
import { Revenue } from "../pages/Revenue";
import { AddNewAdmin } from "../pages/NewAdmin";
export const AllRoutest = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<App />} />
        <Route path="/addboarder" element={<AddBoarder />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/newadmin" element={<AddNewAdmin />} />
      </Routes>
    </ContextProvider>
  );
};
