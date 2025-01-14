import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const config_data = {
    service_id: "service_vg7ntwp",
    template_id: "template_07dvgm6",
    public_key: "e2iROkTfd_QkaiU8Z",
  };
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Clicked");

    emailjs
      .sendForm(
        config_data.service_id,
        config_data.template_id,
        formRef.current,
        config_data.public_key
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          alert(
            "Your message has been sent successfully, I will get back to you soon"
          );
        },
        (error) => {
          console.log("Error in sending message:", error.text);
          alert(
            "An error occurred while sending your message. Please try again."
          );
        }
      );

    e.target.reset();
  };
  return (
    <section
      name="Contact"
      className="px-8 md:px-16 py-16 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
        Contact Me
      </h2>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="flex flex-col">
          <label
            htmlFor="first_name"
            className="text-gray-700 dark:text-gray-300 mb-2"
          >
            First Name *
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="border border-gray-300 dark:border-gray-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            required
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="last_name"
            className="text-gray-700 dark:text-gray-300 mb-2"
          >
            Last Name *
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="border border-gray-300 dark:border-gray-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-gray-700 dark:text-gray-300 mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 dark:border-gray-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-gray-700 dark:text-gray-300 mb-2"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="border border-gray-300 dark:border-gray-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
          />
        </div>

        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="subject"
            className="text-gray-700 dark:text-gray-300 mb-2"
          >
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="border border-gray-300 dark:border-gray-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            required
          />
        </div>
        <div className="flex flex-col md:col-span-2">
          <label
            htmlFor="message"
            className="text-gray-700 dark:text-gray-300 mb-2"
          >
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="border border-gray-300 dark:border-gray-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
            required
          ></textarea>
        </div>
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
