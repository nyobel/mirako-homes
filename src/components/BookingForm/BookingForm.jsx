import React, { useState } from "react";
import "./BookingForm.css"

const BookingForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bookingType, setBookingType] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [meetUpPoint, setMeetUpPoint] = useState("");
  const [keyCollectionDate, setKeyCollectionDate] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [balancePaymentDate, setBalancePaymentDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      phone,
      bookingType,
      time,
      date,
      meetUpPoint,
      keyCollectionDate,
      paymentType,
      balancePaymentDate,
    };
    onSubmit(formData);
  };


  return (
    <div className="booking-page">
      <h1>Booking Form</h1>
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="flexed">
        <div className="flexed-info">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="flexed-info">
          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="bookingType">Booking For</label>
        <select
          id="bookingType"
          value={bookingType}
          onChange={(e) => setBookingType(e.target.value)}
          required
        >
          <option value="">Select</option>
          <option value="viewing">Viewing</option>
          <option value="property">Property</option>
        </select>
      </div>

      {bookingType === "viewing" && (
        <div className="flexed">
          <div className="flexed-info">
            <label htmlFor="time">Time</label>
            <input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className="flexed-info">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className="flexed-info">
            <label htmlFor="meetUpPoint">Meet-Up Point</label>
            <select
              id="meetUpPoint"
              value={meetUpPoint}
              onChange={(e) => setMeetUpPoint(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="site">Site</option>
              <option value="office">Office</option>
            </select>
          </div>
        </div>
      )}

      {bookingType === "property" && (
        <>
          <div>
            <label htmlFor="keyCollectionDate">Date of Key Collection</label>
            <input
              id="keyCollectionDate"
              type="date"
              value={keyCollectionDate}
              onChange={(e) => setKeyCollectionDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="paymentType">Type of Payment</label>
            <select
              id="paymentType"
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="deposit">Deposit(Half Price)</option>
              <option value="full">Full Payment</option>
            </select>
          </div>
          {paymentType === "deposit" && (
            <div>
              <label htmlFor="balancePaymentDate">
                Date for Paying Balance:
              </label>
              <input
                id="balancePaymentDate"
                type="date"
                value={balancePaymentDate}
                onChange={(e) => setBalancePaymentDate(e.target.value)}
                required
              />
            </div>
          )}
        </>
      )}

      <div className="booking-page-button">
        <button type="submit">Proceed to Pay</button>
      </div>
    </form>
    </div>
  );
};

export default BookingForm;
