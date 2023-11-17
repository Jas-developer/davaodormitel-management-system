import { ReactNode, createContext, useEffect, useState } from "react";
import { BorderType, FORMTYPE } from "../types/types";
import axios from "axios";

export const DataProvider = createContext<any>(null);

type Props = {
  children: ReactNode;
};

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [borderData, setBorderData] = useState<BorderType[] | null>();

  // adding a boarder
  const sendData = async (data: FORMTYPE | null) => {
    try {
      if (!data) throw new Error("No data to send");

      const response = await axios.post("http://localhost:5000/borders", data);
      if (response.status === 200) {
        console.log("Data has been sent");
        // You might want to update borderData state here if needed
      } else {
        console.log("Data did not successfully send");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("http://localhost:5000/borders");
      const data = await response.data;
      setBorderData(data);
    };

    getData();
  }, []);

  return (
    <DataProvider.Provider value={{ borderData, sendData }}>
      {children}
    </DataProvider.Provider>
  );
};
