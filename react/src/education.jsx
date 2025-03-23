import { useState } from "react";
import { EducationInput } from "./components/educationInput";
// import "./styles/personal-info.css";

export function EducationApp({
  schoolName,
  setSchoolName,
  //   degree,
  //   setDegree,
  //   startDate,
  //   setStartDate,
  //   endDate,
  //   setEndDate,
  //   location,
  //   setLocation,
}) {
  const [isEditing, setEditing] = useState(false);
  const [isAdding, setAdding] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState();

  function returnSelectedSchoolObject(selectedSchool) {
    return schoolName.find(({ name }) => name === selectedSchool);
  }

  if (!isAdding && !isEditing) {
    return (
      <>
        <EducationSchoolInfos
          schoolName={schoolName}
          setSchoolName={setSchoolName}
          onClickAdd={() => setAdding(true)}
          onClickOpen={(schoolName) => {
            setEditing(true);
            setSelectedSchool(schoolName);
          }}
        />
      </>
    );
  } else if (isAdding) {
    return (
      <>
        <EducationInputForms
          schoolName={""}
          setSchoolName={setSchoolName}
          //   degree={degree}
          //   setDegree={setDegree}
          //   startDate={startDate}
          //   setStartDate={setStartDate}
          //   endDate={endDate}
          //   setEndDate={setEndDate}
          //   location={location}
          //   setLocation={setLocation}
          //   onClose={() => setAdding(false)}
          onClick={() => setAdding(false)}
        />
      </>
    );
  } else if (isEditing) {
    return (
      <>
        <EducationInputForms
          schoolName={returnSelectedSchoolObject(selectedSchool).name}
          setSchoolName={setSchoolName}
          //   degree={degree}
          //   setDegree={setDegree}
          //   startDate={startDate}
          //   setStartDate={setStartDate}
          //   endDate={endDate}
          //   setEndDate={setEndDate}
          //   location={location}
          //   setLocation={setLocation}
          //   onClose={() => setAdding(false)}
          onClick={() => setEditing(false)}
        />
      </>
    );
  }
}

function EducationSchoolInfos({ schoolName, onClickAdd, onClickOpen }) {
  return (
    <div className="input-infos-layout">
      <div className="input-infos-container">
        <div className="input-infos-title">
          <h1>Education</h1>
        </div>
        <div className="input-infos-list">
          <ul>
            {schoolName.map((school) => (
              <li key={school.name} onClick={() => onClickOpen(school.name)}>
                {school.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="add-education-btn">
          <button onClick={onClickAdd}>+ Education</button>
        </div>
      </div>
    </div>
  );
}

function EducationInputForms({
  schoolName,
  setSchoolName,
  //   degree,
  //   setDegree,
  //   startDate,
  //   setStartDate,
  //   endDate,
  //   setEndDate,
  //   location,
  //   setLocation,
  onClick,
}) {
  return (
    <div className="input-infos-layout">
      <div className="input-infos-container">
        <div className="input-infos-title">
          <h1>Education</h1>
        </div>
        <EducationInput
          schoolName={schoolName}
          setSchoolName={setSchoolName}
          //   setDegree={setDegree}
          //   degree={degree}
          //   setStartDate={setStartDate}
          //   startDate={startDate}
          //   setEndDate={setEndDate}
          //   endDate={endDate}
          //   setLocation={setLocation}
          //   location={location}
        />
        <div className="education-btn-container">
          <button>Delete</button>
          <button onClick={onClick}>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}
