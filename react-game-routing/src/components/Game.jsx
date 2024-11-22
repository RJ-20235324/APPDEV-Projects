import { useLocation } from "react-router-dom"

export default function Game() {
    const location = useLocation()
    const game = location.state.game

    return (
        <>
            <div>
                <h1>{game.name}</h1>
                <p>{game.description}</p>
                <br />
                <p>Publisher: {game.publisher}</p>
                <br />
                <p>Director: {game.director}</p>
                <p>{game.rating}</p>
            </div>
        </>
    )
};

