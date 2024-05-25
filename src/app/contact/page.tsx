// import ContactUsForm from "@/components/common/form/ContactUsForm";
import React from "react";

const ContactPage = () => {
  return (
    <div className="py-20 container">
      <div className="grid grid-cols-2">
        <div className="container flex flex-col gap-8">
          <h1 className="mb-4">Contact Information</h1>
          <p className="text-gray-400">
            Address:{" "}
            <span className="text-primary">4831 Carriagepark Rd, Fairfax</span>
          </p>
          <p className="text-gray-400">
            Phone: <span className="text-primary">+1 571 555 6666</span>
          </p>
          <p className="text-gray-400">
            Email: <span className="text-primary">dosablendz@pgmail.com</span>
          </p>
          <p className="text-gray-400">
            Business Hours:{" "}
            <span className="text-primary">Monday-Friday 9:00am - 9:00pm</span>
          </p>
        </div>
        <div className="container">{/* <ContactUsForm /> */}</div>
      </div>
    </div>
  );
};

export default ContactPage;
