import { Input } from "./components/input";
import "./styles/input-infos.css";

export function PersonalInfos({
  fullName,
  setFullName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  address,
  setAddress,
}) {
  return (
    <div className="input-infos-layout">
      <div className="input-infos-container">
        <h1>Personnal Details</h1>
        <ReturnFullName setFullName={setFullName} fullName={fullName} />
        <ReturnMail setEmail={setEmail} email={email} />
        <ReturnPhoneNumber
          setPhoneNumber={setPhoneNumber}
          phoneNumber={phoneNumber}
        />
        <ReturnAddress setAddress={setAddress} address={address} />
      </div>
    </div>
  );
}

function ReturnFullName({ fullName, setFullName }) {
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  return (
    <Input
      type="text"
      required
      label="Full Name"
      placeholder="First and Last Name"
      value={fullName}
      onChange={handleFullNameChange}
    />
  );
}

function ReturnMail({ email, setEmail }) {
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Input
      type="email"
      label="Email"
      placeholder="Enter Email"
      value={email}
      onChange={handleEmailChange}
    />
  );
}

function ReturnPhoneNumber({ phoneNumber, setPhoneNumber }) {
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <Input
      type="tel"
      pattern="[0-9]{10}"
      label="Phone Number"
      placeholder="Enter phone number"
      value={phoneNumber}
      onChange={handlePhoneNumberChange}
    />
  );
}

function ReturnAddress({ address, setAddress }) {
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <Input
      type="text"
      label="Address"
      placeholder="Enter Address"
      value={address}
      onChange={handleAddressChange}
    />
  );
}
