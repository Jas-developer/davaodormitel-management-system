import { observer } from "mobx-react-lite";
import { Login } from "./components/Login";
import { click } from "./states/Onclick";
import HomePage from "./pages/Home";

const App = observer(() => {
  return (
    <main className="bg-[url('/background.jpg')] overflow-x-hidden md:h-[100vh]  bg-fixed relative bg-cover justify-center flex w-[100%] ">
      {click.LoginStatus === false ? (
        <div className=" flex  h-[100vh]  items-center ">
          <div className="w-[90vw] shadow-xl shadow-green-950 content  md:h-[90vh] lg:w-[30vw] flex justify-center items-center  relative bg-[rgba(68,90,68,100%)] lg:h-[80vh] ">
            <Login />
          </div>
        </div>
      ) : (
        <div className=" mt-2  justify-center ovefl flex relative">
          <div className=" md:w-full w-[90vw] overflow-x-hidden flex justify-start relative   rounded-sm">
            <HomePage />
          </div>
        </div>
      )}
    </main>
  );
});

export default App;
