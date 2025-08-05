import { RevealOnScroll } from '../RevealOnScroll';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: '',
  });

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(
      () => setNotification({ show: false, message: '', type: '' }),
      4000
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        e.target,
        PUBLIC_KEY
      );
      console.log(result.text);
      showNotification('Message sent successfully!', 'success');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.log(error.text);
      showNotification(
        'Failed to send message. Please try again later.',
        'error'
      );
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {notification.show && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
            notification.type === 'success'
              ? 'bg-green-600 text-white'
              : 'bg-red-600 text-white'
          }`}
        >
          <div className="flex items-center justify-between">
            <span>{notification.message}</span>
            <button
              onClick={() =>
                setNotification({ show: false, message: '', type: 'success' })
              }
              className="ml-4 text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>
        </div>
      )}

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="px-4 max-w-2xl mx-auto w-full">
            <h2 className="text-4xl font-bold mb-10 text-center text-red-500">
              Get in Touch!
            </h2>
            <p className="text-gray-300 mb-6 text-center">
              Let's build something great together! I'm always open to new
              opportunities, collaborations, or even just a quick chat. Get in
              touch!
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-4 bg-gray-800 text-ivory rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-4 bg-gray-800 text-ivory rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
              </div>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-4 bg-gray-800 text-ivory rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-vertical"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_0.5rem_0_rgba(239,68,68,0.5)] hover:bg-red-600/80 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
};
