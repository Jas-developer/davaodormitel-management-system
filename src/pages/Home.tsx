import { click } from "../states/Onclick";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataProvider } from "../states/UseContext";
import { BorderType } from "../types/types";

export default function HomePage() {
  const { borderData } = useContext(DataProvider);
  const data = borderData;

  return (
    <div className="flex flex-col  w-full">
      <div className="flex justify-between bg-gray-400 px-2 py-4 rounded-xl">
        <Link to="/addboarder">
          <button className="text-md  px-2 py-1  font-bold bg-teal-700 rounded-full text-gray-100">
            Add Border
          </button>
        </Link>
        <button
          onClick={() => click.OnClick(false)}
          className="bg-green-700 px-4 py-2 font-semibold text-gray-100 shadow-md rounded-md"
        >
          Logout
        </button>
      </div>

      {/* displaying each person */}
      <div className="flex-col px-2 items-center py-3  flex">
        <div className="text-center text-2xl shadow-lg py-2 rounded-full  w-[50%]  font-semibold bg-gray-600 text-white">
          BORDERS
        </div>
        <div className="mt-5 w-full flex flex-col gap-2 ">
          {data?.map((border: BorderType) => (
            <div
              className="flex flex-col bg-gray-300 px-2 text-black text-lg py-2 "
              key={border._id}
            >
              <span className="font-semibold ">
                <b>NAME: </b>
                {border.name.toUpperCase()}
              </span>
              <span className="font-medium">
                <b className="text-black"> monthly_due_date:</b>{" "}
                {border.monthly_due_date}th Every Month
              </span>
              <span className="flex flex-row gap-2">
                <b>monthly_amount_due:</b>
                {border.monthly_amount_due} PHP
              </span>
              <span className="flex flex-row gap-2">
                <b>room_number:</b>
                {border.room_number}
              </span>
              <span className="">
                <b>date_started:</b> {border.date_started}
              </span>
              {/* buttons */}
              <div className="">
                <button className="bg-teal-700 p-1  text-white  font-semibold px-3">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
