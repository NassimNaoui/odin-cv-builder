import { Input } from "./components/input";
import { useState } from "react";
import "./styles/personal-info.css";

export function PersonalInfos({
  setFullName,
  setEmail,
  setPhoneNumber,
  setAddress,
}) {
  return (
    <div className="Personnal-infos-layout">
      <div className="Personnal-infos-container">
        <h1>Personnal Details</h1>
        <ReturnFullName setFullName={setFullName} />
        <ReturnMail setEmail={setEmail} />
        <ReturnPhoneNumber setPhoneNumber={setPhoneNumber} />
        <ReturnAddress setAddress={setAddress} />
      </div>
    </div>
  );
}

function ReturnFullName({ setFullName }) {
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  return (
    <Input
      type="text"
      required
      label="Full Name"
      placeholder="First and Last Name"
      onChange={handleFullNameChange}
    />
  );
}

function ReturnMail({ setEmail }) {
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Input
      type="email"
      label="Email"
      placeholder="Enter Email"
      onChange={handleEmailChange}
    />
  );
}

function ReturnPhoneNumber({ setPhoneNumber }) {
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <Input
      type="tel"
      pattern="[0-9]{10}"
      label="Phone Number"
      placeholder="Enter phone number"
      onChange={handlePhoneNumberChange}
    />
  );
}

function ReturnAddress({ setAddress }) {
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <Input
      type="text"
      label="Address"
      placeholder="Enter Address"
      onChange={handleAddressChange}
    />
  );
}
