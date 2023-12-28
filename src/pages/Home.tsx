import { click } from "../states/Onclick";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DataProvider } from "../states/UseContext";
import { BorderType } from "../types/types";
import { ViewProfile } from "./ViewProfile";
import IMG from "../../public/images/icon.png";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const [open, setOpen] = useState<boolean>(false);
  const { borderData, setBorderData } = useContext(DataProvider);
  const navigate = useNavigate();

  //delete a boarder function
  const deleteBoarder = async (id?: string) => {
    const abortController = new AbortController();
    try {
      let token = localStorage.getItem("token");
      const response = await fetch(
        `https://dorm-hu38.onrender.com/api/boarders/${id}`,
        {
          method: "DELETE",
          signal: abortController.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) {
        window.location.reload();
      }
    } catch (error) {
      console.log("Error deleting data");
      alert("Unable to delete");
    }
  };

  // confirmation to delete the boarder
  const confirmDelete = async (id?: string) => {
    if (window.confirm("Are you sure you want this to remove?")) {
      deleteBoarder(id);
    } else {
      console.log("Deletion Cancelled");
    }
  };

  // getting all the boarders
  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("Token not found");
        }

        const response = await fetch(
          "https://dorm-hu38.onrender.com/api/boarders",
          {
            method: "GET",
            signal: abortController.signal,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const responseData = await response.json(); // Extract JSON data

        console.log(responseData);

        setBorderData(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  const logOut = () => {
    localStorage.removeItem("token"); // Remove the token from localStorage
    if (!localStorage.getItem("token")) {
      navigate("/");
    } else {
      console.log("Token was not removed");
    }
  };

  return (
    <div className=" flex-col bg-transparent gap-2 z-10  w-full overflow-x-hidden flex px-2 justify-center  py-2   rounded-sm">
      <div className="flex justify-end px-2">
        <button
          onClick={() => setOpen(open === false ? true : false)}
          className=" text-center px-4 py-1 rounded-sm text-white  font-semibold"
        >
          {open === true ? (
            <img
              width="38"
              height="38"
              className="border-b-2  shadow-md bg-transparent rounded-md shadow-yellow-800"
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-close-web-flaticons-lineal-color-flat-icons-5.png"
              alt="external-close-web-flaticons-lineal-color-flat-icons-5"
            />
          ) : (
            <img
              width="38"
              height="38"
              className="border-b-2 rounded-md border-yellow-600 bg-yellow-600 shadow-md shadow-yellow-800"
              src="https://img.icons8.com/ios-filled/50/admin-settings-male.png"
              alt="admin-settings-male"
            />
          )}
        </button>
      </div>
      {open === true ? (
        <div className="flex justify-end shadow-md">
          <div className="flex justify-between flex-col w-[50vw]   bg-transparent px-2 py-4 gap-2 rounded-xl">
            <Link to="/addboarder" className="flex justify-end bg-transparent">
              <button className=" w-[180px] px-4 py-2 border-2 rounded-full font-semibold text-gray-100 shadow-md  flex flex-row gap-2 items-center justify-center">
                <span className="bg-transparent">ADD</span>
                <img
                  width="28"
                  height="28"
                  className="rounded-full"
                  src="https://img.icons8.com/plasticine/100/add--v1.png"
                  alt="add--v1"
                />
              </button>
            </Link>
            <div className="flex justify-end bg-transparent">
              <Link to="/revenue">
                <button
                  onClick={() => click.OnClick(false)}
                  className="px-4 py-2 font-semibold  w-[180px] text-gray-100 border-yellow-300 border-2 rounded-full flex flex-row gap-2 items-center justify-center"
                >
                  <span className="bg-transparent">REVENUE</span>
                  <img
                    width="28"
                    height="28"
                    className="rounded-full"
                    src="https://img.icons8.com/color-glass/48/get-revenue.png"
                    alt="get-revenue"
                  />
                </button>
              </Link>
            </div>
            <div className="flex justify-end bg-transparent">
              <Link to="/newadmin">
                <button
                  onClick={() => click.OnClick(false)}
                  className="px-4 py-2 font-semibold  w-[180px] text-gray-100 border-green-300 border-2 rounded-full flex flex-row gap-2 items-center justify-center"
                >
                  <span className="bg-transparent">NEW ADMIN</span>
                  <img
                    width="28"
                    height="28"
                    src="https://img.icons8.com/color/48/admin-settings-male.png"
                    alt="admin-settings-male"
                  />
                </button>
              </Link>
            </div>
            <div className="flex  justify-end bg-transparent rounded-l-full rounded-r-[20%]">
              <button
                onClick={logOut}
                className=" w-[180px] px-4 py-2 flex-row flex gap-2 justify-center items-center  font-semibold border-2 border-red-500 shadow-md rounded-full"
              >
                <span className="bg-transparent text-gray-100 uppercase">
                  Logout
                </span>
                <img
                  width="28"
                  height="28"
                  className="rounded-full"
                  src="https://img.icons8.com/plasticine/100/logout-rounded.png"
                  alt="logout-rounded"
                />
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col  text-white  px-4 gap-4 py-2 w-full ">
        {borderData?.map((border: BorderType) => (
          <div
            key={border._id}
            className="grid grid-cols-3 shadow-sm shadow-yellow-600 bg-transparent gap-0 bg-slate-500 text-center rounded-2xl "
          >
            <div className="col-span-1 flex justify-center items-center shadow-xl bg-white  border-transparent rounded-l-2xl">
              <img
                src={IMG}
                alt=""
                className="object-cover w-auto border items-center border-yellow-400 bg-transparent"
              />
            </div>
            <div className="col-span-1   flex flex-col items-start text-sm py-2  bg-white">
              <div className=" font-semibold font-serif text-start text-black  bg-transparent">
                {border.name.toLocaleUpperCase()}
              </div>
              <hr />
              <div className="font-semibold text-teal-900 bg-transparent">
                MONTHLY: {border.amount}
              </div>
              <div className=" text-teal-900 font-semibold bg-transparent">
                DUE DATE: {border.due}
              </div>
              <div className=" text-teal-900 fpmt bg-transparent ">
                ROOM#: {border.room}
              </div>
            </div>
            <div className="flex justify-center px-2 items-center gap-2 py-3 flex-col bg-white rounded-r-2xl">
              <button
                onClick={() => confirmDelete(border._id)}
                className="bg-red-700 rounded-full w-[95px]"
              >
                DELETE
              </button>
              <button>
                <ViewProfile id={border._id} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
