import React  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DEFAULT_CARD_COLOR, DEFAULT_CARD_ICON } from "../constants/cardcontent";
import './Card.scss'
import { useSelector } from "react-redux";

const Card = ({ content, position, onFLip }) => {
  const difficulty = useSelector(state => state.game.difficulty)
  const getPosition = () => ({
    top: `${Math.floor(position / difficulty.BOARDSIZE) * (100/difficulty.BOARDSIZE)}%`,
    left: `${(position % difficulty.BOARDSIZE) * (100/difficulty.BOARDSIZE)}%`,
  })
  return (
    <div
      className={`card w-16 h-16 p-2 m-4 absolute rounded-full bg-white flex justify-center items-center`}
      style={{ backgroundColor: content.show ? content.backgroundColor : DEFAULT_CARD_COLOR.backgroundColor, ...getPosition() }}
      onClick={onFLip}
    >
      <FontAwesomeIcon
        icon={content.show ? content.icon : DEFAULT_CARD_ICON}
        size={ content.show ? '2x' : '1x' }
        color={content.show ? content.iconColor: DEFAULT_CARD_COLOR.iconColor}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Card;
