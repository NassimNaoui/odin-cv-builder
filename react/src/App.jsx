import { PersonalInfos } from "./personal-info";
import { DeleteAndRelaod } from "./components/deleteAndReload";
import { CvModel } from "./cv-model";
import { useState } from "react";
import { EducationApp } from "./education";
import "./styles/App.css";
import { use } from "react";

export default function App() {
  const handleChangeEditing = (state) => {
    return state ? setIsEditing(true) : setIsEditing(false);
  };

  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@thereal.com");
  const [phoneNumber, setPhoneNumber] = useState("+44 3245 5521 5521");
  const [address, setAddress] = useState("New York, USA");
  const [education, setEducation] = useState([
    {
      id: 1,
      name: "IFAG",
      degree: "Master",
      startDate: "09/2016",
      endDate: "09/2018",
      location: "Boulogne",
    },
    {
      id: 2,
      name: "CNAM",
      degree: "Bachelor",
      startDate: "09/2013",
      endDate: "09/2016",
      location: "Paris 3",
    },
  ]);

  const [educationBackUp, setEducationBackUp] = useState(education);

  const handleChange = (id, field, value) => {
    setEducation((prevEducation) => {
      const updated = prevEducation.map((school) =>
        school.id === id ? { ...school, [field]: value } : school
      );
      return updated;
    });
  };

  const addSchool = () => {
    setEducation((prev) => {
      const newEducation = [...prev, { id: Date.now(), name: "", degree: "" }];
      return newEducation;
    });
  };

  const dropSchool = (index) => {
    setEducation((prev) => {
      const newEducation = [...prev.slice(0, index), ...prev.slice(index + 1)];
      return newEducation;
    });
  };

  const upDateBackUp = () => {
    setEducationBackUp(education);
  };

  const getBackup = () => {
    setEducation(educationBackUp);
  };

  const clear = () => {
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
    setEducation([]);
  };

  const reload = () => {
    setFullName("John Doe");
    setEmail("johndoe@thereal.com");
    setPhoneNumber("+44 3245 5521 5521");
    setAddress("New York, USA");
    setEducation([
      {
        id: 1,
        name: "IFAG",
        degree: "Master",
        startDate: "09/2016",
        endDate: "09/2018",
        location: "Boulogne",
      },
      {
        id: 2,
        name: "CNAM",
        degree: "Bachelor",
        startDate: "09/2013",
        endDate: "09/2016",
        location: "Paris 3",
      },
    ]);
  };

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
          <EducationApp
            education={education}
            handleChange={handleChange}
            addSchool={addSchool}
            dropSchool={dropSchool}
            upDateBackUp={upDateBackUp}
            getBackup={getBackup}
          />
        </div>
        <CvModel
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
          schoolName={education.map((school) => (
            <div className="education-field">
              <div className="date-location">
                <div id="date">
                  {school.startDate} {school.endDate}
                </div>
                <div id="location">{school.location}</div>
              </div>
              <div className="school-degree">
                <div id="school">{school.name}</div>
                <div id="degree">{school.degree}</div>
              </div>
            </div>
          ))}
        />
      </div>
    </>
  );
}
