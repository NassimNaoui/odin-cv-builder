import { useState } from "react";
import { EducationInput } from "./components/educationInput";
// import "./styles/personal-info.css";

export function EducationApp({
  schoolName,
  setSchoolName,
  degree,
  setDegree,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  location,
  setLocation,
}) {
  const [isEditing, setEditing] = useState(false);
  return (
    <>
      {isEditing ? (
        <EducationInputForms
          schoolName={schoolName}
          setSchoolName={setSchoolName}
          degree={degree}
          setDegree={setDegree}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          location={location}
          setLocation={setLocation}
          onClose={() => setIsEditing(false)}
        />
      ) : (
        <EducationSchoolInfos
          schoolName={schoolName}
          setSchoolName={setSchoolName}
          onClick={() => setEditing(true)}
        />
      )}{" "}
    </>
  );
}

function EducationSchoolInfos({ schoolName, onClick }) {
  return (
    <div className="input-infos-layout">
      <div className="input-infos-container">
        <div className="input-infos-title">
          <h1>Education</h1>
        </div>
        <div className="input-infos-list">
          <ul>
            {schoolName.map((schoolName) => (
              <li key={schoolName}>{schoolName}</li>
            ))}
          </ul>
        </div>
        <div className="add-education-btn">
          <button onClick={onClick}>+ Education</button>
        </div>
      </div>
    </div>
  );
}

function EducationInputForms({
  schoolName,
  setSchoolName,
  degree,
  setDegree,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  location,
  setLocation,
}) {
  return (
    <div className="input-infos-layout">
      <div className="input-infos-container">
        <div className="input-infos-title">
          <h1>Education</h1>
        </div>
        <EducationInput
          setSchoolName={setSchoolName}
          schoolName={schoolName}
          setDegree={setDegree}
          degree={degree}
          setStartDate={setStartDate}
          startDate={startDate}
          setEndDate={setEndDate}
          endDate={endDate}
          setLocation={setLocation}
          location={location}
        />
        <div className="education-btn-container">
          <button>Delete</button>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}
