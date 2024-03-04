import { useState } from 'react';
import Footer from '../../components/Footer';
import BlackNavBar from '../BlackNavBar';
import bgImg from '../assets/cntUs.webp';
import { ToastContainer, toast } from 'react-toastify';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = () => {
    setEmail('');
    setName('');
    setMsg('');
    toast.success('Thanks For Reaching Out , Will Contact You Soon');
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BlackNavBar></BlackNavBar>
      <div className="bg-gray-100 mb-[-50px]">
        <div className="relative">
          <img src={bgImg} alt="" className="w-full" />
          <figcaption className="absolute top-0 left-0   text-white p-4 text-4xl font-tableH font-bold">
            CUSTOMER ASSISTANCE
          </figcaption>
        </div>

        <section id="contact-form" className="container mx-auto p-8 my-8">
          <h2 className="text-2xl font-bold mb-4">Send us a message</h2>
          <form
            action="submit_contact_form.php"
            method="POST"
            className="max-w-lg mx-auto"
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-semibold">
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-semibold">
                Your Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                cols="50"
                required
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </section>

        <section id="contact-info" className="container mx-auto my-8 p-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-4">For inquiries, you can contact us via:</p>
          <ul>
            <li className="mb-1">Phone: 1-800-MERCEDES</li>
            <li className="mb-1">Email: info@mercedesbenz.com</li>
            <li className="mb-1">
              Address: 123 Mercedes Drive, Stuttgart, Germany
            </li>
          </ul>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};
export default ContactUs;
