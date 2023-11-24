import { useContext, useState } from "react";
import { FORMTYPE } from "../types/types";
import { DataProvider } from "../states/UseContext";
import { useNavigate } from "react-router-dom";

function AddBoarder() {
  const [formData, setFormData] = useState<FORMTYPE>({
    name: "",
    room_number: "",
    monthly_due_date: "",
    date_started: "",
    monthly_amount_due: "",
  });
  const { sendData } = useContext(DataProvider);
  const navigate = useNavigate();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      await sendData(formData);
      alert("New Boarder has been added, Refresh the page.");
      navigate("/home");
      setFormData({
        name: "",
        room_number: "",
        monthly_amount_due: "",
        date_started: "",
        monthly_due_date: "",
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
            name="room_number"
            value={formData.room_number}
            onChange={handleChange}
            placeholder="Enter a room number, Ex: A-5 or B-4"
          />
          <label className={labelStyle} htmlFor="montly_amount_due">
            AMOUNT DUE:
          </label>
          <input
            className={inputStyle}
            type="number"
            name="monthly_amount_due"
            onChange={handleChange}
            value={formData.monthly_amount_due}
            placeholder="Enter amount due, Ex: 2000"
          />
          <label className={labelStyle} htmlFor="date_started">
            STARTING DATE:
          </label>
          <input
            className={inputStyle}
            placeholder="Enter the boarder starting date, Ex: 10/2/34"
            type="text"
            name="date_started"
            onChange={handleChange}
            value={formData.date_started}
          />
          <label className={labelStyle} htmlFor="montly_due_date">
            due date:
          </label>
          <input
            className={inputStyle}
            placeholder="Enter a boarder due date , Ex:22"
            type="text"
            name="monthly_due_date"
            onChange={handleChange}
            value={formData.monthly_due_date}
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
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddBoarder;
