import React, { useContext } from 'react';
import { useLocalStorage } from '../custom-hooks/useLocalStorage';

const PlayersContext = React.createContext();

export function usePlayers(){
    return useContext(PlayersContext);
}


export const PlayersProvider = ({ children }) => {

    const [players, setPlayers] = useLocalStorage('players', []);

    function createPlayer(id,name){
        setPlayers(prevPlayers => {
            return [...prevPlayers, { id, name}]
        })
    }
    return (
        <PlayersContext.Provider value={{players, createPlayer}}>
            {children}
        </PlayersContext.Provider>
    )
}
