import { faBaby, faBiohazard, faSkull } from "@fortawesome/free-solid-svg-icons"

export const STATUS = {
    NEUTRAL: 1,
    ONGOING: 2,
    WIN: 3,
    LOSE: 4
}

export const DIFFICUTY = {
    EASY: {
        CODE: 12,
        BOARDSIZE: 4,
        DESCRIPTION: '4x4 board, no duplicate card, even baby can handle this',
        ICON: faBaby
    },
    MEDIUM: {
        CODE: 13,
        BOARDSIZE: 6,
        DESCRIPTION: '6x6 board, with duplicate cards, hard to remember',
        ICON: faSkull
    },
    HARD: {
        CODE: 14,
        BOARDSIZE: 8,
        DESCRIPTION: '8x8 board, duplicate cards, must match color, some card have similarity but don\'t get tricked',
        ICON: faBiohazard
    }
}

export const DIFFICUTY_BROADSIZE = {
    
}

export const DIFFICUTY_DESCRIPTION = {
    EASY: '4x4 board, no duplicate card, even baby can handle this',
    MEDIUM: '6x6 board, with duplicate cards, hard to remember',
    HARD: '8x8 board, duplicate cards, some card have similarity but don\'t get tricked'
}

export const CARD = {
    NEUTRAL: 21,
    MATCH: 22,
    MISMATCH: 23
}