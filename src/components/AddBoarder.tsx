import { useState } from "react";
import { BorderType } from "../types/types";

import { useNavigate } from "react-router-dom";

function AddBoarder() {
  const [formData, setFormData] = useState<BorderType>({
    name: "",
    room: "",
    due: "",
    starting: "",
    amount: "",
    _id: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // this will finalize the flow of adding a new data to the server
  const addBoarder = async (DATA: BorderType) => {
    try {
      if (DATA) {
        const abortController = new AbortController();
        const token = localStorage.getItem("token");
        const data = await fetch("http://localhost:5001/api/boarders", {
          method: "POST",
          signal: abortController.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(DATA),
        });

        if (data) {
          console.log(data);
          navigate("/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
          location.reload();
        }
      }
    } catch (error) {
      throw new Error("Unable to add a new boarder");
    }
  };

  // sending the data to add a new boarder
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const added = addBoarder(formData);
      if (!added) {
        throw new Error("Form not submitted");
      }

      alert("New Boarder has been added, Refresh the page.");
      navigate("/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9");
      setFormData({
        name: "",
        room: "",
        due: "",
        starting: "",
        amount: "",
        _id: "",
      });
    } catch (error) {
      console.log(error);
      alert("Invalid Credentials");
    }
  };

  const handleCancel = () => {
    navigate("/home");
  };

  const inputStyle =
    "w-full bg-gray-300 font-semibold outline-none text-center rounded-sm py-2";
  const labelStyle = "font-semibold uppercase text-gray-200 ";

  return (
    <section className="flex flex-col gap-2 relative w-auto ">
      <h3 className="text-gray-100 font-semibold text-2xl font-serif text-center p-2 bg-yellow-600">
        NEW BOARDER
      </h3>
      <div className=" w-full p-2">
        <form onSubmit={handleSubmit} className="flex  flex-col gap-2">
          <label className={labelStyle} htmlFor="name">
            Name:
          </label>
          <input
            className={inputStyle}
            type="text"
            onChange={handleChange}
            name="name"
            value={formData.name}
            placeholder="Enter a name, Ex:John Doe"
          />
          <label className={labelStyle} htmlFor="room_number">
            room#:
          </label>
          <input
            className={inputStyle}
            type="text"
            name="room"
            value={formData.room}
            onChange={handleChange}
            placeholder="Enter a room number, Ex: A-5 or B-4"
          />
          <label className={labelStyle} htmlFor="montly_amount_due">
            AMOUNT DUE:
          </label>
          <input
            className={inputStyle}
            type="number"
            name="amount"
            onChange={handleChange}
            value={formData.amount}
            placeholder="Enter amount due, Ex: 2000"
          />
          <label className={labelStyle} htmlFor="date_started">
            STARTING DATE:
          </label>
          <input
            className={inputStyle}
            placeholder="Enter the boarder starting date, Ex: 10/2/34"
            type="text"
            name="starting"
            onChange={handleChange}
            value={formData.starting}
          />
          <label className={labelStyle} htmlFor="montly_due_date">
            due date:
          </label>
          <input
            className={inputStyle}
            placeholder="Enter a boarder due date , Ex:22"
            type="text"
            name="due"
            onChange={handleChange}
            value={formData.due}
          />
          <div className="flex flex-row justify-start  gap-4 mt-2">
            <button
              onClick={handleCancel}
              className="text-gray-100 bg-red-600 px-6 py-2 rounded-lg"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="bg-teal-600 text-gray-100 px-6 py-2 font-semibold font-serif rounded-lg"
            >
              DONE
            </button>
            <span className="text-orange-500"></span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddBoarder;
