import Login from "./components/Login";

export default function App() {
  return (
    <main className="bg-[url('/background.jpg')] bg-cover flex justify-center items-center  w-[100vw] h-[100vh]">
      <div className="w-[90vw] h-[40vh] lg:w-[30vw] flex justify-center items-center  relative bg-[rgba(68,90,68,100%)] lg:h-[60vh] rounded-sm">
        <Login />
      </div>
    </main>
  );
}
