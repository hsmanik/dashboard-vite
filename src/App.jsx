import "./App.css";
import { LeftColumn } from "./components/LeftColumn";
import { Navbar } from "./components/Navbar";
import { RightColumn } from "./components/RightColumn";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <main className=" flex">
      <SideBar />
      <div className="flex flex-col flex-1 relative">
        <Navbar />
        <div className=" grid md:grid-cols-3 grid-cols-1 w-full">
          <div className=" col-span-2">
            <LeftColumn />
          </div>
          <div className=" w-full">
            <RightColumn />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
