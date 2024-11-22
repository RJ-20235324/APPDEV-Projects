import { Link } from "react-router-dom"

const games = [
    {
        id: 1, 
        name: "Honkai Impact 3rd", 
        description: "Girls (Valkyries) fighting to stop the world from ending (Impacts)."
    },
    {
        id: 2, 
        name: "Genshin Impact", 
        description: "Separated siblings (Descenders) on an adventure to find each other and to stop the world from ending (Heavenly Principles)."
    },
    {
        id: 3, 
        name: "Honkai Star Rail", 
        description: "God-like beings (Aeons) on a journey to different worlds in order make friends or enemies, and stop the world from ending (Stellarons)."
    },
    {
        id: 4, 
        name: "Zenless Zone Zero", 
        description: "Twins (Phaetons) meet different people from different factions find ways to stop the world from ending (Hollows)."
    }
]
export default function Games() {
    return (
        <>
            <h1>Games List:</h1>
            <h3>Sponsored by: Hoyoverse</h3>
            <ul>
                {
                    games.map((game) => (
                        <li key={game.id}>
                            <Link to={`/games/${game.id}`} state={{game}}>
                                {game.name.toUpperCase()}
                            </Link> - {game.description}
                        </li>
                    ))
                }
            </ul>
        </>
    )    
};
