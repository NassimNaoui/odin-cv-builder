import { PersonalInfos } from "./personal-info";
import { DeleteAndRelaod } from "./components/deleteAndReload";
import { CvModel } from "./cv-model";
import { useState } from "react";
import { EducationApp } from "./education";
import "./styles/App.css";

export default function App() {
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@thereal.com");
  const [phoneNumber, setPhoneNumber] = useState("+44 3245 5521 5521");
  const [address, setAddress] = useState("New York, USA");

  const education = ["Ifag", "CNAM", "Evariste"];

  function returnEducation() {
    education.map((school) => <li key={school}>{school}</li>);
  }

  const clear = () => {
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
  };

  const reload = () => {
    setFullName("John Doe");
    setEmail("johndoe@thereal.com");
    setPhoneNumber("+44 3245 5521 5521");
    setAddress("New York, USA");
  };
  // const [inputChanged, setInputChanged] = useState(false);

  return (
    <>
      <div className="container">
        <div className="forms-Container">
          <DeleteAndRelaod Clear={clear} Reload={reload} />
          <PersonalInfos
            fullName={fullName}
            setFullName={setFullName}
            email={email}
            setEmail={setEmail}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            address={address}
            setAddress={setAddress}
          />
          <EducationApp />
        </div>
        <CvModel
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
          education={education.map((school) => (
            <li key={school}>{school}</li>
          ))}
        />
      </div>
    </>
  );
}
