import React, { useState } from "react";
import { Button } from "./ui/Button";
import { iconerror } from "../assets";

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value: string) => {
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (value === "") {
      setError("");
    } else if (!gmailPattern.test(value)) {
      setError("Whoops, make sure it's an email");
    } else {
      setError("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setEmail(value);
    setError("");
  };

  const handleClick = () => {
    validateEmail(email);
  };

  return (
    <div className="flex md:flex-row gap-5 md:w-[28rem] mx:flex-col">
      <div className="relative">
        <div>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your Gmail address"
            className={`md:w-[20rem] p-2 border font-Rubik font-medium h-[2.9rem] pl-4 mx:w-[21rem] ${
              error ? "border-SoftRed border-4" : "border-Gray"
            } rounded`}
          />
          {error && (
            <img
              src={iconerror}
              alt="error icon"
              className="absolute right-2 top-3"
            />
          )}
        </div>
        {error && <p className="h-8 pt-1 pl-3 -mt-2 font-mono text-white rounded bg-SoftRed">{error}</p>}
      </div>

      <div>
        <Button
          className="text-white rounded-md border-SoftRed bg-SoftRed hover:border-4 hover:text-SoftRed mx:w-[21rem] md:w-36"
          onClick={handleClick}
        >
          <span className="font-medium font-Rubik">Contact Us</span>
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
