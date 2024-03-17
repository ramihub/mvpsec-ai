import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ContactInfoSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background: ${props => props.theme.colors.darkBlue};
  color: ${props => props.theme.colors.white};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  svg {
    margin-right: 10px;
  }
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  background-color: grey; // Placeholder for an actual map
  margin-top: 20px;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background: ${props => props.theme.colors.lightBlue}; // Light background for the form area
`;

const Form = styled.form`
  max-width: 600px;
  width: 100%; // Ensures the form is responsive
  background: ${props => props.theme.colors.darkBlue}; // Dark theme for the form
  padding: 20px;
  border-radius: 8px; // Soft rounded corners for the form container
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); // Subtle shadow for depth
`;

const Input = styled.input`
  box-sizing: border-box; // Ensure padding and border are included in the element's total width
  width: 100%; // Adjust width to account for padding
  margin-bottom: 20px;
  padding: 10px;
  border: 2px solid ${props => props.theme.colors.gray};
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.darkBlue};
  border-radius: 4px;

  &:focus {
    border-color: ${props => props.theme.colors.teal};
    outline: none;
  }
`;

const Textarea = styled(Input).attrs({ as: 'textarea' })`
  height: 150px; // Specify a height for the textarea
`;

const Button = styled.button`
  box-sizing: border-box; // Ensure padding and border are included in the element's total width
  width: 100%; // Ensures the button stretches to the full width of its parent container
  padding: 12px;
  background-color: ${(props) => props.theme.colors.teal};
  color: ${(props) => props.theme.colors.white};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => props.theme.colors.highlight};
  }
  margin: 0; // Reset any inherited margins
  margin-top: 20px; // Add a top margin if needed to match the form layout
`;


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email.includes('@') || !formData.message) {
      // Inline feedback could be implemented here
      console.log('Please fill in all fields correctly.');
      return;
    }
    console.log('Thank you for your message!'); // Placeholder for actual submission logic
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} />
          <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <Textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
          <Button type="submit">Send</Button>
        </Form>
      </FormContainer>
      <ContactInfoSection>
        <ContactInfoItem>
          <FaMapMarkerAlt />
          <span>123 Cybersecurity Blvd, NetSafe City, DataLand</span>
        </ContactInfoItem>
        <ContactInfoItem>
          <FaPhone />
          <span>+1 234 567 8901</span>
        </ContactInfoItem>
        <ContactInfoItem>
          <FaEnvelope />
          <span>contact@mvpsec.ai</span>
        </ContactInfoItem>
      </ContactInfoSection>
      <MapContainer>
        {/* Embed a Google Maps iframe or similar here */}
      </MapContainer>
    </Layout>
  );
}

export default ContactPage;