import { useState } from 'react';
import { useRouter } from 'next/router';
export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const router = useRouter();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
      <button type="submit" className="button-blue">Submit</button>
    </form>
  );
}
