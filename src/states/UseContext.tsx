import { ReactNode, createContext, useEffect, useState } from "react";
import { AdminTypes, BorderType, FORMTYPE } from "../types/types";
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

  /*
  @sending a data to sign in 
  */

  const [STATUS, SET_STATUS] = useState<boolean | null>(false);

  /*
    @DESC POST REQUEST
    @DESC SIGNING IN AN ADMIN
  */

  const adminSignIn = async (DATA: AdminTypes) => {
    try {
      if (!DATA) {
        throw new Error("Credentials not sent");
      }
      const response = await axios.post(
        "http://localhost:5000/admin/signin",
        DATA
      );
      console.log(response);
      if (response) {
        alert("Login Successful: You are now logged in.");
        SET_STATUS(STATUS === true ? false : true);
      }
    } catch (error) {
      alert("Invalid Credentials, Please try again!");
      console.log(error);
    }
  };

  

  return (
    <DataProvider.Provider
      value={{
        borderData,
        sendData,
        adminSignIn,
        STATUS,
        SET_STATUS,
      }}
    >
      {children}
    </DataProvider.Provider>
  );
};
