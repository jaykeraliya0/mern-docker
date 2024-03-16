import React, { useEffect, useState } from "react";
import Pic from "../logo.jpg";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("http://localhost:5000/about", {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className="container">
        <form method="GET">
          <div className="row">
            <div className="col-md-4">
              <img className="profilepic" src={Pic} alt="Jay" />
            </div>
            <div className="col-md-6 mt-5">
              <div className="profile-head">
                <h5>{userData.name}</h5>
                <h6>{userData.work}</h6>
                <p className="mt-3 mb-5">Ranking: 1/10</p>

                <nav>
                  <div
                    className="nav nav-tabs mb-3"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="false"
                      href="#home"
                    >
                      About
                    </a>

                    <a
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      href="#profile"
                    >
                      Timeline
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex align-items-center justify-content-center flex-column links pt-3">
                <p>WORK LINK</p>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  className="btn btn-liink"
                >
                  Youtube
                </a>
                <a
                  href="https://www.Instagram.com"
                  target="_blank"
                  className="btn btn-liink"
                >
                  Instagram
                </a>
                <a
                  href="https://www.Github.com"
                  target="_blank"
                  className="btn btn-liink"
                >
                  Github
                </a>
                <a
                  href="https://www.Facebook.com"
                  target="_blank"
                  className="btn btn-liink"
                >
                  Facebook
                </a>
              </div>
            </div>
            <div className="col-md-8 pl-5">
              <div className="tab-content profile-tab" id="myTabContant">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-aria-labelledby="nav-home-tab "
                >
                  <div className="profile row px-5 mt-3 ">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>

                    <div className="col-md-6">
                      <p>{userData._id}</p>
                    </div>
                  </div>
                  <div className="profile row px-5 mt-3 ">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>

                    <div className="col-md-6">
                      <p>{userData.name}</p>
                    </div>
                  </div>
                  <div className="profile row px-5 mt-3 ">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>

                    <div className="col-md-6">
                      <p>{userData.email}</p>
                    </div>
                  </div>
                  <div className="profile row px-5 mt-3 ">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>

                    <div className="col-md-6">
                      <p>{userData.phone}</p>
                    </div>
                  </div>
                  <div className="profile row px-5 mt-3 ">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>

                    <div className="col-md-6">
                      <p>{userData.work}</p>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade active"
                  id="nav-profile"
                  role="tabpanel"
                  aria-aria-labelledby="nav-profile-tab "
                >
                  <div className="profile row px-5 mt-3 ">
                    <div className="col-md-6">
                      <label>Expirience</label>
                    </div>

                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="profile row px-5 mt-3 ">
                    <div className="col-md-6">
                      <label>Hourly Rate</label>
                    </div>

                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className="profile row px-5 mt-3 ">
                    <div className="col-md-6">
                      <label>Total Projects</label>
                    </div>

                    <div className="col-md-6">
                      <p>254</p>
                    </div>
                  </div>
                  <div className="profile row px-5 mt-3 ">
                    <div className="col-md-6">
                      <label>English Level</label>
                    </div>

                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="profile row px-5 mt-3 ">
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>

                    <div className="col-md-6">
                      <p>6 Months</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
