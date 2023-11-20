import { click } from "../states/Onclick";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DataProvider } from "../states/UseContext";
import { BorderType } from "../types/types";
import { ViewProfile } from "./ViewProfile";
import axios from "axios";

export default function HomePage() {
  const [open, setOpen] = useState<boolean>(false);
  const { borderData } = useContext(DataProvider);
  const data = borderData;

  //delete a boarder function
  const deleteBoarder = async (id?: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/borders/${id}`
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

  return (
    <div className=" flex-col bg-transparent gap-2  w-full overflow-x-hidden flex justify-start relative   rounded-sm">
      <div className="flex justify-end px-2">
        <button
          onClick={() => setOpen(open === false ? true : false)}
          className="bg-gray-700 text-center px-4 py-1 rounded-sm text-white font-semibold shadow-md"
        >
          Open
        </button>
      </div>
      {open === true ? (
        <div className="flex justify-end">
          <div className="flex justify-between flex-col w-[50vw]  bg-teal-900 px-2 py-4 gap-2 rounded-xl">
            <Link to="/addboarder" className="flex justify-end">
              <button className="bg-green-700 px-4 py-2 font-semibold text-gray-100 shadow-md rounded-md">
                Add Border
              </button>
            </Link>
            <div className="flex justify-end">
              <button
                onClick={() => click.OnClick(false)}
                className="bg-green-700 px-4 py-2 font-semibold text-gray-100 shadow-md rounded-md"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {/* displaying each person */}
      <div className="flex-col px-2 items-center py-3  flex">
        <div className="flex justify-between px-2  text-2xl shadow-lg py-2 rounded-md  w-full md:w-full  font-semibold bg-teal-600 text-white">
          <span>ALL BOARDES</span> <span></span>
        </div>
        <div className="mt-5 w-full flex flex-col  md:grid grid-cols-4 gap-2  ">
          {data?.map((border: BorderType) => (
            <div
              key={border._id}
              className="flex justify-center py-4 md:px-12 overflow-x-hidden bg-white rounded-xl"
            >
              <div className="max-w-xs cursor-pointer rounded-lg  p-2 shadow duration-150  hover:shadow-md">
                <img
                  className="w-full rounded-lg object-cover object-center"
                  src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
                  alt="product"
                />
                <div>
                  <div className="my-6 flex items-center justify-between px-4">
                    <p className="font-bold text-gray-500">Name</p>
                    <p className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
                      {border.name}
                    </p>
                  </div>
                  <div className="my-4 flex items-center justify-between px-4">
                    <p className="text-sm font-semibold text-gray-500">
                      Due date
                    </p>
                    <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                      {border.monthly_due_date}th Every Month
                    </p>
                  </div>
                  <div className="my-4 flex items-center justify-between px-4">
                    <p className="text-sm font-semibold text-gray-500">
                      Monthly due
                    </p>
                    <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                      {border.monthly_amount_due} PHP
                    </p>
                  </div>
                  <div className="my-4 flex items-center justify-between px-4">
                    <p className="text-sm font-semibold text-gray-500">Room#</p>
                    <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                      {border.room_number}
                    </p>
                  </div>
                  <div className="my-4 flex items-center justify-between px-4">
                    <p className="text-sm font-semibold text-gray-500">
                      Date Started
                    </p>
                    <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                      {border.date_started}
                    </p>
                  </div>
                  <div className="my-4 flex items-center justify-between px-4">
                    <p className="text-sm font-semibold text-gray-500">
                      <ViewProfile id={border._id} />
                    </p>
                    <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">
                      <button
                        onClick={() => confirmDelete(border._id)}
                        className="bg-red-500  font-semibold px-8 border-none rounded-lg uppercase text-gray-100"
                      >
                        Delete
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
