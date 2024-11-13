export default function GameCard(props) {
    const listOfGames = props.games;
    
    
    const game = listOfGames.map((game, index) => (
        <div className="game-card-box" key={index}>
            <p><strong>Game ID Number:</strong> {game.id}</p>
            <p><strong>Game Title:</strong> {game.title}</p>
            <p><strong>Publisher:</strong> {game.publisher}</p>
            <p><strong>Review Date:</strong> {game.reviewDate}</p>
            <p><strong>Age Rating:</strong> {game.ageRating}</p>
            <p><strong>Platforms:</strong> {game.platform}</p>
            <p><strong>Description:</strong> {game.description}</p>
            <p><strong>Review:</strong> {game.reviews}</p>
        </div>
    ));

    return (
        <div className="game-card-container">
            {game}
        </div>
    );
}
