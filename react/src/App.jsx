import { PersonalInfos } from "./personal-info";
import { CvModel } from "./cv-model";
import { useState } from "react";
import "./styles/App.css";

export default function App() {
  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@thereal.com");
  const [phoneNumber, setPhoneNumber] = useState("+44 3245 5521 5521");
  const [address, setAddress] = useState("New York, USA");

  const [inputChanged, setInputChanged] = useState(false);

  return (
    <>
      <div className="container">
        <div className="forms-Container">
          <PersonalInfos
            setFullName={setFullName}
            setEmail={setEmail}
            setPhoneNumber={setPhoneNumber}
            setAddress={setAddress}
          />
        </div>
        <CvModel
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
        />
      </div>
    </>
  );
}
