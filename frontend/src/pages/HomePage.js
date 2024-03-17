import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import heroImage from '../assets/hero-image.jpg'; // Assuming you might want a hero image

// Styled components to mirror the ServicesPage aesthetics
const PageContainer = styled.div`
  background: ${props => props.theme.colors.darkBlue};
  color: ${props => props.theme.colors.white};
  padding: 20px;
  text-align: center;
`;

const HeroSection = styled.section`
  background: url(${heroImage}) no-repeat center center / cover;
  padding: 100px 20px;
`;

const IntroSection = styled.section`
  padding: 50px 20px;
  background-color: ${props => props.theme.colors.lightBlue};
`;

const MissionStatement = styled.section`
  padding: 50px 20px;
  background-color: ${props => props.theme.colors.darkBlue};
`;

const QuickNavContainer = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const QuickNavLink = styled.a`
  color: ${props => props.theme.colors.teal};
  background-color: ${props => props.theme.colors.darkBlue};
  padding: 10px 15px;
  margin: 0 10px;
  border-radius: 5px;
  border: 2px solid ${props => props.theme.colors.teal};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: ${props => props.theme.colors.darkBlue};
    background-color: ${props => props.theme.colors.teal};
  }
`;

const HomePage = () => {
  return (
    <Layout>
      <PageContainer>
        <HeroSection>
          <h1>Welcome to MVPsec</h1>
          <p>Empowering your cybersecurity with comprehensive penetration testing and security engineering.</p>
        </HeroSection>
        <IntroSection>
          <h2>Who We Are</h2>
          <p>MVPsec specializes in safeguarding digital assets against the evolving threats of the cyber world. Our team of experts brings unparalleled expertise in penetration testing and security solutions designed to protect and empower your business.</p>
        </IntroSection>
        <MissionStatement>
          <h2>Our Mission</h2>
          <p>At MVPsec, our mission is clear: to protect businesses from cyber threats through advanced security solutions. We strive to be the shield against the vulnerabilities of the digital age, ensuring your operations are secure and resilient.</p>
        </MissionStatement>
        <QuickNavContainer>
          <QuickNavLink href="/services">Services</QuickNavLink>
          <QuickNavLink href="/training">Training</QuickNavLink>
          <QuickNavLink href="/blog">Blog</QuickNavLink>
          <QuickNavLink href="/contact">Contact</QuickNavLink>
        </QuickNavContainer>
      </PageContainer>
    </Layout>
  );
};

export default HomePage;
