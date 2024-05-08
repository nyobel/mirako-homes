import "./ContactPage.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section>
      <div className="contact-page ">
        <div className="contact-header">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-form container">
          <div className="contact-form-left">
            <h2>Send Us A Message</h2>
            <form>
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
          </div>
          <div className="contact-form-right">
            <h2>Our Articles</h2>
            <p>Sign up for our weekly articles to get the latest news on real estate.</p>
            <label>Email</label>
            <input type="email" placeholder="Email" name="email" required/>
            <button>Subscribe</button>
          </div>
        </div>
        <div className="contact-details container">
          <div className="contact-detail phone">
            +254702008666
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="contact-detail email">
            mirakohomes@gmail.com
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="contact-detail location">
            <FaMapMarkerAlt className="contact-icon location-icon"/>Coming Soon
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
