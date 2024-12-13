import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
// import BookingButton from "../Components/BookingButton";

import LandingPage_Navbar from "../Components/LandingPg_Navbar";

const Bookings = () => {
  const navigate = useNavigate();



  return (
    <Box>
      <LandingPage_Navbar />
      <Container mt={"20"} textAlign={"center"} border={"1px solid red"}>
     
   
        <Container mt={"20"}>
          <Text fontWeight={"medium"}>
         aboy  page text <br />
         About Us
         <br/>
Welcome to the Home Care Management System – your one-stop solution for all household service needs.

In today’s fast-paced world, managing domestic chores can often feel overwhelming. From cleaning and plumbing to medical consultations and electrical repairs, juggling multiple service providers can lead to inefficiencies, increased costs, and inconsistent quality. That’s where we come in.

At the Home Care Management System, we are dedicated to transforming the way you manage your home. Our platform is designed to simplify and streamline the process of accessing essential services, offering you a comprehensive solution that combines convenience, quality, and reliability.

Why Choose Us?
Unified Platform: Access a wide range of home care services – including housekeeping, plumbing, electrical repairs, laundry, and medical consultations – all in one place.
Cost-Effective Decisions: Compare costs across multiple service providers to choose what works best for your budget and preferences.
Advanced Features: Benefit from real-time service tracking, AI-powered recommendations, and seamless integration with smart home devices.
Personalized and Secure Services: Enjoy tailored solutions designed to meet your unique needs, all delivered with a commitment to safety and efficiency.
<br/>
Our Mission
We aim to redefine household management by creating a user-friendly platform that consolidates various home services into a single, efficient system. By simplifying the way you care for your home, we empower you to focus on what truly matters.
<br/>
Looking Ahead
As we continue to grow, so will our range of services. Our goal is to become the ultimate partner for modern households, ensuring that you always have access to the tools and services you need to maintain a functional, comfortable, and well-managed home.
<br/>
Let the Home Care Management System take care of the details, so you can enjoy the comforts of a well-maintained home without the hassle.
<br/>
Discover a new era of home care with us.
          </Text>
        </Container>
        <Button
          letterSpacing={"0.6em"}
          bg={"blackAlpha.900"}
          color={"whiteAlpha.900"}
          _hover={{
            background: "whiteAlpha.900",
            color: "blackAlpha.900",
            border: "2px solid black",
          }}
          mt={"5"}

        >
      About page
        </Button>
      </Container>
      {/* <BookingButton /> */}
    </Box>
  );
};

export default Bookings;
