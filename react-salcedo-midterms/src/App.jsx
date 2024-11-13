import { useState } from 'react'
import Header from './Header.jsx';
import Identification from './Identification.jsx';
import FavoriteFood from './FavoriteFood.jsx';
import Counter from './Counter.jsx'
import FunctionComponent from './FunctionComponent.jsx';
import Paragraph from './Paragraph.jsx';
import Footer from './Footer.jsx'
import MyCart from './Mycart.jsx';








export default function App(){
  
  const fruits = [
    { id: 1, name: 'Kiwi', color: 'Brown', rating: 4 },
    { id: 2, name: 'Banana', color: 'Yellow', rating: 5 },
    { id: 3, name: 'Grapes', color: 'Purple', rating: 4 },
    { id: 4, name: 'Orange', color: 'Orange', rating: 3 },
    { id: 5, name: 'Pineapple', color: 'Red', rating: 5 },
  ];

  const porkDishes = [];
 

  return(
    <>
  
    <Header />
    <Identification/>
    <FavoriteFood items={fruits}/>
    <FavoriteFood items={porkDishes}/>
    <Counter/>
    <FunctionComponent/>
    <Paragraph/>
    <MyCart/>
    <Footer />
    </>
  );
}

