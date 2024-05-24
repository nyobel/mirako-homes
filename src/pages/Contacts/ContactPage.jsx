import "./ContactPage.css";
import { LuMapPin } from "react-icons/lu";
import { BsEnvelopeAt } from "react-icons/bs";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { useState } from "react";

const ContactPage = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d0106da1-92eb-42af-9ad9-143613d35b3d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section>
      <div className="contact-page ">
        <div className="contact-header">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-form container">
          <div className="contact-form-left">
            <h2>Send Us A Message</h2>
            <form onSubmit={onSubmit}>
              <div className="form-one">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" required />
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone number"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <label>Name</label>
              <input type="text" name="name" placeholder="Name" required />
              <label>Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Message"
                required
              ></textarea>
              <button className="contact-form-btn">Send Message</button>
            </form>
            <span>{result}</span>
          </div>
          <div className="contact-form-right">
            <h2>Our Articles</h2>
            <p>
              Sign up for our weekly articles to get the latest news on real
              estate.
            </p>
            <label>Email</label>
            <input type="email" placeholder="Email" name="email" required />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="contact-details container">
          <div className="contact-detail phone">
            <div className="contact-detail-icon">
              <LiaPhoneVolumeSolid className="card-icon" />
              <span>+254702008666</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="contact-detail email">
            <div className="contact-detail-icon">
              <BsEnvelopeAt className="card-icon" />
              <span>mirakohomes@gmail.com</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="contact-detail location">
            <div className="contact-detail-icon">
              <LuMapPin className="card-icon" />
              <span>Coming Soon</span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="faqs container">
          <h2>FAQS</h2>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
