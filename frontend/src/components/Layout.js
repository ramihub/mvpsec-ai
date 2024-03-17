import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImage from '../assets/logo_mvpsec.ai3.png'; // Make sure the path is correct

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  background: ${props => props.theme.colors.darkBlue};
  color: ${props => props.theme.colors.white};
  padding: 1rem 2rem;
  display: flex;
  justify-content: start;
  align-items: center;
  z-index: 1000; // Ensure the header is above other content
`;

// Adjusted for alignment and clickable area
const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 20px; // Adjusted for alignment
  img {
    height: auto;
    width: 60px; // Adjust this to fit the logo size
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.teal};
  text-decoration: none;
  margin-right: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: ${props => props.theme.colors.white};
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Main = styled.main`
  flex: 1;
  padding: 1rem;
  background-color: ${props => props.theme.colors.lightGray};
  color: ${props => props.theme.colors.darkBlue};
`;

const Footer = styled.footer`
  background: ${props => props.theme.colors.darkBlue};
  color: ${props => props.theme.colors.gray};
  text-align: center;
  padding: 1rem;
  font-size: 0.875em;
`;

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <LogoLink to="/">
          <img src={logoImage} alt="MVPsec.ai Logo" />
        </LogoLink>
        <NavLinksContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinksContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        © {new Date().getFullYear()} MVPsec.ai - All rights reserved.
      </Footer>
    </Container>
  );
};

export default Layout;
