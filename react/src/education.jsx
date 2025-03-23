import { useState } from "react";
import { EducationInput } from "./components/educationInput";
// import "./styles/personal-info.css";

export function EducationApp({ education, setEducation }) {
  const [isEditing, setEditing] = useState(false);
  const [isAdding, setAdding] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState();

  function returnSelectedSchoolObject(selectedSchool) {
    return education.find(({ name }) => name === selectedSchool);
  }

  if (!isAdding && !isEditing) {
    return (
      <>
        <EducationSchoolInfos
          education={education}
          setEducation={setEducation}
          onClickAdd={() => setAdding(true)}
          onClickOpen={(education) => {
            setEditing(true);
            setSelectedSchool(education);
          }}
        />
      </>
    );
  } else if (isAdding) {
    return (
      <>
        <EducationInputForms
          education={""}
          setEducation={setEducation}
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
          setSchoolName={setEducation}
          degree={returnSelectedSchoolObject(selectedSchool).degree}
          setDegree={setEducation}
          startDate={returnSelectedSchoolObject(selectedSchool).startDate}
          setStartDate={setEducation}
          endDate={returnSelectedSchoolObject(selectedSchool).endDate}
          setEndDate={setEducation}
          location={returnSelectedSchoolObject(selectedSchool).location}
          setLocation={setEducation}
          onClose={() => setAdding(false)}
          onClick={() => setEditing(false)}
        />
      </>
    );
  }
}

function EducationSchoolInfos({ education, onClickAdd, onClickOpen }) {
  return (
    <div className="input-infos-layout">
      <div className="input-infos-container">
        <div className="input-infos-title">
          <h1>Education</h1>
        </div>
        <div className="input-infos-list">
          <ul>
            {education.map((school) => (
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
  degree,
  setDegree,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  location,
  setLocation,
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
          degree={degree}
          setDegree={setDegree}
          startDate={startDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          endDate={endDate}
          setLocation={setLocation}
          location={location}
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
