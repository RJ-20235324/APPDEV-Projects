import Header from "./Header";
import ListOfFruits from "./ListOfFruits";
import Footer from "./Footer";

function App() {
  // ARRAY OF FRUITS / FRUIT OBJECTS
  
  const fruits = [
    { id: 1, name: "Apple", color: "red" }, // Apple_Object
    { id: 2, name: "Banana", color: "yellow" }, // Object
    { id: 3, name: "Orange", color: "orange" }, // Object
    { id: 4, name: "Grape", color: "purple" }, // Object
    { id: 5, name: "Kiwi", color: "Green" }, // Object
  ];
  const desserts = [
    { id: 1, name: "Cake", color: "red" },
    { id: 2, name: "Ice Cream", color: "Blue" },
    { id: 3, name: "Pie", color: "Yellow" },
  ];
  return (
    <>
      <Header />
      {fruits.length > 0 ? (
        <ListOfFruits items={fruits} category="My Favorite Fruits" />
      ) : (
        <p>Not Found</p>
      )}
      {desserts.length > 0 ? (
        <ListOfFruits items={desserts} category="My Favorite Desserts" />
      ) : (
        <p>I don't like desserts</p>
      )}
      <Footer />
    </>
  );
}

export default App;
