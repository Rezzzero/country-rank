import logo from "../src/assets/logo/logo.svg";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="mx-auto md:mx-[6px] flex flex-col items-center pt-10 pb-12 px-2 gap-20 md:pt-15 lg:px-6 lg:pt-30 lg:gap-23">
      <img src={logo} alt="logo" className="mx-auto w-[130px] md:w-[150px]" />
      <Outlet />
    </div>
  );
}

export default App;
