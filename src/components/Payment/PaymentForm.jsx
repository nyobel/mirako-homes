import React, { useState } from "react";
import mpesaLogo from "../../images/mpesa.jpeg"; // Make sure to replace with your actual image path
import cardLogo from "../../images/credit-card.png"; // Make sure to replace with your actual image path
import "./PaymentForm.css"; // Add necessary styling here

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [mpesaNumber, setMpesaNumber] = useState("");
  const [amount, setAmount] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (paymentMethod === "card") {
      if (!cardName) newErrors.cardName = "Card name is required";
      if (!cardNumber) newErrors.cardNumber = "Card number is required";
      if (!cardExpiry) newErrors.cardExpiry = "Card expiry date is required";
      if (!cardCVC) newErrors.cardCVC = "CVC is required";
      if (!amount) newErrors.amount = "Amount is required";
    } else if (paymentMethod === "mpesa") {
      if (!mpesaNumber) newErrors.mpesaNumber = "Mpesa phone number is required";
      if (!amount) newErrors.amount = "Amount is required";
    } else {
      newErrors.paymentMethod = "Please select a payment method";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const formData = {
        paymentMethod,
        cardName,
        cardNumber,
        cardExpiry,
        cardCVC,
        mpesaNumber,
        amount,
      };
      console.log(formData);
      // Add payment processing logic here
    }
  };

  return (
    <div className="payment-form">
      <h2>Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="payment-method-selection">
          <h3 className="payment-method">Payment Method</h3>
          <div className="payment-options">
            <img
              src={mpesaLogo}
              alt="Mpesa"
              className={`payment-option ${paymentMethod === "mpesa" ? "selected" : ""}`}
              onClick={() => setPaymentMethod("mpesa")}
            />
            <img
              src={cardLogo}
              alt="Card"
              className={`payment-option ${paymentMethod === "card" ? "selected" : ""}`}
              onClick={() => setPaymentMethod("card")}
            />
          </div>
          {errors.paymentMethod && <p className="error">{errors.paymentMethod}</p>}
        </div>

        {paymentMethod === "card" && (
          <>
            <div>
              <label htmlFor="cardName">Card Name</label>
              <input
                id="cardName"
                name="cardName"
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                required
              />
              {errors.cardName && <p className="error">{errors.cardName}</p>}
            </div>
            <div>
              <label htmlFor="cardNumber">Card Number</label>
              <input
                id="cardNumber"
                name="cardNumber"
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
              {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
            </div>
            <div>
              <label htmlFor="cardExpiry">Card Expiry Date</label>
              <input
                id="cardExpiry"
                name="cardExpiry"
                type="text"
                value={cardExpiry}
                onChange={(e) => setCardExpiry(e.target.value)}
                required
              />
              {errors.cardExpiry && <p className="error">{errors.cardExpiry}</p>}
            </div>
            <div>
              <label htmlFor="cardCVC">CVC</label>
              <input
                id="cardCVC"
                name="cardCVC"
                type="text"
                value={cardCVC}
                onChange={(e) => setCardCVC(e.target.value)}
                required
              />
              {errors.cardCVC && <p className="error">{errors.cardCVC}</p>}
            </div>
          </>
        )}

        {paymentMethod === "mpesa" && (
          <div>
            <label htmlFor="mpesaNumber">Mpesa Phone Number</label>
            <input
              id="mpesaNumber"
              name="mpesaNumber"
              type="text"
              value={mpesaNumber}
              onChange={(e) => setMpesaNumber(e.target.value)}
              required
            />
            {errors.mpesaNumber && <p className="error">{errors.mpesaNumber}</p>}
          </div>
        )}

        <div>
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            name="amount"
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          {errors.amount && <p className="error">{errors.amount}</p>}
        </div>

        <button type="submit" className="payment-button">Submit Payment</button>
      </form>
    </div>
  );
};

export default PaymentForm;
