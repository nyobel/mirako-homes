import React, { useState } from "react";
import BookingForm from "../../components/BookingForm/BookingForm";
import PaymentForm from "../../components/Payment/PaymentForm";
import Confirmation from "../../components/SuccessfulPayment/SuccessfulPayment";


const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({});
  const [paymentData, setPaymentData] = useState({});

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleBookingSubmit = (data) => {
    setBookingData(data);
    nextStep();
  };

  const handlePaymentSubmit = (data) => {
    setPaymentData(data);
    nextStep();
  };

  switch (step) {
    case 1:
      return <BookingForm onSubmit={handleBookingSubmit} />;
    case 2:
      return <PaymentForm handleSubmit={handlePaymentSubmit} />;
    case 3:
      return <Confirmation bookingDetails={bookingData} paymentDetails={paymentData} />
      ;
    default:
      return null;
  }
};

export default BookingPage;
