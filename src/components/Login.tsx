import { useState, useContext } from "react";
import { DataProvider } from "../states/UseContext";

type FormType = {
  email?: string;
  password?: string;
};

export const Login = () => {
  const { adminSignIn } = useContext(DataProvider);
  const [formData, setFormData] = useState<FormType | null | undefined>();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    adminSignIn(formData);
  };

  return (
    <section>
      <div className="bg-teal-500 px-12">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label>Enter your email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={formData?.email}
          />
          <label>Enter your password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={formData?.password}
          />
          <button
            type="submit"
            onClick={() =>
              setFormData({
                email: email,
                password: password,
              })
            }
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
