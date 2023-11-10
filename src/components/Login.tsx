import { observer } from "mobx-react-lite";
import { click } from "../states/Onclick";

export const Login = observer(() => {
  return (
    <>
      <div className="lg:w-[70%] relative flex flex-col lg:gap-5  lg:h-[80%]">
        <h2 className="font-semibold text-lg text-center lg:text-xl text-black">
          LOGIN AS
        </h2>
        <br />
        <div className="grid grid-cols-2 gap-1   justify-between  items-center">
          <button className="lg:py-2  text-gray-200 shadow-md text-center bg-green-800   text-lg lg:text-[20px]">
            ADMIN
          </button>
          <button className="text-gray-200 lg:py-2 shadow-md text-center bg-green-800   text-lg lg:text-[20px] ">
            BOARDER
          </button>
        </div>

        <form action="" className="flex gap-4  lg:gap-8 flex-col">
          <div className="flex flex-col">
            <span className="text-gray-900 font-semibold lg:text-lg">NAME</span>
            <input
              type="text"
              placeholder="e.g., John"
              className="text-center lg:py-3 py-2 px-8 outline-none border shadow-md text-md font-semibold text-gray-700"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-900 font-semibold lg:text-lg">
              ROOM # & CATEGORY
            </span>
            <input
              type="text"
              placeholder="e.g., m-4 or f-2 "
              className="text-center py-2 px-8 lg:py-3 outline-none border shadow-md lg:text-md font-semibold text-gray-700"
            />
          </div>
          <div className="flex flex-col">
            <span className="lg:text-lg font-semibold text-gray-900">
              PASSWORD
            </span>
            <input
              type="password"
              placeholder="e.g, cupcake#2"
              className="text-center py-2 px-8 lg:py-3 outline-none border shadow-md text-md font-semibold text-gray-700"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => click.OnClick(true)}
              className=" bg-green-800 px-3 py-1 font-medium shadow-md lg:p-2 lg:px-3 text-md text-gray-300"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
    </>
  );
});
