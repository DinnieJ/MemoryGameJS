import React from 'react'
import { useSelector } from 'react-redux'
import ControlBoard from '../components/ControlBoard'
import Game from '../components/Game'
import Default from '../components/layouts/default'

const Single = () => {
    const isGameStarted = useSelector(state => state.game.isGameStart)
    return (
        <Default>
            {isGameStarted ? <Game/> : <ControlBoard/>}
        </Default>
    )
}

export default Single
