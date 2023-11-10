import { observer } from "mobx-react-lite";
import { Login } from "./components/Login";
import { click } from "./states/Onclick";
import HomePage from "./pages/Home";

const App = observer(() => {
  console.log(click.LoginStatus);
  return (
    <main className="bg-[url('/background.jpg')] bg-cover justify-center flex w-[100vw] h-[100vh]">
      {click.LoginStatus === false ? (
        <div className=" flex   items-center ">
          <div className="w-[90vw] shadow-xl shadow-green-950 content h-[60vh] md:h-[90vh] lg:w-[30vw] flex justify-center items-center  relative bg-[rgba(68,90,68,100%)] lg:h-[80vh] ">
            <Login />
          </div>
        </div>
      ) : (
        <div className=" mt-2 w-[90vw] justify-center flex relative">
          <div className="w-[100%] h-[60vh] md:h-[90vh] lg:w-[30vw] flex justify-start relative  lg:h-[80vh] rounded-sm">
            <HomePage />
          </div>
        </div>
      )}
    </main>
  );
});

export default App;
