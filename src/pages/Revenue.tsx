import { DataProvider } from "../states/UseContext";
import { useContext } from "react";
import { BorderType } from "../types/types";
const Revenue = () => {
  const { borderData, total } = useContext(DataProvider);
  const data: BorderType[] = borderData;
  const arith: any | number | bigint = 12;

  return (
    <>
      <div className="justify-center items-center flex w-full bg-transparent overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative  my-2 mx-auto border w-[90vw]  rounded-md">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
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
                      {border.monthly_amount_due}
                    </td>
                    <td className="text-white bg-green-600">
                      {parseInt(border.monthly_amount_due) * arith}
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
                      acc + parseInt(border.monthly_amount_due, 10),
                    0
                  )}
                </div>
                <div className="text-white text-center flex flex-col border bg-orange-500">
                  <span className="">YEARLY</span>
                  {data.reduce(
                    (acc: any, border: any) =>
                      acc + parseInt(border.monthly_amount_due, 10),
                    0
                  ) * 12}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 text-white bg-black">
        REVENUE DETAILS
      </div>
    </>
  );
};

export { Revenue };
