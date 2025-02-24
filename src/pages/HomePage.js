import React, { useState } from 'react';
import Layout from '../components/Layout';
import heroImage from '../assets/hero-banner.jpg'; // Adjust this import to match your actual image path
import { FaUserSecret, FaSearch, FaShieldAlt, FaSkullCrossbones, FaBrain, FaPeopleArrows, FaChartLine, FaLightbulb, FaGraduationCap, FaRegThumbsUp } from 'react-icons/fa';

const HomePage = () => {
  const [selectedStrategyIndex, setSelectedStrategyIndex] = useState(null);

  const handleStrategyClick = (index) => {
    setSelectedStrategyIndex(selectedStrategyIndex === index ? null : index);
  };

const strategies = [
    {
      title: 'Precision Offensive Security',
      detail: 'Our offensive security measures are designed with precision, targeting specific vulnerabilities and simulating real-world cyber attacks to fortify our clients’ defenses against potential threats.',
      icon: <FaSkullCrossbones />
    },
    {
      title: 'Strategic Penetration Testing',
      detail: 'Through methodical penetration testing, MVPsec.ai uncovers hidden vulnerabilities and strengthens security systems, ensuring that our clients are always several steps ahead of malicious actors.',
      icon: <FaUserSecret />
    },
    {
      title: 'Advanced Red Teaming',
      detail: 'Our red teaming exercises employ a holistic approach, challenging and testing every aspect of your security posture with advanced attack simulations to enhance your defensive strategies.',
      icon: <FaShieldAlt />
    },
    {
      title: 'Cyber Attack Simulation Excellence',
      detail: 'At MVPsec.ai, we simulate sophisticated cyber attacks to evaluate and improve the effectiveness of security protocols, ensuring your organization is prepared for any cyber threat.',
      icon: <FaSearch />
    },
    {
      title: 'Prioritize Security Innovation',
      detail: 'At MVPsec.ai, we stay ahead of cyber threats through continuous innovation and adopting cutting-edge technologies. Our commitment to pioneering solutions ensures superior protection for our clients.',
      icon: <FaLightbulb />
    },
    {
      title: 'Adapt and Overcome',
      detail: 'The cybersecurity landscape is ever-changing. Our agility and readiness to adapt are paramount, enabling us to overcome even the most sophisticated cyber threats with resilience and expertise.',
      icon: <FaBrain />
    },
    {
      title: 'Collaborative Cyber Defense',
      detail: 'Cybersecurity is a collective endeavor. At MVPsec.ai, we foster strong partnerships and collaboration, both internally and with our clients, to build robust security frameworks tailored to specific needs.',
      icon: <FaPeopleArrows />
    },
    {
      title: 'Proactive Threat Management',
      detail: 'We don’t wait for cyber threats to manifest. Our proactive approach to threat management involves continuous monitoring, risk assessment, and preemptive measures to protect against potential vulnerabilities.',
      icon: <FaChartLine />
    },
    {
      title: 'Empower Through Knowledge',
      detail: 'Empowering our clients and team with cybersecurity knowledge is key. Through education and training, we ensure that best practices in security are understood and implemented, strengthening the human firewall.',
      icon: <FaGraduationCap />
    },
    {
      title: 'Exceeding Compliance Standards',
      detail: 'Compliance is not our goal but our starting point. At MVPsec.ai, we aim to exceed standard regulatory requirements, providing peace of mind and an extra layer of security to our clients through meticulous adherence to and surpassing of industry standards.',
      icon: <FaRegThumbsUp />
    }
  ];
  
  return (
    <Layout>
      <div className="container mx-auto px-4 mt-16">
        {/* Enhanced hero section with card-like styles and hover effect */}
        <div className="rounded-lg overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="hero bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-lg">
                <h1 className="mb-5 text-5xl font-bold text-white">Secure Your Digital Horizon</h1>
                <p className="mb-5 text-white">Lead the cybersecurity front with MVPsec's cutting-edge services.</p>
                <a href="/services" className="btn btn-primary">Explore Services</a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 my-8">
          {strategies.map((strategy, index) => (
            // Apply transform transition and hover effect to each strategy card
            <div key={index} className="card bg-base-100 shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl" onClick={() => handleStrategyClick(index)}>
              <div className="card-body items-center text-center">
                <div className="text-3xl mb-4">{strategy.icon}</div>
                <h2 className="card-title">{strategy.title}</h2>
                {selectedStrategyIndex === index ? (
                  <p>{strategy.detail}</p>
                ) : (
                  <p className="text-sm">Click to learn more</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
  export default HomePage;
  