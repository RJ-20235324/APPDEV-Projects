import Footer from './Footer';
import Header from './Header';
import Body from './Body';

export default function App(){
    return(
        <>
        <Header />
        <br />
        <Body/>
        <br />
        <Body name = "R J "  food="Cinnamon Rolls" isHealthy={false} age={20}/>
        <br />
        <Body name = "James "  food="Ceasar Salad" isHealthy={true} age={22}/>
        <br />
        <Body name = "Frenzhel "  food="Stingray Soup" isHealthy={false} age={19}/>
        <br />
        <Body name = "William"  food="Red Fried Chicken" isHealthy={false} age={26}/>
        <br />
        <Body name = "Alfredo"  food="Banana" isHealthy={true} age={17}/>
        <br />
        <Footer />
        </>
       
    )
}