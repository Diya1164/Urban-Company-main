import React, { useState } from "react";
import emailjs from 'emailjs-com';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const services = [
    "Salon For Women",
    "Hair, Skin & Nails",
    "Women's Therapies",
    "Salon For Men",
    "Men's Therapies",
    "Appliance Repair",
    "Home Painting",
    "Cleaning & Pest",
    "Disinfection",
    "Home Repair",
  ];

  
  function sendEmail(e) {
     e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

  
   }

  const handleChange = (e) => {
    const { name, value } = e.target;
 
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2kczggi', 'template_odppz92', e.target, '5qLyTAV_HIaK0ihoL')
    .then((result) => {
        window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
    }, (error) => {
    console.log(error.text);
    });
    console.log("Form Data Submitted:", formData);
    alert("Your booking has been submitted!");
    // Reset form after submission
    setFormData({ name: "", email: "", phone: "", service: "" });
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Service Booking</h2>
        <label style={styles.label} htmlFor="name">Name</label>
        <input
          style={styles.input}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label style={styles.label} htmlFor="email">Email</label>
        <input
          style={styles.input}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label style={styles.label} htmlFor="phone">Phone No.</label>
        <input
          style={styles.input}
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />

        <label style={styles.label} htmlFor="service">Service</label>
        <select
          style={styles.input}
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">--Select a Service--</option>
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>

        <button style={styles.button} type="submit">Book Now</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
  },
  form: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonHover: {
    background: "#0056b3",
  },
};

export default BookingForm;



// export default function ContactUs() {

//   function sendEmail(e) {
//     e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

//     emailjs.sendForm('service_2kczggi', 'template_odppz92', e.target, '5qLyTAV_HIaK0ihoL')
//       .then((result) => {
//           window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

//   return (
//     <form className="contact-form" onSubmit={sendEmail}>
  
//       <label>Name</label>
//       <input type="text" name="from_name" />
//       <label>Email</label>
//       <input type="email" name="from_email" />
//       <label>Subject</label>
//       <input type="text" name="subject" />
//       <label>Message</label>
//       <textarea name="html_message" />
      
//       <input type="submit" value="Send" />
//     </form>
//   );
// }