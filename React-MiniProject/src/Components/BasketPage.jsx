import React, { useState } from "react";
import { useBasket } from "./BasketContext";
import { Link, useNavigate } from "react-router-dom";

export default function BasketPage() {
  const { basket, removeItem, clearBasket } = useBasket();
  const [sortBy, setSortBy] = useState("price");
  const [shippingAddress, setShippingAddress] = useState(null);
  const [voucherCode, setVoucherCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isReceiptVisible, setIsReceiptVisible] = useState(false);
  const [tempAddress, setTempAddress] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const navigate = useNavigate();

  // Add shipping and tax details
  const shippingCost = 10;
  const taxRate = 0.08;

  const calculateSubtotal = () => {
    return basket.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const tax = subtotal * taxRate;
    return subtotal + tax + shippingCost - subtotal * discount;
  };

  const sortedBasket = [...basket].sort((a, b) => {
    if (sortBy === "price") {
      return b.price * b.quantity - a.price * a.quantity;
    } else if (sortBy === "quantity") {
      return b.quantity - a.quantity;
    }
    return 0;
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setTempAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({ ...prev, [name]: value }));
  };

  const saveAddress = () => {
    if (
      tempAddress.name &&
      tempAddress.address &&
      tempAddress.city &&
      tempAddress.state &&
      tempAddress.zip
    ) {
      setShippingAddress(tempAddress);
      setIsEditingAddress(false);
    } else {
      alert("Please fill in all address fields.");
    }
  };

  const editAddress = () => {
    setTempAddress(shippingAddress);
    setIsEditingAddress(true);
  };

  const handleCheckout = () => {
    if (
      shippingAddress &&
      shippingAddress.name &&
      shippingAddress.address &&
      shippingAddress.city &&
      shippingAddress.state &&
      shippingAddress.zip &&
      cardDetails.cardNumber &&
      cardDetails.expiryDate &&
      cardDetails.cvv
    ) {
      setIsLoading(true); // Show loading animation
      setTimeout(() => {
        setIsLoading(false); // Hide loading animation
        setIsReceiptVisible(true);
        // Show the receipt after payment is processed
        // Clear the basket after successful checkout
      }, 2000); // Simulate a 2-second payment process
    } else {
      alert("Please provide valid shipping and payment details.");
    }
  };

  const voucherCodes = [
    { code: "XYZ-80", discount: 0.8 },
    { code: "DISCOUNT10", discount: 0.1 },
    { code: "GET15OFF", discount: 0.15 },
    { code: "SUMMER20", discount: 0.2 },
    { code: "WINTER25", discount: 0.25 },
    { code: "FREESHIP", discount: 0.15 },
    { code: "HALFOFF", discount: 0.5 },
    { code: "WELCOME5", discount: 0.05 },
    { code: "AUTUMN15", discount: 0.15 },
    { code: "SPRING10", discount: 0.1 },
    { code: "FLASHSALE30", discount: 0.3 },
    { code: "EXTRA10", discount: 0.1 },
    { code: "VIP20", discount: 0.2 },
    { code: "LOYALTY5", discount: 0.05 },
    { code: "BUY1GET1", discount: 0.5 },
  ];

  const handleVoucherCode = () => {
    const voucher = voucherCodes.find((v) => v.code === voucherCode);

    if (voucher) {
      setDiscount(voucher.discount);
      alert(
        `Voucher code applied! You have received a ${
          voucher.discount * 100
        }% discount.`
      );
    } else {
      setDiscount(0);
      alert("Invalid voucher code.");
    }
  };

  if (basket.length === 0) {
    return (
      <>
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "50px",
            color: "black",
            marginTop: "94px",
            textAlign: "center",
          }}
        >
          Your Bag is empty.
        </h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </>
    );
  }

  return (
    <>
      <h1
        className="bag-h1"
        style={{
          fontWeight: "bold",
          fontSize: "50px",
          color: "black",
          marginTop: "74px",
          textAlign: "center", // Center the heading
        }}
      >
        Your Bag.
      </h1>
      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "white", margin: "0 135px" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card" style={{ color: "black" }}>
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a
                          href="#!"
                          className="text-body"
                          onClick={() => navigate(-2)}
                          style={{ textDecoration: "none", fontWeight: "bold" }}
                        >
                          <i className="fa fa-long-arrow-left me-2"></i>Continue
                          shopping
                        </a>
                      </h5>
                      <hr />

                      {/* Shipping Address Section */}
                      <div className="mb-4">
                        {!isEditingAddress && shippingAddress ? (
                          <>
                            <p
                              className="mb-1"
                              style={{
                                fontWeight: "bold",
                              }}
                            >
                              <i
                                className="fa-solid fa-location-dot"
                                style={{ marginRight: "5px", color: "#0071e3" }}
                              ></i>
                              Delivery Address:
                              <br />
                              <strong>{shippingAddress.name}</strong>
                              <br />
                              {shippingAddress.address}, {shippingAddress.city},{" "}
                              {shippingAddress.state}, {shippingAddress.zip}
                            </p>
                            <a
                              href="#!"
                              className="text-primary"
                              onClick={editAddress}
                              style={{
                                textDecoration: "underline",
                                cursor: "pointer",
                              }}
                            >
                              Change Address
                            </a>
                          </>
                        ) : (
                          <>
                            <i
                              class="fa-solid fa-location-dot"
                              style={{ color: "#0071e3" }}
                            ></i>
                            <a
                              href="#!"
                              className="text-primary"
                              onClick={() => setIsEditingAddress(true)}
                              style={{
                                textDecoration: "none",
                                cursor: "pointer",
                                marginLeft: "5px",
                                fontWeight: "bold",
                                color: "black",
                              }}
                            >
                              Enter Shipping Address
                            </a>
                            {isEditingAddress && (
                              <div className="mt-3">
                                <input
                                  type="text"
                                  name="name"
                                  placeholder="Full Name"
                                  className="form-control mb-2"
                                  value={tempAddress.name}
                                  onChange={handleAddressChange}
                                />
                                <input
                                  type="text"
                                  name="address"
                                  placeholder="Address"
                                  className="form-control mb-2"
                                  value={tempAddress.address}
                                  onChange={handleAddressChange}
                                />
                                <input
                                  type="text"
                                  name="city"
                                  placeholder="City"
                                  className="form-control mb-2"
                                  value={tempAddress.city}
                                  onChange={handleAddressChange}
                                />
                                <input
                                  type="text"
                                  name="state"
                                  placeholder="State"
                                  className="form-control mb-2"
                                  value={tempAddress.state}
                                  onChange={handleAddressChange}
                                />
                                <input
                                  type="text"
                                  name="zip"
                                  placeholder="ZIP Code"
                                  className="form-control mb-2"
                                  value={tempAddress.zip}
                                  onChange={handleAddressChange}
                                />
                                <button
                                  className="btn btn-primary"
                                  onClick={saveAddress}
                                >
                                  Save Address
                                </button>
                              </div>
                            )}
                          </>
                        )}
                      </div>

                      <hr />

                      {/* Card Details Section */}
                      <div className="mb-4">
                        <p className="mb-1">Enter Card Details:</p>

                        <p className="small mb-2">Card type</p>
                        <a href="#!" className="text" style={{ color: "grey" }}>
                          <i class="fa-brands fa-cc-mastercard fa-2x me-2"></i>
                        </a>
                        <a href="#!" className="text" style={{ color: "grey" }}>
                          <i class="fa-brands fa-cc-apple-pay fa-2x me-2"></i>
                        </a>
                        <a href="#!" className="text" style={{ color: "grey" }}>
                          <i
                            className="fa-brands fa-cc-visa fa-2x me-2"
                            style={{ color: "grey" }}
                          ></i>
                        </a>
                        <a href="#!" className="text">
                          <i
                            className="fa-brands fa-cc-amex fa-2x me-2"
                            style={{ color: "grey" }}
                          ></i>
                        </a>
                        <a href="#!" className="text">
                          <i
                            className="fa-brands fa-cc-paypal fa-2x"
                            style={{ color: "grey" }}
                          ></i>
                        </a>
                        <br />

                        <input
                          type="text"
                          name="cardholderName"
                          placeholder="Cardholder's Name"
                          className="form-control mb-2"
                          value={cardDetails.cardholderName}
                          onChange={handleCardChange}
                        />

                        <input
                          type="text"
                          name="cardNumber"
                          placeholder="Card Number"
                          className="form-control mb-2"
                          value={cardDetails.cardNumber}
                          onChange={(e) => {
                            const formattedCardNumber =
                              e.target.value
                                .replace(/\s/g, "")
                                .match(/.{1,4}/g)
                                ?.join(" ") || "";
                            setCardDetails((prev) => ({
                              ...prev,
                              cardNumber: formattedCardNumber,
                            }));
                          }}
                          maxLength={19}
                          pattern="\d{4}\s?\d{4}\s?\d{4}\s?\d{4}"
                        />
                        <input
                          type="text"
                          name="expiryDate"
                          placeholder="Expiry Date (MM/YY)"
                          className="form-control mb-2"
                          value={cardDetails.expiryDate}
                          onChange={(e) => {
                            const formattedExpiryDate = e.target.value
                              .replace(/[^0-9]/g, "")
                              .replace(/(\d{2})(\d{2})/, "$1/$2");
                            setCardDetails((prev) => ({
                              ...prev,
                              expiryDate: formattedExpiryDate,
                            }));
                          }}
                          maxLength={5}
                        />
                        <input
                          type="password"
                          name="cvv"
                          placeholder="CVV"
                          className="form-control mb-2"
                          value={cardDetails.cvv}
                          onChange={handleCardChange}
                          maxLength={4}
                        />
                      </div>

                      <hr />

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping Bag</p>
                          <p className="mb-0">
                            You have {basket.length} items in your Bag
                          </p>
                        </div>
                        <div>
                          <p className="mb-0">
                            <span className="text-muted">Sort by:</span>
                            <select
                              value={sortBy}
                              onChange={(e) => setSortBy(e.target.value)}
                              className="form-select"
                            >
                              <option value="price">Price</option>
                              <option value="quantity">Quantity</option>
                            </select>
                          </p>
                        </div>
                      </div>

                      {sortedBasket.map((item, index) => (
                        <div className="card mb-3" key={index}>
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <img
                                    src={item.image}
                                    className="img-fluid rounded-3"
                                    alt={item.preview}
                                    style={{ width: "150px" }}
                                  />
                                </div>
                                <div className="ms-3">
                                  <h5>{item.preview}</h5>
                                  <p className="small mb-0">
                                    {item.material}, {item.color}
                                  </p>
                                  <p className="small mb-0">
                                    Quantity: {item.quantity}
                                  </p>
                                </div>
                              </div>
                              <div className="text-end">
                                <h5 className="mb-0">
                                  ${item.price.toFixed(2)}
                                </h5>
                                <button
                                  className="btn btn-link text-danger"
                                  onClick={() => removeItem(item.id)}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="col-lg-5">
                      <div className="card mb-4">
                        <div className="card-body">
                          <h5 className="mb-3">Order Summary</h5>
                          <div className="d-flex justify-content-between mb-2">
                            <span className="text-muted">Subtotal:</span>
                            <strong>${calculateSubtotal().toFixed(2)}</strong>
                          </div>
                          <div className="d-flex justify-content-between mb-2">
                            <span className="text-muted">Shipping:</span>
                            <strong>${shippingCost.toFixed(2)}</strong>
                          </div>
                          <div className="d-flex justify-content-between mb-4">
                            <span className="text-muted">
                              Total (Incl. taxes):
                            </span>
                            <strong>${calculateTotal().toFixed(2)}</strong>
                          </div>
                          <div className="voucher-container">
                            <input
                              type="text"
                              className="form-control mb-2 voucher-input"
                              placeholder="Voucher Code"
                              value={voucherCode}
                              onChange={(e) =>
                                setVoucherCode(e.target.value.toUpperCase())
                              } // Convert input to uppercase
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleVoucherCode();
                                }
                              }}
                            />
                            <a
                              className="fa-solid fa-arrow-right voucher-icon"
                              onClick={handleVoucherCode}
                            ></a>
                          </div>

                          <button
                            className="btn btn-primary w-100 mt-4"
                            style={{ borderRadius: "20px" }}
                            onClick={() => {
                              handleCheckout();
                            }}
                          >
                            Place Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isLoading && (
        <div className="loading-animation">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Processing Payment...</p>
        </div>
      )}
      {isReceiptVisible && (
        <div className="receipt-modal-overlay">
          <div className="receipt-modal-container">
            <div className="receipt-modal-header">
              <img
                src="/src/assets/Logo.png"
                alt="Keystaxx Logo"
                className="receipt-modal-logo"
              />
              <h3>Keystaxx</h3>
              <p>{new Date().toLocaleString()}</p>
              <p>Order # {Math.floor(Math.random() * 1000000)}</p>
            </div>

            <div className="receipt-modal-body">
              <h5>Items Purchased:</h5>
              <ul>
                {basket.map((item, index) => (
                  <li key={index} className="receipt-modal-item">
                    <span>
                      {item.preview} x{item.quantity}
                    </span>
                    <span className="receipt-modal-item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </li>
                ))}
              </ul>
              <hr />
              <div className="receipt-modal-breakdown">
                <p>
                  Subtotal: <span>${calculateSubtotal().toFixed(2)}</span>
                </p>
                <p>
                  Shipping: <span>${shippingCost.toFixed(2)}</span>
                </p>
                <p>
                  Tax (8%):{" "}
                  <span>${(calculateSubtotal() * 0.08).toFixed(2)}</span>
                </p>
              </div>
              <hr />
              <p className="receipt-modal-total">
                Total: <strong>${calculateTotal().toFixed(2)}</strong>
              </p>
            </div>

            <div className="receipt-modal-footer">
              <h5>Shipping Address:</h5>
              <p>{shippingAddress.name}</p>
              <p>
                {shippingAddress.address}, {shippingAddress.city},{" "}
                {shippingAddress.state}, {shippingAddress.zip}
              </p>

              <h5>Payment Method:</h5>
              <p>Cardholder: {cardDetails.cardholderName}</p>
              <p>
                Card Number: **** **** **** {cardDetails.cardNumber.slice(-4)}
              </p>
              <p>Expiry Date: {cardDetails.expiryDate}</p>
            </div>
            <button
              className="receipt-modal-close-btn"
              onClick={() => {
                setIsReceiptVisible(false); // Close the receipt
                clearBasket(); // Clear the basket when receipt is closed
              }}
            >
              Close Receipt
            </button>
          </div>
        </div>
      )}
    </>
  );
}
