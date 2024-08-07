import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    setSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mqkvvwoy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success
        setFormSuccess(true);
      } else {
        // Handle error
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error submitting form', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
    className=" mx-auto mt-8 p-4 w-400 md:p-20 bg-opacity-25 backdrop-blur rounded-lg shadow-lg"
    style={{
      backgroundImage: `url('./purple.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
      {formSuccess ? (
        <div className="text-purple-200 text-center font-bold mb-8 font-serif ">Form successfully sent!</div>
      ) : (
        <>
          <h2 className="text-20xl font-bold mb-4 border-gray-300 rounded-md text-purple-100 font-serif ">Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-purple-200 font-serif ">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-purple-800 font-serif "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-purple-300 font-serif ">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-purple-800 font-serif "
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-purple-100 font-serif ">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-purple-800 font-serif "
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="bg-purple-800 text-white font-serif  px-4 py-2 rounded-md transition-colors duration-300 w-full"
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactForm;

