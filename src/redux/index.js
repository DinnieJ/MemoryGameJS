import { gameReducer } from './modules/game/gameReducer'
import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    game: gameReducer
})

const store = createStore(rootReducer)

export { store }