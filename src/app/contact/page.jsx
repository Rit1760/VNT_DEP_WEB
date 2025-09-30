'use client';

import '../../Styles/contact.css';
import { useState } from 'react';
import Head from 'next/head';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    issueType: '',
    subject: '',
    description: '',
    country: '',
    purchaseSource: '',
  });

  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMsg(data.message || 'Form submitted successfully!');
        setForm({
          name: '',
          businessName: '',
          email: '',
          phone: '',
          issueType: '',
          subject: '',
          description: '',
          country: '',
          purchaseSource: '',
        });
      } else {
        setMsg(data.message || 'Something went wrong.');
      }
    } catch (error) {
      setMsg('An error occurred while submitting the form.');
    }
  };

  return (
    <>



<Head>                
  <title>Contact VNT | Get in Touch with Solar & Energy Experts</title>

  <meta
    name="description"
    content="Reach out to VNT for inquiries, support, and information about our solar solutions, energy management, fire and safety, and other services. We're here to assist you across India."
  />

  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="VNT | Contact Us" />
  <meta property="og:description" content="Contact VNT for expert advice and support on solar energy solutions, energy management, fire safety, and more. Connect with our team today." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://vnt.in/Contact/" />
  <meta property="og:site_name" content="VNT" />

  <meta
    name="keywords"
    content="VNT contact, solar solutions support, energy management contact, fire safety inquiries, customer support VNT, solar energy assistance India"
  />
</Head>



      <div className="main1_Contact">
        {/* Section One */}
        <div className="container1_Contact">

            <div className="col1_Contact">
              <h3>Contact Us</h3>
            </div>
        </div>


      {/* section three  */}

      <div className='container3_contact'>
        <div className='cont3_col1_contact'>
          <h3>Your Power. Our Expertise. Connect with VNT</h3>
          <h4>Have Questions? Contact the Experts at VNT</h4>
        </div>
      </div>

      {/* section three end  */}



        {/* Section Two */}
        <div className="container2_contact">
          <div className="row3_contact">
            <div className="col3_contact">
              <h3>Available at</h3>
              <h4>+91 7290003370</h4>
            </div>
            <div className="col4_contact">
              <h3>Still need help? Write us</h3>

              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />


                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                <label htmlFor="phone">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter your telephone number"
                  value={form.phone}
                  onChange={handleChange}
                />

                <label htmlFor="issueType">What can we do for you:</label>
                <select
                  id="issueType"
                  name="issueType"
                  value={form.issueType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an issue</option>
                  <option value="EV issue">EV issue</option>
                  <option value="Solar issue">Solar issue</option>
                  <option value="Telecom issue">Telecom issue</option>
                  <option value="Fire & Safety issue">Fire & Safety issue</option>
                </select>


                <label htmlFor="description">Short description</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Short description"
                  value={form.description}
                  onChange={handleChange}
                />


                <button type="submit">Submit</button>

                {/* Message */}
                {msg && <p className="form-message">{msg}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
