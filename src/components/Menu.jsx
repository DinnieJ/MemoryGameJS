import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="w-full h-full bg-transparent flex justify-center items-center">
      <div className="w-80 h-96 px-5 shadow-xl rounded-xl flex flex-col justify-center bg-white">
        <h1 className="font-bold text-2xl pb-6 text-center">MemoryJS</h1>
        <Link to="/single">
          <button className="uppercase rounded-2xl w-full p-2 my-2 text-white font-bold bg-blue-500 hover:shadow-menubtn transition ease-in-out duration-200">
            Single player
          </button>
        </Link>
        <Link to="/multi">
          <button className="uppercase rounded-2xl w-full p-2 my-2 text-white font-bold bg-blue-500 hover:shadow-menubtn transition ease-in-out duration-200">
            Multiplayer
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
