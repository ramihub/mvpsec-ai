import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-base-200">
        <div className="container mx-auto px-4 py-10 text-center">
          <h1 className="text-5xl font-bold">About MVPsec.ai</h1>
          <p className="mt-4 text-lg">
            Innovating for a safer digital world.
          </p>
          <Link to="/contact" className="btn btn-primary mt-6">Contact us today</Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Dynamically creating cards for each section */}
          {[
            { title: "Who We Are", content: "MVPsec.ai is a cutting-edge cybersecurity firm dedicated to providing top-tier offensive and defensive cybersecurity solutions. Our team consists of highly skilled professionals with deep expertise in cyber threat intelligence, risk management, penetration testing, and advanced cyber defense strategies. Founded on the principles of innovation, excellence, and partnership, we are committed to securing the digital assets of businesses worldwide." },
            { title: "Our Mission", content: "Our mission is to empower organizations to defend against the ever-evolving landscape of cyber threats. At MVPsec.ai, we believe in a proactive approach to cybersecurity, where resilience, readiness, and advanced threat intelligence converge to create unbreachable security protocols. We aim to be not just service providers but trusted cybersecurity partners to our clients, offering bespoke solutions tailored to meet their unique security needs." },
            { title: "Why Choose MVPsec.ai?", content: `Expertise in Offensive and Defensive Cybersecurity: Our extensive experience in both offensive and defensive cybersecurity measures means we offer comprehensive security solutions. From penetration testing and red teaming to advanced threat detection and incident response, we cover all bases to protect your business.\n\nCutting-Edge Technology: We leverage the latest technologies and methodologies in cybersecurity to offer you superior protection. Our use of artificial intelligence, machine learning, and blockchain technologies ensures that your defenses are as advanced as the threats they face.\n\nCustomized Security Strategies: Understanding that every organization has unique security needs, we specialize in creating customized cybersecurity strategies. Our solutions are not one-size-fits-all but are tailored to specifically address the vulnerabilities and risks unique to your business.\n\nProactive Approach: Our proactive approach to cybersecurity emphasizes early detection and rapid response. We believe in staying ahead of threats by anticipating them before they occur, ensuring that your business remains secure in an unpredictable digital world.\n\nEducation and Empowerment: We are staunch advocates for cybersecurity education and awareness. By empowering our clients and their teams with the knowledge and tools to recognize and mitigate cyber threats, we strengthen their defenses from the inside out.` },
            { title: "Our Services", content: "Offensive Security Solutions: Including penetration testing, vulnerability assessments, and red team exercises.\n\nDefensive Security Measures: From incident response to advanced threat protection and risk management.\n\nCompliance and Governance: Helping businesses navigate the complex landscape of cybersecurity regulations.\n\nCybersecurity Training: Offering comprehensive training programs to enhance your team's security awareness." },
            { title: "Our Vision", content: "To be the global leader in cybersecurity solutions, setting the standard for innovation, reliability, and client satisfaction. We envision a world where businesses can operate without the fear of digital threats, thanks to state-of-the-art security practices that are always several steps ahead of cyber criminals." },
            { title: "Join Us on Our Journey", content: "At MVPsec.ai, we are more than just a cybersecurity company. We are innovators, educators, and relentless defenders of the digital realm. Join us on our mission to make the digital world a safer place for businesses everywhere.\n\nContact us today to learn how we can fortify your cyber defenses and help you achieve your security goals." },
          ].map((section, index) => (
            <div key={index} className="card bg-base-100 shadow-xl my-6 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="card-body">
                <h2 className="card-title text-3xl">{section.title}</h2>
                <p className="whitespace-pre-line">{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;