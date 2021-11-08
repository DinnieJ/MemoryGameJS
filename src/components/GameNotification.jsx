import React, { useState, useEffect } from "react";
import "./GameNotification.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { STATUS } from "../constants/game";
import { GAME_ACTION } from "../redux/modules/game/gameReducer";

const GameNotification = () => {
  const gameStatus = useSelector((state) => state.game.gameStatus);

   const dispatch = useDispatch()

  const [notificationMessage, setnotificationMessage] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (gameStatus === STATUS.WIN) {
      setnotificationMessage({
        title: "Congratulation",
        content: "You win, feeling good eh ?",
      });
    } else if (gameStatus === STATUS.LOSE) {
      setnotificationMessage({
        title: "Sorry",
        content: "You lose, try again ?",
      });
    }
  }, [gameStatus]);
  if(gameStatus === STATUS.WIN || gameStatus === STATUS.LOSE) {
    return (
        <div className="w-full h-full fixed flex bg-black bg-opacity-20 z-40 justify-center items-center">
          <div className="notification flex items-center flex-col px-8 py-6">
            <h1 className="font-bold text-3xl">{notificationMessage.title}</h1>
            <p>{ notificationMessage.content }</p>
            <Link to="/single">
              <button className="uppercase rounded-2xl w-full p-2 my-2 text-white font-bold bg-blue-500 hover:shadow-menubtn transition ease-in-out duration-200" onClick={() => dispatch({type: GAME_ACTION.RESET_STATE})}>
                Try again
              </button>
            </Link>
            <Link to="/">
              <button className="uppercase rounded-2xl w-full p-2 my-2 text-white font-bold bg-blue-500 hover:shadow-menubtn transition ease-in-out duration-200" onClick={() => dispatch({type: GAME_ACTION.RESET_STATE})}>
                Go to menu
              </button>
            </Link>
          </div>
        </div>
      );
  }
  else return <React.Fragment/>

};

export default GameNotification;
