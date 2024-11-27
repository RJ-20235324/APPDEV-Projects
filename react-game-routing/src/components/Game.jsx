import { useLocation } from "react-router-dom";

export default function Game() {
    const location = useLocation();
    const game = location.state.game;

    return (
        <div className="game-container">
            <h1 className="game-title">{game.name}</h1>
            <img 
                src={game.image} 
                alt={game.name} 
                className="game-image" 
            />
            <p className="game-description">{game.description}</p>
            <div className="game-details">
                <p><strong>Publisher:</strong> {game.publisher}</p>
                <p><strong>Director:</strong> {game.director}</p>
                <p className="game-rating">{game.rating}</p>
            </div>
        </div>
    );
}
