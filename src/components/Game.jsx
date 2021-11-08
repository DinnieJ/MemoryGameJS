import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CARD } from "../constants/game";
import { GAME_ACTION } from "../redux/modules/game/gameReducer";
import Card from "./Card";
import "./Game.scss";
import GameNotification from "./GameNotification";

const Game = (props) => {
  const dispatch = useDispatch();
  let map = useSelector((state) => state.game.map);
  const difficulty = useSelector((state) => state.game.difficulty);
  const turnStatus = useSelector((state) => state.game.currentTurn);
  const showAllCards = useSelector((state) => state.game.showAllCards);

  const getBoardSize = () => {
    let width, height;
    width = height = `${difficulty.BOARDSIZE * 6}rem`;
    return {
      width,
      height,
    };
  };

  useEffect(() => {
    let timeout;
    if (showAllCards) {
      timeout = setTimeout(function () {
        dispatch({ type: GAME_ACTION.SHOW_ALL_CARD, payload: { show: false } });
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, [showAllCards]);

  useEffect(() => {
    let timeout;
    if (turnStatus === CARD.MISMATCH) {
      timeout = setTimeout(function () {
        dispatch({ type: GAME_ACTION.RESET_CARD });
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line
  }, [turnStatus]);

  return (
    <React.Fragment>
      <GameNotification/>
      <div
        className=" p-8 bg-white rounded-3xl shadow-xl relative"
        style={{ ...getBoardSize() }}
      >
        {map.map((item, i) => (
          <Card
            content={item}
            key={i}
            position={i}
            onFLip={() =>
              dispatch({ type: GAME_ACTION.FLIP_CARD, payload: { index: i } })
            }
          ></Card>
        ))}
      </div>
    </React.Fragment>
  );
};

const TimerBar = ({  }) => {

}

export default Game;
