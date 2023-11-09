export default function Login() {
  return (
    <div className="lg:w-[70%] relative gap-2 flex flex-col lg:gap-5 lg:h-[80%]">
      <h2 className="text-gray-200 lg:text-xl">LOGIN AS</h2>
      <div className="grid grid-cols-2 gap-0.5   justify-between  items-center">
        <button className="lg:py-2  text-gray-200 shadow-md text-center bg-green-800   text-lg lg:text-[20px]">
          ADMIN
        </button>
        <button className="text-gray-200 lg:py-2 shadow-md text-center bg-green-800   text-lg lg:text-[20px] ">
          BOARDER
        </button>
      </div>

      <form action="" className="flex gap-4 lg:gap-8 flex-col">
        <div className="flex flex-col">
          <span className="text-gray-300 lg:text-lg">NAME</span>
          <input
            type="text"
            placeholder="e.g., John"
            className="text-center lg:py-3 outline-none border shadow-md text-md font-semibold text-gray-700"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-gray-300 lg:text-lg">ROOM # & CATEGORY</span>
          <input
            type="text"
            placeholder="e.g., m-4 or f-2 "
            className="text-center lg:py-3 outline-none border shadow-md lg:text-md font-semibold text-gray-700"
          />
        </div>
        <div className="flex flex-col">
          <span className="lg:text-lg text-gray-200">PASSWORD</span>
          <input
            type="password"
            placeholder="e.g, cupcake#2"
            className="text-center lg:py-3 outline-none border shadow-md text-md font-semibold text-gray-700"
          />
        </div>
        <div className="flex justify-end">
          <button className=" bg-green-800 px-3 py-1 font-medium shadow-md lg:p-2 lg:px-3 text-md text-gray-300">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}
