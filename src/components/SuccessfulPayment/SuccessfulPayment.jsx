
import "./SuccessfulPayment.css";

const Confirmation = ({ bookingDetails, paymentDetails }) => {
  return (
    <div className="confirmation">
      <h2>Confirmation</h2>
      <div className="confirmation-details">
        <div>
          <label>Name:</label>
          <p>{bookingDetails.name}</p>
        </div>
        <div>
          <label>Email:</label>
          <p>{bookingDetails.email}</p>
        </div>
        <div>
          <label>Phone Number:</label>
          <p>{bookingDetails.phone}</p>
        </div>
        <div>
          <label>Booking Type:</label>
          <p>{bookingDetails.bookingType}</p>
        </div>
        {bookingDetails.bookingType === "viewing" && (
          <div className="flexed">
            <div className="flexed-info">
              <label>Time:</label>
              <p>{bookingDetails.time}</p>
            </div>
            <div className="flexed-info">
              <label>Date:</label>
              <p>{bookingDetails.date}</p>
            </div>
            <div className="flexed-info">
              <label>Meet-Up Point:</label>
              <p>{bookingDetails.meetUpPoint}</p>
            </div>
          </div>
        )}
        {bookingDetails.bookingType === "property" && (
          <div>
            <label>Date of Key Collection:</label>
            <p>{bookingDetails.keyCollectionDate}</p>
          </div>
        )}
        <div>
          <label>Payment Method:</label>
          <p>{paymentDetails.paymentMethod}</p>
        </div>
        {paymentDetails.paymentMethod === "card" && (
          <div>
            <label>Card Name:</label>
            <p>{paymentDetails.cardName}</p>
            <label>Card Number:</label>
            <p>{paymentDetails.cardNumber}</p>
            <label>Card Expiry Date:</label>
            <p>{paymentDetails.cardExpiry}</p>
            <label>CVC:</label>
            <p>{paymentDetails.cardCVC}</p>
          </div>
        )}
        {paymentDetails.paymentMethod === "mpesa" && (
          <div>
            <label>Mpesa Phone Number:</label>
            <p>{paymentDetails.mpesaNumber}</p>
          </div>
        )}
      </div>
      <div className="confirmation-button">
        <button>Confirm Booking</button>
      </div>
    </div>
  );
};

export default Confirmation;
