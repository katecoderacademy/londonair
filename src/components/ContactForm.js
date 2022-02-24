import React, { useState } from "react";


// much of the below form is courtesy of https://herotofu.com/solutions/guides/react-contact-form
const FORM_ENDPOINT = "https://public.herotofu.com/v1/8a0b6e90-94b1-11ec-bdf8-dd9c99f898ec"; 

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      class="standard-form"
    >
      <div>
        <input type="text" placeholder="Your name" name="name" required />

        <input type="email" placeholder="Email" name="email" required />
        <textarea placeholder="Your message" name="message" required />

        <button type="submit"> Send a message </button>
      </div>
    </form>
  );
};

export function ContactUs() { 


  return (
      <>
        <div className="view-form">
            <heading className="heading"> Contact Us </heading>
            <ContactForm />
        </div>
      </>
  
  );

  
  

}