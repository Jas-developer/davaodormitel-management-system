import { useCallback, useEffect, useState } from "react";
import { BorderType } from "../types/types";

const ViewProfile = ({ id }: any) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [boarder, setBoarder] = useState<BorderType | undefined>();
  const [formData, setFormData] = useState<BorderType>({
    _id: "",
    amount: "",
    due: "",
    name: "",
    room: "",
    starting: "",
  });

  // getting a single data for preview when editing
  const getSingleData = useCallback(async (id: string) => {
    try {
      const abortController = new AbortController();
      let token = localStorage.getItem("token");
      const response: any = await fetch(
        `http://localhost:5001/api/boarders/${id}`,
        {
          method: "GET",
          signal: abortController.signal,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setBoarder(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  // Updating the data
  const updatingData = async (id?: string) => {
    try {
      const abortController = new AbortController();
      const token = localStorage.getItem("token");
      const data = await fetch(`http://localhost:5001/api/boarders/${id}`, {
        method: "PUT",
        signal: abortController.signal,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData), // Change FormData to formData here
      });

      if (data) {
        const response = await data.json();
        console.log(response);
        alert("Boarder has been updated");
        location.reload();
      }
    } catch (error: any) {
      throw new Error("Error Updating Data" + error);
    }
  };
  useEffect(() => {
    getSingleData(id);
    ``;
  }, [getSingleData, id]);

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    setFormData({
      _id: "",
      amount: "",
      due: "",
      name: "",
      room: "",
      starting: "",
    });
  };

  const inputStyle =
    "w-full bg-gray-300 font-semibold outline-none text-center text-gray-900  rounded-sm py-2";
  const labelStyle = "font-semibold uppercase text-start text-gray-200 ";

  return (
    <>
      <button
        className="bg-teal-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-8 rounded-full  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex bg-transparent overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  my-2 mx-auto border  w-[80vw] max-w-3xl rounded-md">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 r bg-yellow-600 border-b border-solid border-blueGray-200 rounded-t">
                  <p className="text-3xl font-semibold bg-transparent">
                    {boarder?.name}
                  </p>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative  flex-auto ">
                  <div className=" w-full  p-2">
                    <form
                      onSubmit={handleSubmit}
                      className="flex  flex-col gap-2  "
                    >
                      <label className={labelStyle} htmlFor="name">
                        Name:
                      </label>
                      <input
                        className={inputStyle}
                        type="text"
                        onChange={handleChange}
                        name="name"
                        value={formData.name}
                        placeholder={boarder?.name}
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
                        placeholder={boarder?.room}
                      />
                      <label className={labelStyle} htmlFor="montly_amount_due">
                        AMOUNT DUE:
                      </label>
                      <input
                        className={inputStyle}
                        type="text"
                        name="amount"
                        onChange={handleChange}
                        value={formData.amount}
                        placeholder={boarder?.amount}
                      />
                      <label className={labelStyle} htmlFor="date_started">
                        STARTING DATE:
                      </label>
                      <input
                        className={inputStyle}
                        placeholder={boarder?.starting}
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
                        placeholder={boarder?.due}
                        type="text"
                        name="due"
                        onChange={handleChange}
                        value={formData.due}
                      />
                      <div>
                        <div className="flex items-center  justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => {
                              setShowModal(false);
                              updatingData(boarder?._id);
                            }}
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export { ViewProfile };
