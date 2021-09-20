import React, { useContext, useState } from 'react';
import { useLocalStorage } from '../custom-hooks/useLocalStorage';

const PlayersContext = React.createContext();
const CourseContext = React.createContext();

export function usePlayers(){
    return useContext(PlayersContext);
}

export function useCourse(){
    return useContext(CourseContext);
}

export const PlayersProvider = ({ children }) => {
    const [course, setCourse] = useState({
        name: 'Pell City Country Club',
        par: 36,
        length: 9,
        holePar: [4, 5, 3, 4, 3, 5, 4, 4, 4],
        holeLength: [350, 515, 135, 340, 165, 492, 426, 376, 358 ],
        rules: ['Every player must tee-off from a beer can', 'Only drivers and putters on this hole, you may re-tee after first shot',   'Each player must Billy Madison their tee shot', 'Every player is free to distract the person teeing off', 'Every player use the womens tee-box and throw the ball as far as possible for stroke #1', 'Everyone uses their driver to putt on this hole']
    })
    const [players, setPlayers] = useLocalStorage('players', []);

    const rules = [
        
    ]

    function createPlayer(id,name){
        setPlayers(prevPlayers => {
            return [...prevPlayers, { id, name}]
        })
    }
    return (
        <CourseContext.Provider value={course}>
        <PlayersContext.Provider value={{createPlayer}}>
            {children}
        </PlayersContext.Provider>
        </CourseContext.Provider>
    )
}