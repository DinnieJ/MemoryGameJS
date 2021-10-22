import { ICONS, DEFAULT_CARD_COLOR, HARD_MODE_ICONS } from "../constants/cardcontent";
import { shuffle } from "./shuffle";
import _ from 'lodash'
import { DIFFICUTY } from "../constants/game";

const randomArr = (arr) => (arr[Math.floor(Math.random() * arr.length)])

const getRandomColor = () => {
    const COLOR_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
    let bgColor = ''

    for(let i = 0; i < 6; i++) {
        bgColor += randomArr(COLOR_CHARS)
    }

    return `#${bgColor}`
}

const createMapEasy = () => {
    let shuffleIcons = shuffle(ICONS)
    let map = []
    for(let i = 0; i < 8; i++) {
        map.push({ code: i, show: false, icon: shuffleIcons[i],  ...DEFAULT_CARD_COLOR })
    }

    let cloneMap = _.cloneDeep(map)

    map = shuffle(map.concat(cloneMap))

    return map;
}

const generateMap = (difficulty) => {
    let map = []
    switch(difficulty.CODE) {
        case DIFFICUTY.EASY.CODE:
            const shuffleIcons = shuffle(ICONS)
            for(let i = 0; i < 8; i++) {
                map.push({flipped: false, show: true, icon: shuffleIcons[i],  ...DEFAULT_CARD_COLOR })
            }
            break
        case DIFFICUTY.MEDIUM.CODE:
            for(let i = 0; i < 18; i++) {
                map.push({ flipped: false, show: true, icon: randomArr(ICONS),  ...DEFAULT_CARD_COLOR })
            }
            break
        case DIFFICUTY.HARD.CODE:
            for(let i = 0; i < 16; i++) {
                map.push(
                    { flipped: false, show: true, icon: randomArr(ICONS),  backgroundColor: getRandomColor(), iconColor: DEFAULT_CARD_COLOR.iconColor },
                    { flipped: false, show: true, icon: randomArr(HARD_MODE_ICONS), backgroundColor: getRandomColor(), iconColor: DEFAULT_CARD_COLOR.iconColor }
                )
            }
        break
        default:
        break
    }

    let cloneMap = _.cloneDeep(map)

    map = shuffle(map.concat(cloneMap))

    return map
}

export { createMapEasy, generateMap }