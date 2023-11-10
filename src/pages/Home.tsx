import { click } from "../states/Onclick";

export default function HomePage() {
  return (
    <div className="flex flex-row justify-between  items-start  w-full">
      <button className="text-md  px-2 py-1  font-bold bg-teal-700 rounded-full text-gray-100">
        ADMIN
      </button>
      <button
        onClick={() => click.OnClick(false)}
        className="bg-green-700 px-4 py-2 font-semibold text-gray-100 shadow-md rounded-md"
      >
        Logout
      </button>
    </div>
  );
}
