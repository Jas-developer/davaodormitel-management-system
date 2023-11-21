import { DataProvider } from "./states/UseContext";
import { useContext, useState } from "react";
import { AdminTypes } from "./types/types";
import { useNavigate } from "react-router-dom";

const App = () => {
  const { adminSignIn, STATUS, SET_STATUS } = useContext(DataProvider);
  const navigate = useNavigate();
  const [DATA, SET_DATA] = useState<AdminTypes>({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    SET_DATA({
      ...DATA,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await adminSignIn(DATA);
  };

  if (STATUS === true) {
    navigate("/home");
    setTimeout(() => {
      SET_STATUS(false);
    }, 10000);
  }
  return (
    <main className="bg-[url('/background.jpg')] overflow-x-hidden md:h-[100vh]  items-center bg-fixed relative bg-cover justify-center flex w-[100%] ">
      <div className="w-[60vw] h-[100vh] md:h-auto p-5 items-center flex justify-center flex-col gap-4">
        <form
          className=" bg-teal-800 flex flex-col shadow-md rounded-lg text-white gap-5 w-[380px] md:w-[500px] px-10 py-10 md:p-12 md:py-10"
          onSubmit={handleSubmit}
        >
          <h2 className="md:text-2xl text-xl font-semibold ">
            LOG IN YOUR ADMIN ACCOUNT
          </h2>
          <div className="flex flex-col">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              id="email"
              name="email"
              value={DATA.email}
              className="bg-white text-center outline-none py-2 rounded-md"
              onChange={handleChange}
              placeholder="Enter your admin email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your admin password"
              value={DATA.password}
              className="bg-white text-gray-900 text-center outline-none py-2 rounded-md"
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-start">
            <button type="submit" className="px-6 rounded-md py-2 bg-green-400">
              Send
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default App;
