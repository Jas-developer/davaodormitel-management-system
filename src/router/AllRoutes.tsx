import { Routes, Route } from "react-router-dom";
import App from "../App";
import AddBoarder from "../components/AddBoarder";
import { ContextProvider } from "../states/UseContext";
export const AllRoutest = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/addboarder" element={<AddBoarder />} />
      </Routes>
    </ContextProvider>
  );
};
