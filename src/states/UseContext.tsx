import { ReactNode, createContext, useState } from "react";
import { AdminTypes, BorderType, FORMTYPE } from "../types/types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const DataProvider = createContext<any>(null);

type Props = {
  children: ReactNode;
};

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [borderData, setBorderData] = useState<BorderType[] | null>();

  const navigate = useNavigate();

  // adding a boarder
  const sendData = async (data: FORMTYPE | null) => {
    try {
      if (!data) throw new Error("No data to send");

      const response = await axios.post(
        "https://border.cyclic.app/borders",
        data
      );
      if (response.status === 200) {
        console.log("Data has been sent");
      } else {
        console.log("Data did not successfully send");
      }
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

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

      const response = await fetch("http://localhost:5001/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${await sendTokenToServer.token}`,
        },
        body: JSON.stringify(DATA),
      });

      if (!response.ok) {
        throw new Error("Invalid Credentials");
      }

      const responseData = await response.json();
      console.log(responseData);

      if (responseData && responseData.token) {
        const token = responseData.token;

        // Store the token in localStorage for further use
        localStorage.setItem("token", token);

        // Send the token back to the server using a protected endpoint
        const tokenSendingResponse: any = await sendTokenToServer(token);

        if (tokenSendingResponse) {
          alert("Login Successful: You are now logged in.");
          SET_STATUS(STATUS === true ? false : true);
        } else {
          throw new Error("Failed to send token to server");
        }
      }
    } catch (error) {
      alert("Invalid Credentials, Please try again!");
      console.error(error);
    }
  };

  const sendTokenToServer: any = async (token: any) => {
    try {
      return token;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  /*
 @desc WILL CALCULATE THE TOTAL AMOUNT OF MONTLY payment
*/

  const registerAdmin = async (admin: any) => {
    try {
      const token = localStorage.getItem("token");

      const data = await fetch("http://localhost:5001/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(admin),
      });
      if (data) {
        alert("New Admin has been added");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("Admin Registration Unsuccessfull!");
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
        registerAdmin,
        setBorderData,
      }}
    >
      {children}
    </DataProvider.Provider>
  );
};
