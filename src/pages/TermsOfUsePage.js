import React from 'react';
import Layout from '../components/Layout';

const TermsOfUsePage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-5">Terms of Use for MVPsec.ai</h2>
          <p className="mb-10 text-lg text-gray-600">Please read these terms carefully before using our services.</p>
        </div>

        <div className="space-y-8">
          {[
            { 
              title: "Introduction", 
              content: `Welcome to MVPsec.ai. By accessing our website and using our services, you agree to be bound by these Terms of Use ("Terms"). These Terms govern your access to and use of the services and products offered by MVPsec.ai ("we", "us", or "our"). If you do not agree with any part of these Terms, you must not use our website or services.`
            },
            {
              title: "Use of Services", 
              content: `You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of MVPsec.ai. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.`
            },
            {
                title: "Intellectual Property Rights",
                content: `The content, layout, design, data, databases, and graphics on this website are protected by UK and international copyright laws. Unless expressly authorized by us, you are not allowed to copy, modify, reproduce, republish, upload, post, transmit, or distribute any documents or information from MVPsec.ai in any form or by any means.`
            },          
            {
                title: "User-Generated Content",
                content: `You grant us a non-exclusive, transferable, sub-licensable, royalty-free, perpetual, and worldwide license to use any content you post on MVPsec.ai, including ideas, concepts, know-how, or techniques contained in such content, for any purpose.`                
            },
            {
                title: "Disclaimer of Warranties",
                content: `Our services are provided "as is" without warranty of any kind, either express or implied. We do not guarantee that the services will be uninterrupted or error-free.`
            },
            {
                title: "Limitation of Liability",
                content: `MVPsec.ai will not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use of or inability to use the service.`
            },
            {
                title: "Changes to Terms",
                content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. Your continued use of our services following the posting of any changes to these Terms constitutes acceptance of those changes.`
                
            },
            {
                title: "Governing Law",
                content: `These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which MVPsec.ai operates, without giving effect to any principles of conflicts of law.`
                
            },
            {
                title: "Contact Us",
                content: `If you have any questions about these Terms, please contact us at [insert contact information].`
            }
            // Add the rest of your sections here
          ].map((section, index) => (
            <div key={index} className="card lg:card-side bg-base-100 shadow-xl hover:shadow-2xl transform transition duration-300 hover:-translate-y-2">
              <div className="card-body">
                <h3 className="card-title text-2xl">{section.title}</h3>
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p>If you have any questions about these Terms, please <a href="/contact" className="text-blue-600 hover:text-blue-800 transition duration-300">contact us</a>.</p>
        </div>
      </div>
    </Layout>
  );
};

export default TermsOfUsePage;



          