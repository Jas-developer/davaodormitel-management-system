import { useState } from "react";
import { AdminTypes } from "./types/types";
import axios from "axios";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [STATUS, SET_STATUS] = useState<boolean | null>(false);

  /*
    @DESC POST REQUEST
    @DESC SIGNING IN AN ADMIN
  */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:5000/admin/signin", {
      email,
      password,
    });

    if (response) {
      SET_STATUS(STATUS === true ? false : true);
    }

    console.log(STATUS);
  };

  return (
    <main className="bg-[url('/background.jpg')] overflow-x-hidden md:h-[100vh]  bg-fixed relative bg-cover justify-center flex w-[100%] ">
      <div>
        <form className="border flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            className="bg-white"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            className="bg-white"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="bg-green-400">
            Send
          </button>
          {email} <br /> {password}
        </form>
      </div>
    </main>
  );
};

export default App;
