import React, { useState } from "react";
import Button from "../components/button";
import Fields from "../components/fields";
import validator from "validator";

function SignUp() {
  const [error, setError] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSignUp() {
    let newError = {};
    if (name === "") {
      newError.name = "Please enter your name";
    } else if (email === "") {
      newError.email = "Please enter your email";
    } else if (password === "") {
      newError.password = "Please enter your password";
    } else if (confirmPassword === "") {
      newError.confirmPassword = "Please enter your confirm password";
    }

    if (Object.keys(newError).length > 0) {
      setError(newError);
    } else {
      setError({});
      alert("Sign up successful");
    }
  }

  const handleCheckName = (e) => {
    console.log(e.length);
    if (e.length < 3) {
      setError({ name: "name is short" });
    } else if (e.length > 5) {
      setError({ name: "" });
      setName(e);
    }
  };

  const handleCheckEmail = (e) => {
    if (validator.isEmail(e)) {
        setError({email:"Valid Email :)"});
    } else {
        setError({email:"Enter valid Email!"});
        setEmail(e);
    }
};

  const handleCheckPassword = (e) => {
    if (e.length < 8) {
      setError({ password: "password is short" });
    } else if (e.length >= 8) {
      setError({ password: "" });
      setPassword(e);
    }
  };
  const handleCheckConfirmPassword = (e) => {
    if (password !== e &&
      password !== "" &&
      e !== "") {
      setError({ confirmPassword: "Passwords do not match" });
    } else {
      setError({ confirmPassword: "" });
      setConfirmPassword(e);
    }
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 mx-auto mt-14">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-600">
          Sign Up
        </h2>
        <form className="space-y-4">
          <Fields
            label="Name"
            type="text"
            placeholder="Enter your name"
            onChange={(e) => handleCheckName(e.target.value)}
            error={error.name}
          />

          <Fields
            label="Email"
            type="email"
            placeholder="Enter your email"
            onChange={(e) => handleCheckEmail(e.target.value)}
            error={error.email}
          />

          <Fields
            label="Password"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => handleCheckPassword(e.target.value)}
            error={error.password}
          />

          <Fields
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            onChange={(e) => handleCheckConfirmPassword(e.target.value)}
            error={error.confirmPassword}
          />
          <Button text="Sign Up" onClick={handleSignUp} />
        </form>
      </div>
    </>
  );
}

export default SignUp;
