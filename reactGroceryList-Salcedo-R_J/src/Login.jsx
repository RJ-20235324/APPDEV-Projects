import { useState } from "react";
import Shop from "./shop";


export default function Login() {
  const items = [
    { id: 1, name: "grape", price: 50, icon: "🍇" },
    { id: 2, name: "orange", price: 30, icon: "🍊" },
    { id: 3, name: "kiwi", price: 40, icon: "🥝" },
    {id: 4, name: "banana", price: 20, icon: "🍌" },
    {id: 5, name: "cucumber", price: 50, icon: "🥒" },
    {id: 6, name: "strawberry", price: 70, icon: "🍓" }
  ];


  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [role, setRole] = useState("user");





  const renderShop = () => <Shop isLoggedIn={isLoggedIn} items={items} />;


  if (!isLoggedIn) {
    return renderLogin();
  } else {
    return role === "admin" ? renderAdmin() : renderShop();
  }
}
