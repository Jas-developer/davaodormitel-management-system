import { useState } from "react";
import { AdminTypes } from "./types/types";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = async ({ email, password }: AdminTypes) => {
    try {
      const response = await fetch("http://localhost:5000/admin/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      if (response.ok) {
        alert("Login successful");
      } else {
        setErrorMessage("Wrong credentials!");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
      console.error("Error during login:", error);
    }
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await handleSignIn({ email, password });
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
            onChange={handleEmail}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            className="bg-white"
            onChange={handlePassword}
          />
          <button type="submit" className="bg-green-400">
            Send
          </button>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </form>
      </div>
    </main>
  );
};

export default App;
