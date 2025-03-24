import { useState } from "react";
import { EducationInput } from "./components/educationInput";
// import "./styles/personal-info.css";

export function EducationApp({ education, handleChange, addSchool }) {
  const [isEditing, setEditing] = useState(false);
  const [isAdding, setAdding] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState();

  console.log(isAdding);

  if (!isAdding && !isEditing) {
    return (
      <>
        <EducationSchoolInfos
          education={education}
          handleChange={handleChange}
          onClickAdd={() => {
            console.log("addSchool est appelé !");
            addSchool();
            setAdding(true);
            console.log(education);
          }}
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
          handleChange={handleChange}
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
          school={education.find(({ id }) => id === selectedSchool)}
          handleChange={handleChange}
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
              <li key={school.id} onClick={() => onClickOpen(school.id)}>
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

function EducationInputForms({ school, handleChange, onClick }) {
  return (
    <div className="input-infos-layout">
      <div className="input-infos-container">
        <div className="input-infos-title">
          <h1>Education</h1>
        </div>
        <EducationInput school={school} handleChange={handleChange} />
        <div className="education-btn-container">
          <button>Delete</button>
          <button onClick={onClick}>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}
