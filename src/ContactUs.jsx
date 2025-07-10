import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';
// service_0z5be5i
// zKFi2ZgOH3CGS4Bvh
// template_rfvo9mq
const Contact = ({id}) => {

 const form = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    emailjs.sendForm(
      'service_0z5be5i',
      'template_rfvo9mq',
      form.current,
      'zKFi2ZgOH3CGS4Bvh'
    )
    .then(() => {
      setDone(true);
      setLoading(false);
      form.current.reset();
    })
    .catch((err) => {
      console.error('Email error:', err);
      setError('Failed to send. Try again!');
      setLoading(false);
    });
  };

  return (
   <div id={id} className="contact">
      <h2 className="contact_header">Contact Me</h2>
      <p className="contact_sub">
        Have a project or want to collaborate? Drop me a message below or email me directly.
      </p>
      <form ref={form} className="contact_form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" className="contact_input" required />
        <input type="email" name="email" placeholder="Your Email" className="contact_input" required />
        <textarea name="message" placeholder="Your Message" className="contact_textarea" required></textarea>
        <button type="submit" className="contact_button" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {done && <p className="success">Your message was sent successfully! ✅</p>}
      {error && <p className="error">{error}</p>}
      <p className="contact_alt">
        Or email me at <a href="mailto:harshanandpro07@example.com">harshanandpro07@example.com</a>
      </p>
    </div>
  );
};

export default Contact;