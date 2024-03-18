import React from 'react';
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Learn more about MVPsec.ai, our mission, and the team that's leading the cybersecurity industry.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg mb-6">
            <div className="card bg-base-100 shadow-xl p-4">
              <div className="card-body">
                <h2 className="card-title">Our Mission</h2>
                <p>
                  At MVPsec.ai, our mission is to provide cutting-edge cybersecurity solutions that protect businesses around the globe. Our innovative approaches and dedicated team ensure that your digital assets are secure.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg">
            <div className="card bg-base-100 shadow-xl p-4">
              <div className="card-body">
                <h2 className="card-title">Meet the Team</h2>
                <p>
                  Our team is comprised of industry experts with years of experience in cybersecurity. We are passionate about technology and committed to excellence in everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
