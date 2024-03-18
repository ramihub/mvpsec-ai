import React from 'react';
import Layout from '../components/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-center mb-4">Get in Touch</h1>
          <p className="text-lg">We're here to help and answer any question you might have. We look forward to hearing from you.</p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <form className="card bg-base-100 shadow-xl p-4">
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" id="name" placeholder="Your name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="email">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" id="email" placeholder="Your email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="message">
                  <span className="label-text">Message</span>
                </label>
                <textarea id="message" placeholder="Your message" className="textarea textarea-bordered" rows="4"></textarea>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
