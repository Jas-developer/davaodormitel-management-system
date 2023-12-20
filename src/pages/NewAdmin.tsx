import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { DataProvider } from "../states/UseContext";

/*
@types
*/
type adminType = {
  name: String;
  email: String;
  password: String;
};

export const AddNewAdmin = () => {
  const [admin, setAdmin] = useState<adminType>({
    name: "",
    email: "",
    password: "",
  });
  const { registerAdmin } = useContext(DataProvider);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    registerAdmin(admin);
    setAdmin({
      name: "",
      email: "",
      password: "",
    });
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-yellow-500 flex flex-col gap-12">
      <div className="bg-transparent flex flex-row items-center justify-center">
        <button onClick={() => navigate("/home")} className="py-2 px-2">
          <img
            width="50"
            height="50"
            className="bg-red-400 rounded-lg"
            src="https://img.icons8.com/ios-filled/50/000000/circled-left-2.png"
            alt="circled-left-2"
          />
        </button>
        <h2 className="text-white bg-transparent font-bold py-4 text-center uppercase text-2xl">
          Register New Admin
        </h2>
      </div>
      <div className="flex  flex-col gap-2 bg-yellow-500 px-4 h-[100vh]">
        <form
          onSubmit={handleSubmit}
          className="bg-yellow-500 flex flex-col gap-3"
        >
          <div className="flex flex-col bg-transparent">
            <label className="text-white bg-yellow-500">Name:</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              className="bg-gray-400 rounded-md py-2 text-center"
            />
          </div>
          <div className="flex flex-col bg-transparent">
            <label className="text-white bg-yellow-500">Email:</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              className="bg-gray-400 rounded-md py-2 text-center"
            />
          </div>
          <div className="flex flex-col bg-transparent">
            <label className="text-white bg-yellow-500">Password:</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              className="bg-gray-400 rounded-md py-2 text-center"
            />
          </div>
          <div className="bg-transparent flex justify-start items-start py-2">
            <button
              type="submit"
              className="bg-red-500 px-4 py-2 rounded-md text-white font-semibold shadow-lg"
            >
              Register
            </button>
          </div>
        </form>

        <div className="text-white font-semibold flex bg-transparent flex-col">
          <h2 className="bg-transparent text-xl text-red-600">NOTE!</h2>
          <p className="rounded-md p-3">
            Do not share your information with anyone because this management
            system is still under development, and security is still at risk.
            {admin.email}-{admin.name}-{admin.password}
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};
