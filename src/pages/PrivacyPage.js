import React from 'react';
import Layout from '../components/Layout';


const PrivacyPage = () => {
    const sections = [{
        title: "Introduction",
        content: "At MVPsec.ai, we are committed to protecting the privacy and security of our customers and website visitors. This Privacy Policy outlines how we collect, use, protect, and disclose your information when you use our website and services.",
      },
      {
          title: "Information We Collect",
          content: `We may collect personal information that you provide to us, such as your name, email address, and payment information. We also collect non-personal information, such as browsing data and how you use our website.`
      },
      {
          title: "Use of Information",
          content: "The information we collect may be used to",
          list:[
            "Provide, maintain, and improve our services",
            "Process transactions and send related information, including confirmations and invoices",
            "Send you technical notices, updates, security alerts, and support messages",
            "Respond to your comments, questions, and requests"
          ]
      },
      {
          title: "Sharing of Information",
          content: "We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information except in the following cases:",
          list:
          [
            "To comply with the law or in response to a subpoena, court order, or other legal process",
            "To protect the rights, property, or safety of MVPsec.ai, our customers, or others",
            "To our trusted services providers who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential"
            ]
      },
      {
          title: "Data Security",
          content: `We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.`
      },
      {
          title: "Changes to Our Privacy Policy",
          content: `We may update this Privacy Policy to reflect changes to our information practices. We will notify you by email (sent to the e-mail address specified in your account) or by means of a notice on this website prior to the change becoming effective.`
      },
      {
          title: "Contact Us",
          content: `If you have any questions about this Privacy Policy, please contact us at [insert contact information]`
      }
    ];

    return (
        <Layout>
          <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-10">Privacy Policy for MVPsec.ai</h2>
            
            {sections.map((section, index) => (
              // Add transform transition for hover effects
              <div key={index} className="card lg:card-side bg-base-100 shadow-xl p-5 mb-5 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="card-body">
                  <h2 className="card-title text-2xl">{section.title}</h2>
                  <p className="mb-4">{section.content}</p>
                  {section.list && (
                    <ul className="list-disc list-inside space-y-2">
                      {section.list.map((item, listItemIndex) => (
                        <li key={listItemIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Layout>
      );
    };
export default PrivacyPage;