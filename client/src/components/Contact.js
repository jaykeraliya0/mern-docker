import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  // send data to db
  const contactForm = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    });
    const data = await res.json();

    if (!data) {
      console.log("message not sen");
    } else {
      alert("Message send");
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-4 text-center">Contact Us</h1>
        <form className="row g-3" id="contact_form" method="POST">
          <div className="col-md-4">
            <div className="form-floating">
              <input
                type="text"
                name="name"
                id="contact_form_name"
                placeholder="name"
                value={userData.name}
                onChange={handleInputs}
                autoComplete="off"
                className="form-control"
                required="true"
              />
              <label for="contact_form_name">Your Name</label>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-floating">
              <input
                type="email"
                name="email"
                id="contact_form_email"
                placeholder="email"
                value={userData.email}
                onChange={handleInputs}
                autoComplete="off"
                className="form-control"
                required="true"
              />
              <label for="contact_form_email">Your Email</label>
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-floating">
              <input
                type="number"
                name="phone"
                id="contact_form_phone"
                placeholder="phone"
                value={userData.phone}
                onChange={handleInputs}
                autoComplete="off"
                className="form-control"
                required="true"
              />
              <label for="contact_form_phone">Your Phone number</label>
            </div>
          </div>

          <div className="col-12">
            <div className="form">
              <textarea
                id="contact_form_message"
                name="message"
                placeholder="Message"
                value={userData.message}
                onChange={handleInputs}
                autoComplete="off"
                className="form-control"
                cols="10"
                rows="5"
                required="true"
              ></textarea>
            </div>
            <div className="form-group mt-3">
              <button
                type="submit"
                className="btn btn-outline-primary"
                onClick={contactForm}
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
