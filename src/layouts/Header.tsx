import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const handleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="w-full px-4 py-4 z-50 bg-gray-800 shadow-md font-mono font-extrabold fixed text-md md:text-lg lg:text-xl text-start grid grid-cols-1 md:grid-cols-6">
        <div className="col-1 md:col-span-3">
          <h1 className="text-start text-blue-600">John-Bytes Portfolio</h1>
        </div>
       
        <div className="col-2 md:col-6 flex justify-end">
            <button onClick={handleSideBar} className="material-symbols-outlined text-green-500">menu</button>
        </div>
        <Sidebar
        isOpen={isOpen}
        isClose={() => {
          setIsOpen(false);
        }}
      />
      </header>
    </>
  );
}