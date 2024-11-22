import { Link } from "react-router-dom"

const games = [
    {
        id: 1, 
        name: "Red Dead Redemption", 
        description: "Red Dead Redemption is a 2010 action-adventure game developed by Rockstar San Diego and published by Rockstar Games. A successor to 2004's Red Dead Revolver, it is the second game in the Red Dead series. Red Dead Redemption is set during the decline of the American frontier in the year 1911. It follows John Marston, a former outlaw who, after his wife and son are taken hostage by the government in ransom for his services as a hired gun, sets out to bring three members of his former gang to justice. The narrative explores themes of the cycle of violence, masculinity, redemption, and the American Dream.", 
        publisher: "Rockstar Games", 
        director: "Steve Martin, Josh Needleman, David Kunkler",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 2, 
        name: "Red Dead Redemption 2", 
        description: "Separated siblings (Descenders) on Red Dead Redemption 2[a] is a 2018 action-adventure game developed and published by Rockstar Games. The game is the third entry in the Red Dead series and a prequel to the 2010 game Red Dead Redemption. The story is set in a fictionalized representation of the United States in 1899 and follows the exploits of Arthur Morgan, an outlaw and member of the Van der Linde gang, who must deal with the decline of the Wild West while attempting to survive against government forces, rival gangs, and other adversaries. The game is presented through first- and third-person perspectives, and the player may freely roam its interactive open world. Gameplay elements include shootouts, robberies, hunting, horseback riding, interacting with non-player characters, and maintaining the character's honor rating through moral choices and deeds. A bounty system governs the response of law enforcement and bounty hunters to crimes committed by the player. adventure to find each other and to stop the world from ending (Heavenly Principles).", 
        publisher: "Rockstar Games", 
        director: "Rob Nelson",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 3, 
        name: "Grand Theft Auto: Vice City", 
        description: "Grand Theft Auto: Vice City is a 2002 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the fourth main game in the Grand Theft Auto series, following 2001's Grand Theft Auto III, and the sixth entry overall. Set in 1986 within the fictional Vice City (based on Miami and Miami Beach), the single-player story follows mobster Tommy Vercetti's rise to power after being released from prison and becoming caught up in an ambushed drug deal. While seeking out those responsible, Tommy gradually builds a criminal empire by seizing power from other criminal organisations in the city.God-like beings (Aeons) on a journey to different worlds in order make friends or enemies, and stop the world from ending (Stellarons).", 
        publisher: "Rockstar Games", 
        director: "Leslie Benzies",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 4, 
        name: "Grand Theft Auto IV", 
        description: "Grand Theft Auto IV is a 2008 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the sixth main entry in the Grand Theft Auto series, following 2004's Grand Theft Auto: San Andreas, and the eleventh entry overall. Set in the fictional Liberty City, based on New York City, the single-player story follows Eastern European war veteran Niko Bellic and his attempts to escape his past while under pressure from high-profile criminals. The open world design lets players freely roam Liberty City, consisting of three main islands, and the neighbouring state of Alderney, which is based on New Jersey.", 
        publisher: "Rockstar Games", 
        director: "Leslie Benzies",
        rating: "⭐⭐⭐⭐⭐"
    },
    {
        id: 5, 
        name: "Grand Theft Auto V", 
        description: "Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa (Ned Luke), street gangster Franklin Clinton (Shawn Fonteno), and drug dealer and gunrunner Trevor Philips (Steven Ogg), and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. Players freely roam San Andreas's open world countryside and fictional city of Los Santos, based on Los Angeles.", 
        publisher: "Rockstar Games", 
        director: "Leslie Benzies",
        rating: "⭐⭐⭐⭐⭐"
    },
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
                            </Link> 
                        </li>
                    ))
                }
            </ul>
        </>
    )    
};
