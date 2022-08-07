import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import signpic from "../Images/Signup.png";

const Signup = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        work: "",
        password: "",
        cpassword: "",
    });

    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, phone, work, password, cpassword } = user;

        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                work,
                password,
                cpassword,
            }),
        });
        const data = await res.json();

        if (data.status === 422 || !data) {
            window.alert("Invalid signup");
            console.log("Signup successful");
        } else {
            window.alert("Signup successful");
            console.log("Signup successful");
            history.push("/login");
        }
    };

    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-contact">
                        <div className="signup-form">
                            <h1 className="text-center">Sign Up</h1>
                            <form method="POST">
                                <div className="form-floating mb-3 mt-5">
                                    <input
                                        type="text"
                                        name="name"
                                        autoComplete="off"
                                        value={user.name}
                                        onChange={handleInputs}
                                        id="name"
                                        className="form-control"
                                        placeholder="Name"
                                    />
                                    <label for="name">
                                        <i className="bi bi-person-fill"></i>
                                        Your Name
                                    </label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInputs}
                                        className="form-control"
                                    />
                                    <label for="email">
                                        <i className="bi bi-envelope-fill"></i>{" "}
                                        Your Email
                                    </label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="number"
                                        name="phone"
                                        id="phone"
                                        placeholder="Phone"
                                        autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInputs}
                                        className="form-control"
                                    />
                                    <label for="phone">
                                        <i className="bi bi-telephone-fill"></i>{" "}
                                        Your Phone Number
                                    </label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="text"
                                        name="work"
                                        id="work"
                                        placeholder="Work"
                                        autoComplete="off"
                                        value={user.work}
                                        onChange={handleInputs}
                                        className="form-control"
                                    />
                                    <label for="phone">
                                        <i className="bi bi-briefcase-fill"></i>{" "}
                                        Your Profession
                                    </label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="password"
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleInputs}
                                        className="form-control"
                                    />
                                    <label for="password">
                                        <i className="bi bi-lock-fill"></i> Your
                                        Password
                                    </label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        name="cpassword"
                                        id="cpassword"
                                        placeholder="cpassword"
                                        autoComplete="off"
                                        value={user.cpassword}
                                        onChange={handleInputs}
                                        className="form-control"
                                    />
                                    <label for="cpassword">
                                        <i className="bi bi-lock-fill"></i>{" "}
                                        Confirm Your Password
                                    </label>
                                </div>
                                <div className="form-group">
                                    <input
                                        className="btn btn-outline-primary"
                                        type="submit"
                                        name="signup"
                                        id="signup"
                                        value="Signup"
                                        onClick={postData}
                                    />
                                </div>
                                <NavLink to="/login" className="mt-5">
                                    Already have an account? Login here
                                </NavLink>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;
