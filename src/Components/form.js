


import React, { useState } from "react";
import emailjs from "emailjs-com";
import { color } from "@chakra-ui/react";

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_2kczggi", "template_odppz92", e.target, "5qLyTAV_HIaK0ihoL")
      .then(
        (result) => {
          alert("Your booking has been submitted!");
          window.location.reload();
        },
        (error) => {
          console.error(error.text);
        }
      );
    setFormData({ name: "", email: "", phone: "", service: "" });
  };

  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <div style={styles.navTitle}>Service Booking</div>
        <ul style={styles.navLinks}>
        <li><a href="#contact">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>
      </nav>
      <div style={styles.container}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <h2 style={styles.title}>Book Your Service</h2>
          <label style={styles.label} htmlFor="name">
            Name
          </label>
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
          <label style={styles.label} htmlFor="email">
            Email
          </label>
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
          <label style={styles.label} htmlFor="phone">
            Phone No.
          </label>
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

          <label style={styles.label} htmlFor="address">
            Address
          </label>
          <input
            style={styles.input}
            type="address"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          />

          <label style={styles.label} htmlFor="Landmark">
           Landmark
          </label>
          <input
            style={styles.input}
            type="landmark"
            id="landmark"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            placeholder="Enter your landmark"
            required
          />

          <label style={styles.label} htmlFor="service">
            Service
          </label>
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
          <button style={styles.button} type="submit">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: "100%",
    background: "linear-gradient(to right, #6a11cb, #2575fc)",
    fontFamily: "'Arial', sans-serif",
    width:"100%",
    // margin:0,

  },
  navbar: {
    width: "100%",
    // back
    backgroundColor: "#007bff",
    padding: "10px 20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      // color:"white" ,
    
  },
  navTitle: {
    color: "white",
    fontSize: "20px",
    fontWeight: "bold",
    // gap:"200000%",
    
  },
  navBrand: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
  },
  navLinksItem: {
    color: "#007bff",
    textDecoration: "none",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
    height: "calc(100vh - 50px)",
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
    fontWeight: "bold",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    color: "#555",
    fontWeight: "600",
    fontStyle: "italic",
    textAlign: "left",
  
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
    transition: "background 0.3s",
  },
  buttonHover: {
    background: "#0056b3",
  },
};

export default BookingForm;
