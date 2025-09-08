import React from "react";
import InputField from "./InputField";

const ContactForm = () => {
  return (
    <form action="" className="w-full flex flex-col gap-6 px-12">
      {/* <InputField /> */}
      <div className="flex gap-8">
        <InputField id="name" label="Your name" type="text" />
        <InputField id="password" label="Password" type="password" />
      </div>
      <div className="flex gap-8">
        <InputField id="phone" label="Phone Number" type="tel" />
        <InputField id="subject" label="Your Subject" type="text" />
      </div>
      <div className="">
        <InputField id="message" label="Your Message" type="text-area" />
      </div>
      <div className="flex justify-center w-full">
        <button className="w-full rounded-[9px] bg-[#452200] text-white py-2">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
