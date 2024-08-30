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
    navigate("/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
    SET_STATUS(false);
  }
  return (
    <main className="bg-[url('/background.jpg')] overflow-x-hidden md:h-[100vh] flex-col  items-center bg-fixed relative bg-cover justify-center flex w-[100%] ">
      <div className="w-[60vw] h-[100vh] md:h-auto p-5 bg-transparent items-center flex justify-center flex-col gap-4">
        <form
          className=" bg-white flex flex-col shadow-md rounded-md   text-white gap-5 w-[380px] md:w-[500px] px-10 py-10 md:p-12 md:py-10"
          onSubmit={handleSubmit}
        >
          <span className="text-center rounded-sm">E-Complaints</span>

          <div className="flex flex-col gap-2 bg-transparent">
            <label htmlFor="email " className="bg-transparent text-black">
              EMAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={DATA.email}
              className="bg-white text-center border-2 border-black text-gray-900 outline-none py-2 rounded-md"
              onChange={handleChange}
              placeholder="Enter your admin email"
            />
          </div>
          <div className="flex flex-col gap-2 bg-transparent">
            <label htmlFor="password" className="bg-transparent text-black">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your admin password"
              value={DATA.password}
              className="bg-white text-gray-900 border-2 border-black text-center outline-none py-2 rounded-md"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col justify-start gap-2 bg-inherit">
            <h2 className="md:text-2xl text-center text-black bg-transparent text-xl font-semibold ">
              ADMIN ACCOUNT
            </h2>
            <button
              type="submit"
              className="px-6 rounded-sm py-1.5 bg-blue-800 font-semibold"
            >
              LOGIN
            </button>
            <span className="bg-transparent text-black">Don't have account? </span>
          </div>
        </form>
      </div>
    </main>
  );
};

export default App;
