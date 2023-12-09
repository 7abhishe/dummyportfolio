import React from "react";
import styled from "styled-components";


// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: sans-serif;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #33241e; /* Dark brown mixture */
  border-bottom: 1px solid #5c4b3e;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #fff; /* White text color */
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;

  &:hover {
    color: #b7a69e; /* Light brown hover color */
  }
`;

const HeroSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-image: url("/images/abhishek.png");
  background-size: contain;
  min-height: 60vh;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  border-radius: 8px;
  max-width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  /* Position the title on top */
  position: absolute;
  top: 10%; /* Adjust the value to position the title at the desired height */
  left: 50%;
  transform: translateX(-50%);
`;
const HeroDescription = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: #fff; /* White text color */
  background-image:url("/images/herojenk.jpeg");
  background=
`;

const ServicesSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
`;

const ServiceCard = styled.div`
  width: 30%;
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  background-image:url("/image/herojenk.jpeg");
  background-size:contain;
  color: #33241e; /* Dark brown mixture */
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  background-image:url("/image/herojenk.jpeg");
  background-size:contain;
  color: #555; /* Dark gray text color */
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
  padding: 2rem;
  background-color: #33241e; /* Dark brown mixture */
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InputField = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #5c4b3e; /* Light brown border color */
  border-radius: 3px;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border: 1px solid #5c4b3e; /* Light brown border color */
  border-radius: 3px;
  width: 100%;
  height: 100px;
`;

const SubmitButton = styled.button`
  background-color: #33241e; /* Dark brown mixture */
  color: #fff; /* White text color */
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

const Footer = styled.footer`
  padding: 1rem 2rem;
  background-color: #33241e; /* Dark brown mixture */
  text-align: center;
  color: #fff; /* White text color */
`;

// Social media icons (optional)
// const SocialMediaLink = styled.a`
//   display: inline-block;
//   margin-right: 1rem;
// `;

const App = () => {
  return (
    <Container>
      <Navbar>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Navbar>
      <HeroSection>
        
        <HeroTitle>Welcome to my portfolio!</HeroTitle>
        <HeroDescription>
          I'm a passionate as a software developer.
          
        </HeroDescription>
      </HeroSection>
      <ServicesSection>
        <ServiceCard>
          <ServiceTitle>Software Developer</ServiceTitle>
          <ServiceDescription>
            I have experience building websites using various technologies such as React,vite,html,CSS.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Front-End Development</ServiceTitle>
          <ServiceDescription>
            I have a strong understanding of HTML, CSS, and JavaScript and can create responsive and user-friendly interfaces.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Articial intelligence and computer networking </ServiceTitle>
          <ServiceDescription>I have experience working with Mininet,RYU controller, various types of the Ai model for  user needs.</ServiceDescription>
        </ServiceCard>
      </ServicesSection>
      <ContactForm>
        <InputField type="text" placeholder="Your Name" />
        <InputField type="email" placeholder="Your Email" />
        <TextArea placeholder="Your Message" />
        <SubmitButton>Send Message</SubmitButton>
      </ContactForm>
      <Footer>
        &copy; Copyright 2023. All rights reserved.
  
      </Footer>
    </Container>
  );
};

export default App;
