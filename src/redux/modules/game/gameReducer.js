import { DEFAULT_CARD_COLOR, CARD_MISMATCH_BGCOLOR, CARD_MATCH_BGCOLOR } from "../../../constants/cardcontent"
import { CARD, DIFFICUTY, STATUS } from "../../../constants/game"
import { generateMap } from "../../../utils/getRandomCard"

const initState = {
    map: [],
    firstCard: -1,
    secondCard: -1,
    firstCardObj: {},
    secondCardObj: {},
    selected: '',
    isGameStart: false,
    gameStatus: STATUS.NEUTRAL,
    difficulty: DIFFICUTY.EASY,
    currentTurn: CARD.NEUTRAL,
    showAllCards: false
}

const GAME_ACTION = {
    START_GAME: 'GA1',
    FLIP_CARD: 'GA2',
    RESET_CARD: 'GA3',
    SET_DIFFICULTY: 'CB1',
    SHOW_ALL_CARD: 'GA4',
    RESET_STATE: 'GA5'
}

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        /// generate new game
        case GAME_ACTION.START_GAME:
            let map = generateMap(state.difficulty)
            return {
                ...state,
                map,
                gameStatus: STATUS.ONGOING,
                isGameStart: true,
                showAllCards: true
            }
        case GAME_ACTION.FLIP_CARD:
            const cardIndex = action.payload.index
            // When game is not start or waiting for card animation frame
            if (state.gameStatus === STATUS.NEUTRAL //game is not start
                || state.currentTurn !== CARD.NEUTRAL // waiting for animation
                || state.map[cardIndex].flipped
                || state.map[cardIndex].show
            ) {
                return state
            }

            // save first result
            if (state.firstCard === -1) {
                console.log(state.firstCard);
                let cloneMap = [...state.map]
                cloneMap[cardIndex] = {
                    ...cloneMap[cardIndex],
                    show: true
                }

                return {
                    ...state,
                    map: cloneMap,
                    firstCard: cardIndex,
                    firstCardObj: cloneMap[cardIndex]
                }

            } else {
                //save second result and comparing then return
                let cloneMap = [...state.map]
                // if 2 card match
                if (cloneMap[cardIndex].icon.iconName === cloneMap[state.firstCard].icon.iconName
                    && cloneMap[cardIndex]) {
                
                    cloneMap[cardIndex] = {
                        ...cloneMap[cardIndex],
                        show: true,
                        backgroundColor: CARD_MATCH_BGCOLOR,
                        flipped: true
                    }

                    cloneMap[state.firstCard] = {
                        ...cloneMap[cardIndex],
                        show: true,
                        backgroundColor: CARD_MATCH_BGCOLOR,
                        flipped: true
                    }

                    if(isGameCleared(cloneMap)) {
                        console.log('win');
                        return {
                            ...state,
                            map: cloneMap,
                            firstCard: -1,
                            secondCard: -1,
                            currentTurn: CARD.NEUTRAL,
                            gameStatus: STATUS.WIN
                        }
                    }
                    else return {
                        ...state,
                        map: cloneMap,
                        firstCard: -1,
                        secondCard: -1,
                        currentTurn: CARD.NEUTRAL
                    }
                }
                // if 2 card mismatch
                else {
                    let secondCardObj = cloneMap[cardIndex]
                    cloneMap[cardIndex] = {
                        ...cloneMap[cardIndex],
                        show: true,
                        backgroundColor: CARD_MISMATCH_BGCOLOR
                    }

                    cloneMap[state.firstCard] = {
                        ...cloneMap[state.firstCard],
                        show: true,
                        backgroundColor: CARD_MISMATCH_BGCOLOR
                    }
                    return {
                        ...state,
                        currentTurn: CARD.MISMATCH,
                        map: cloneMap,
                        secondCard: cardIndex,
                        secondCardObj
                    }
                }
            }
        case GAME_ACTION.RESET_CARD:
            // reset card after mismatch
            let cloneMap = [...state.map]
            cloneMap[state.firstCard].show = false
            cloneMap[state.secondCard].show = false
            cloneMap[state.firstCard].backgroundColor = state.firstCardObj.backgroundColor
            cloneMap[state.secondCard].backgroundColor = state.secondCardObj.backgroundColor

            return {
                ...state,
                map: cloneMap,
                firstCard: -1,
                secondCard: -1,
                firstCardObj: {},
                secondCardObj: {},
                currentTurn: CARD.NEUTRAL
            }
        case GAME_ACTION.SET_DIFFICULTY:
            return {
                ...state,
                difficulty: action.payload.difficulty
            }
        case GAME_ACTION.SHOW_ALL_CARD:
            let cMap = [...state.map]
            cMap.forEach(el => {
                el.show = action.payload.show
            });

            return {
                ...state,
                map: cMap,
                showAllCards: action.payload.show
            }

        case GAME_ACTION.RESET_STATE:
            return {
                ...initState
            }
        default:
            return state
    }
}

const isGameCleared = (map) => {
    let winned = true
    for (let index = 0; index < map.length; index++) {
        if(map[index].flipped === false) {
            winned = false 
            break
        }
    }

    return winned
}

export { gameReducer, GAME_ACTION }