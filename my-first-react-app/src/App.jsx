import Footer from './Footer';
import Header from './Header';
import Body from './Body';

export default function App(){
    return(
        <>
        <Header />
        <br />
        <Body name = "R J "  food="Cinnamon Rolls" isHealthy={true} age={20}/>
        <Body name = "James "  food="Ceasar Salad" isHealthy={true} age={20}/>
        <Body name = "Frenzhel "  food="Stingray Soup" isHealthy={false} age={20}/>
        <Body name = "William"  food="Red Fried Chicken" isHealthy={false} age={20}/>
        <Body name = "Alfredo"  food="Banana" isHealthy={true} age={20}/>
        <br />
        <Footer />
        </>
       
    )
}