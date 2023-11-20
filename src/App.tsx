import { Login } from "./components/Login";

const App = () => {
  return (
    <main className="bg-[url('/background.jpg')] overflow-x-hidden md:h-[100vh]  bg-fixed relative bg-cover justify-center flex w-[100%] ">
      <Login />
    </main>
  );
};
export default App;
