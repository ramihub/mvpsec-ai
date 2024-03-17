import React, { useState } from 'react';
import styled from 'styled-components';
import {
    FaShieldAlt, // Cybersecurity Audit
    FaBug, // Incident Response
    FaUserSecret, // Penetration Testing
    // Risk Management (Note: This icon may not exist in react-icons. Alternatives need to be considered.)
    FaLock, // Data Protection & Privacy
    FaUserShield, // Advanced Threat Protection
    FaChalkboardTeacher, // Security Awareness Training
    FaCloud, // Cloud Security
    FaRegCheckCircle, // Compliance Management (Regular check circle)
    FaLaptopMedical, // Endpoint Security (Suggestive of fixing or protecting devices)
    FaNetworkWired, // Network Security
    FaSearchPlus, // Vulnerability Management (Representing detailed search or examination)
    FaUsersCog, // Identity and Access Management (IAM)
    FaRegLifeRing, // Disaster Recovery Planning (Regular life ring as a symbol of rescue or recovery)
    FaChartLine, // Security Information and Event Management (SIEM) (Representing analytics or monitoring)
  } from 'react-icons/fa';
import Layout from '../components/Layout';

// Styled components
const PageContainer = styled.div`
  padding: 20px;
  background: ${props => props.theme.colors.darkBlue};
  color: ${props => props.theme.colors.white};
`;

const ServiceIntro = styled.section`
  margin-bottom: 60px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const ServiceCard = styled.div`
  background: ${props => props.theme.colors.lightBlue};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ServiceIcon = styled.div`
  margin: 20px 0;
  font-size: 2rem;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${props => props.theme.colors.darkBlue};
  color: ${props => props.theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  max-width: 600px;
  width: 100%;
`;

const CloseButton = styled.button`
  background: ${props => props.theme.colors.gray};
  color: ${props => props.theme.colors.darkBlue};
  float: right;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ServiceDetailsCTA = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.teal};
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${props => props.theme.colors.highlight};
  }
`;

// Icons for each service (for illustration purposes, use appropriate ones)
// Example icon usage in a serviceIcons object
const serviceIcons = {
  'Cybersecurity Audit': <FaShieldAlt />,
  'Incident Response': <FaBug />,
  'Penetration Testing': <FaUserSecret />,
  'Risk Management': <FaShieldAlt />, // Alternative due to FaRisk not existing
  'Data Protection & Privacy': <FaLock />,
  'Advanced Threat Protection': <FaUserShield />,
  'Security Awareness Training': <FaChalkboardTeacher />,
  'Cloud Security': <FaCloud />,
  'Compliance Management': <FaRegCheckCircle />,
  'Endpoint Security': <FaLaptopMedical />,
  'Network Security': <FaNetworkWired />,
  'Vulnerability Management': <FaSearchPlus />,
  'Identity and Access Management (IAM)': <FaUsersCog />,
  'Disaster Recovery Planning': <FaRegLifeRing />,
  'Security Information and Event Management (SIEM)': <FaChartLine />,
};

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        {children}
      </ModalContent>
    </ModalBackground>
  );
};

// Service data enriched with SEO-optimized content
const services = [
    {
      title: 'Cybersecurity Audit',
      keyword: 'Cybersecurity Vulnerability Assessment',
      description: 'A comprehensive evaluation to identify vulnerabilities and assess the effectiveness of existing security controls.',
      details: `A cybersecurity audit is a comprehensive evaluation of an organization's information system security. This service aims to identify vulnerabilities, assess the effectiveness of existing security controls, and recommend enhancements. Our cybersecurity audits provide businesses with a clear understanding of their security posture, enabling informed decisions to fortify their defenses against cyber threats.`,
    },
    {
      title: 'Incident Response',
      keyword: 'Cyber Threat Mitigation',
      description: 'Rapid and effective incident response is crucial to minimize the impact of cyber attacks.',
      details: `MVPsec.ai's incident response services encompass immediate threat containment, eradication of threats, and recovery processes to restore business operations promptly. We offer a structured approach to managing and resolving security breaches, significantly reducing potential damage and downtime.`,
    },
    {
      title: 'Penetration Testing',
      keyword: 'Ethical Hacking Services',
      description: 'Simulating cyber attacks on your systems to test the strength of your security measures.',
      details: `Penetration testing, or ethical hacking, involves simulating cyber attacks on your systems to test the strength of your security measures. Our experts employ the latest techniques and tools to uncover vulnerabilities that could be exploited by malicious actors. The insights gained from these tests are invaluable for strengthening your security framework.`,
    },
    {
      title: 'Risk Management',
      keyword: 'Cybersecurity Risk Analysis',
      description: 'Effective risk management is pivotal in anticipating and mitigating potential security threats.',
      details: `Our risk management services provide a comprehensive analysis of your organization's exposure to cyber threats, offering strategic solutions to minimize risks. We prioritize risks based on their potential impact, guiding resource allocation towards the most critical vulnerabilities.`,
    },
    {
      title: 'Data Protection & Privacy',
      keyword: 'Information Security Measures',
      description: 'Advanced solutions to protect sensitive information from unauthorized access.',
      details: `In an era where data breaches can devastate a company's reputation and finances, robust data protection and privacy measures are indispensable. MVPsec.ai offers advanced solutions to protect sensitive information from unauthorized access, ensuring compliance with data protection laws and maintaining customer trust.`,
    },
    {
      title: 'Advanced Threat Protection',
      keyword: 'Next-Gen Cybersecurity Solutions',
      description: 'Leverage cutting-edge technology to shield your business from sophisticated cyber attacks.',
      details: `Our advanced threat protection services employ AI and machine learning algorithms to detect and respond to threats in real-time, offering superior defense against complex malware, ransomware, and phishing attacks.`,
    },
    {
      title: 'Security Awareness Training',
      keyword: 'Cybersecurity Education Programs',
      description: 'Empower your workforce with the knowledge to recognize and prevent cyber threats.',
      details: `Our security awareness training programs are designed to foster a culture of cybersecurity mindfulness among employees, reducing the risk of human error-related breaches.`,
    },
    {
      title: 'Cloud Security',
      keyword: 'Secure Cloud Computing Services',
      description: 'Comprehensive cloud security services, ensuring that your data is protected across all cloud platforms.',
      details: `As businesses increasingly move to the cloud, securing cloud environments has become paramount. MVPsec.ai provides comprehensive cloud security services, ensuring that your data is protected across all cloud platforms and services.`,
    },
    {
      title: 'Compliance Management',
      keyword: 'Cybersecurity Compliance Assistance',
      description: 'Assist businesses in meeting legal and regulatory requirements, reducing the risk of penalties.',
      details: `Navigating the complex landscape of cybersecurity regulations can be daunting. Our compliance management services assist businesses in meeting legal and regulatory requirements, reducing the risk of penalties and enhancing customer confidence.`,
    },
    {
      title: 'Endpoint Security',
      keyword: 'Endpoint Protection Solutions',
      description: 'Secure every endpoint connecting to your network, from laptops to smartphones.',
      details: `Secure every endpoint connecting to your network, from laptops to smartphones, with our endpoint security services. We offer robust protection against malware and other cyber threats, ensuring comprehensive security for your mobile workforce.`,
    },
    {
      title: 'Network Security',
      keyword: 'Network Defense Strategies',
      description: 'Protect your network infrastructure from threats with advanced network security solutions.',
      details: `Protect your network infrastructure from threats with advanced network security solutions. Our services include firewall management, intrusion detection systems, and virtual private networks (VPNs) to safeguard your network's integrity.`,
    },
    {
      title: 'Vulnerability Management',
      keyword: 'Continuous Vulnerability Assessment',
      description: 'Identify, assess, and remediate vulnerabilities in your systems with our ongoing vulnerability management services.',
      details: `By continuously monitoring your network for vulnerabilities, we help prevent potential exploits and enhance your security posture.`,
    },
    {
      title: 'Identity and Access Management (IAM)',
      keyword: 'Access Control Systems',
      description: 'Control who has access to your systems and data with sophisticated IAM solutions.',
      details: `Our services ensure that only authorized users can access your resources, reducing the risk of insider threats and data breaches.`,
    },
    {
      title: 'Disaster Recovery Planning',
      keyword: 'Business Continuity Strategies',
      description: 'Prepare your business for the worst-case scenario with comprehensive disaster recovery planning.',
      details: `Our services ensure that your critical systems can be quickly restored after a cyber attack, minimizing downtime and data loss.`,
    },
    {
      title: 'Security Information and Event Management (SIEM)',
      keyword: 'Real-Time Security Monitoring',
      description: 'Gain insights into your security environment with our SIEM services.',
      details: `By collecting and analyzing data from various sources in real-time, we provide actionable intelligence to detect and respond to threats more effectively.`,
    },
  ];
  

  const ServicesPage = () => {
    const [selectedService, setSelectedService] = useState(null);
  
    return (
        <Layout>
      <PageContainer>
        <ServiceIntro>
          <h1>Our Cybersecurity Services</h1>
          <p>In the digital age, cybersecurity is not just a necessity but a critical component...</p>
        </ServiceIntro>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index} onClick={() => setSelectedService(service)}>
              <ServiceIcon>{serviceIcons[service.title]}</ServiceIcon>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          ))}
        </ServicesGrid>
        <Modal isOpen={!!selectedService} onClose={() => setSelectedService(null)}>
          <h2>{selectedService?.title}</h2>
          <p><strong>Keyword:</strong> {selectedService?.keyword}</p>
          <p>{selectedService?.details}</p>
          <ServiceDetailsCTA>Contact Us</ServiceDetailsCTA>
        </Modal>
      </PageContainer>
      </Layout>
    );
  };
  
  export default ServicesPage;