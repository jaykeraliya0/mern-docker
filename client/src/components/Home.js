import React, { useState, useEffect } from "react";

const Home = () => {
  const [useName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <>
      <div className="home-page">
        <div className="home-div">
          <p className="pt-5">WELCOME</p>
          <h1>{useName}</h1>
          <h2>
            {show ? "Happy, to see ypu back" : "We Are The MERN Devloper"}
          </h2>
        </div>
      </div>
    </>
  );
};

export default Home;
