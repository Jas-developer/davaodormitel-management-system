import { DataProvider } from "../states/UseContext";
import { useContext } from "react";
import { BorderType } from "../types/types";
import { useNavigate } from "react-router-dom";
const Revenue = () => {
  const { borderData } = useContext(DataProvider);
  const navigate = useNavigate();
  const data: BorderType[] = borderData;
  const arith: any | number | bigint = 12;
  console.log(data);
  return (
    <>
      <div className="justify-center items-center flex w-full bg-transparent overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative  my-2 mx-auto border w-[90vw]  rounded-md">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
            {/*header*/}
            <button
              onClick={() => navigate("/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9")}
              className="py-2 px-2"
            >
              <img
                width="50"
                height="50"
                className="bg-red-400 rounded-lg"
                src="https://img.icons8.com/ios-filled/50/000000/circled-left-2.png"
                alt="circled-left-2"
              />
            </button>
            <div className="flex items-start justify-between p-5 r bg-yellow-600 border-b border-solid border-blueGray-200 rounded-t">
              <p className="text-xl font-semibold bg-transparent">
                Monthly & Yearly Revenue.
              </p>
            </div>
            {/*body*/}

            <div>
              <table className="border w-full items-start text-start flex flex-col">
                <tr className="border w-full grid grid-cols-3 ">
                  <th className="text-white  bg-pink-500 r">NAME</th>
                  <th className="text-white bg-purple-500">MONTHLY</th>
                  <th className="text-white bg-orange-500">YEARLY</th>
                </tr>
                {data?.map((border) => (
                  <tr
                    key={border._id}
                    className="grid grid-cols-3 text-start items-start w-full"
                  >
                    <td className="text-white bg-teal-600">{border.name}</td>
                    <td className="text-white items-start bg-blue-400">
                      {border.amount}
                    </td>
                    <td className="text-white bg-green-600">
                      {parseInt(border.amount) * arith}
                    </td>
                  </tr>
                ))}
              </table>

              <div className=" w-full text-white p-2">
                Over All Calculations
              </div>
              <div className="grid grid-cols-2">
                <div className="text-white text-center flex flex-col border bg-green-500">
                  <span className="">MONTHLY</span>
                  {data.reduce(
                    (acc: any, border: any) =>
                      acc + parseInt(border.amount, 10),
                    0
                  )}
                </div>
                <div className="text-white text-center flex flex-col border bg-orange-500">
                  <span className="">YEARLY</span>
                  {data.reduce(
                    (acc: any, border: any) =>
                      acc + parseInt(border.amount, 10),
                    0
                  ) * 12}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Revenue };
