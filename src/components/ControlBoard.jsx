import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DIFFICUTY } from "../constants/game";
import { GAME_ACTION } from "../redux/modules/game/gameReducer";

const ControlBoard = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-1/3 h-2/3 rounded-3xl px-4 py-6 bg-white shadow-menubtn flex justify-start flex-col">
      <DifficutySelector />
      <button
        className="px-8 uppercase py-2 bg-blue-500 text-white font-bold text-xl rounded-full"
        onClick={() => dispatch({ type: GAME_ACTION.START_GAME })}
      >
        Start game
      </button>
    </div>
  );
};

const DifficutySelector = () => {
  const difficulty = useSelector((state) => state.game.difficulty);

  const dispatch = useDispatch();

  return (
    <div
      className="flex flex-row items-center justify-between
     my-6 px-8"
    >
      <h1 className="font-bold w-1/5">Difficulty</h1>
      <div className="flex flex-col flex-wrap justify-start w-4/5">
        <div className="flex flex-row flex-wrap justify-start">
          {Object.keys(DIFFICUTY).map((item, i) => (
            <button
              className={`w-28 py-2 mx-3 text-white text-lg rounded-2xl ${
                difficulty === DIFFICUTY[item]
                  ? "bg-yellow-400 shadow-side"
                  : "bg-blue-400"
              }`}
              onClick={() =>
                dispatch({
                  type: GAME_ACTION.SET_DIFFICULTY,
                  payload: { difficulty: DIFFICUTY[item] },
                })
              }
            >
              <FontAwesomeIcon icon={DIFFICUTY[item].ICON} size="1x" className="mr-2" />
              {item}
            </button>
          ))}
        </div>
        <p className="pl-3 mt-2 h-7 text-indigo-500">{difficulty.DESCRIPTION}</p>
      </div>
    </div>
  );
};

export default ControlBoard;
