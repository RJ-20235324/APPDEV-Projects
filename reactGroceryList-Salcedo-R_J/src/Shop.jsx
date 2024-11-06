import React, { useState } from "react";
import Login from "./Login";

export default function Shop(props) {
  let ShopItems = props.items;
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState(""); 
  const [paymentStatus, setPaymentStatus] = useState("");
  const [receipt, setReceipt] = useState(""); 

  // Add item to the cart
  function addItem(item) {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      let updatedCart;

      if (itemIndex >= 0) {
        updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
      } else {
        updatedCart = [...prevCart, { ...item, quantity: 1 }];
      }

      const newTotalPrice = updatedCart.reduce(
        (acc, currItem) => acc + (currItem.price * currItem.quantity),
        0
      );

      setTotalPrice(newTotalPrice);
      return updatedCart;
    });
  }

  // Handle payment process
  function handlePayment() {
    const enteredAmount = parseFloat(paymentAmount);

    if (isNaN(enteredAmount) || enteredAmount <= 0) {
      setPaymentStatus("Please enter a valid amount to pay.");
      return;
    }

    if (enteredAmount >= totalPrice) {
      const change = (enteredAmount - totalPrice).toFixed(2);
      setPaymentStatus(`Payment successful! Your change is $${change}.`);

      // Create detailed receipt
      const receiptItems = cart.map((product) => {
        const itemTotal = (product.price * product.quantity).toFixed(2);
        return `
          Item: ${product.name}
          Price per piece: $${product.price.toFixed(2)}
          Quantity: ${product.quantity}
          Total: $${itemTotal}
          --------------------`;
      }).join("\n");

      setReceipt(`
        Receipt:
        --------------------
        ${receiptItems}
        --------------------
        Total: $${totalPrice.toFixed(2)}
        Paid: $${enteredAmount.toFixed(2)}
        Change: $${change}
        --------------------
        Thank you for your purchase!
      `);

      // Reset the cart and other states
      setCart([]);
      setTotalPrice(0);
      setPaymentAmount(""); 
    } else {
      setPaymentStatus(`Insufficient funds. You still owe $${(totalPrice - enteredAmount).toFixed(2)}.`);
      setReceipt(""); 
    }
  }

  // Render the items available in the shop
  const renderItems = () => {
    return ShopItems.map((item) => {
      return (
        <div className="itemDisplay" key={item.id}>
          <p className="itemIcon">{item.icon}</p>
          <p className="itemName">{item.name}</p>
          <p>Price per piece: ${item.price}</p>
          <button onClick={() => addItem(item)}>Add to Cart!</button>
        </div>
      );
    });
  };

  // Render the cart items
  const renderCart = () => {
    return cart.map((product) => {
      return (
        <div className="itemCard" key={product.id}>
          <p>{product.name}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Total Price for this item: ${(product.quantity * product.price).toFixed(2)}</p>
        </div>
      );
    });
  };

  if (props.isLoggedIn === false) {
    return <Login />;
  } else {
    return (
      <>
        <h1>Cart to Go</h1>
        <div className="allItems">
          {renderItems()}
        </div>
        <br />
        <h4>These are the cart items:</h4>
        <h4>Total amount: ${totalPrice.toFixed(2)}</h4>
        <div>{renderCart()}</div>

        {totalPrice > 0 && (
          <>
            <h4>Enter Payment Amount:</h4>
            <input
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              placeholder="Enter amount"
            />
            <button onClick={handlePayment}>Pay Now</button>
          </>
        )}

        {paymentStatus && <p>{paymentStatus}</p>}

        {receipt && (
          <div className="receipt">
            <h3>Receipt</h3>
            <pre>{receipt}</pre>
          </div>
        )}
      </>
    );
  }
}
