import React from "react";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <section className="flex flex-col gap-8 scroll-mt-28" id="contact">
      <h2 className="font-cinzel 2xl:text-5xl lg:text-4xl text-center font-semibold text-3xl  uppercase">
        Contact US
      </h2>
      <div className="flex">
        <div className="flex-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247.91562135147194!2d107.02418929599169!3d-6.177592740727998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1757117431190!5m2!1sid!2sid"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex-5  flex flex-col items-center gap-6">
          <h3 className="text-2xl font-cinzel font-semibold uppercase">
            Let's Get In Touch
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
    // <section className="bg-gradient-to-b from-[#faf1e1] via-white to-[#faf1e1] py-12">
    //   <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">
    //     <h2 className="text-3xl font-cinzel text-center text-[#1e293b] mb-6">
    //       Contact Us
    //     </h2>
    //     <form className="space-y-4">
    //       <input
    //         type="text"
    //         placeholder="Your Name"
    //         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none
    //                focus:ring-2 focus:ring-[#8c6239] focus:ring-opacity-60
    //                focus:shadow-lg focus:shadow-[#8c6239]/50"
    //       />
    //       <input
    //         type="email"
    //         placeholder="Your Email"
    //         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none
    //                focus:ring-2 focus:ring-[#8c6239] focus:ring-opacity-60
    //                focus:shadow-lg focus:shadow-[#8c6239]/50"
    //       />
    //       <textarea
    //         placeholder="Your Message"
    //         rows={4}
    //         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none
    //                focus:ring-2 focus:ring-[#8c6239] focus:ring-opacity-60
    //                focus:shadow-lg focus:shadow-[#8c6239]/50"
    //       />
    //       <button
    //         type="submit"
    //         className="w-full bg-[#4b2e19] text-white py-3 rounded-md font-semibold
    //                hover:bg-[#3a2414] transition"
    //       >
    //         Send Message
    //       </button>
    //     </form>
    //   </div>
    // </section>
  );
};

export default Contact;
