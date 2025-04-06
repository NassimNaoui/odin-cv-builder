import { useState } from "react";
import { EducationInput } from "./components/educationInput";
// import "./styles/personal-info.css";

export function EducationApp({
  education,
  handleChange,
  addSchool,
  dropSchool,
  upDateBackUp,
  getBackup,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setAdding] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState();
  const [isOpen, setisOpen] = useState(false);

  if (!isAdding && !isEditing) {
    return (
      <>
        <EducationSchoolInfos
          education={education}
          handleChange={handleChange}
          onClickAdd={() => {
            addSchool(), setAdding(true);
          }}
          onClickOpen={(education) => {
            setIsEditing(true);
            setSelectedSchool(education);
          }}
          // isOpen={isOpen}
          // onClickRotate={setisOpen(true)}
        />
      </>
    );
  } else if (isAdding) {
    return (
      <>
        <EducationInputForms
          school={education[education.length - 1]}
          handleChange={handleChange}
          onClickCancel={() => {
            getBackup(), setIsEditing(false), setAdding(false);
          }}
          onClickDelete={() => {
            dropSchool(education.length - 1),
              setIsEditing(false),
              setAdding(false);
          }}
          onClickSave={() => {
            upDateBackUp(), setIsEditing(false), setAdding(false);
          }}
        />
      </>
    );
  } else if (isEditing) {
    return (
      <>
        <EducationInputForms
          school={education.find(({ id }) => id === selectedSchool)}
          handleChange={handleChange}
          onClickCancel={() => {
            getBackup(), setIsEditing(false);
          }}
          onClickDelete={() => {
            dropSchool(
              education.indexOf(
                education.find((element) => element.id === selectedSchool)
              )
            ),
              setIsEditing(false);
          }}
          onClickSave={() => {
            upDateBackUp(), setIsEditing(false);
          }}
        />
      </>
    );
  }
}

function EducationSchoolInfos({ education, onClickAdd, onClickOpen }) {
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
  };

  console.log(animate);

  return (
    <div className="input-infos-layout">
      <div className="input-infos-container">
        <div className="input-infos-title">
          <h1>Education</h1>
          <button onclick={handleClick}>
            <span class={"material-symbols-outlined"}>keyboard_arrow_down</span>
          </button>
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

function EducationInputForms({
  school,
  handleChange,
  onClickCancel,
  onClickDelete,
  onClickSave,
}) {
  return (
    <div className="input-infos-layout">
      <div className="input-infos-container">
        <div className="input-infos-title">
          <h1>Education</h1>
        </div>
        <EducationInput school={school} handleChange={handleChange} />
        <div className="education-btn-container">
          <div className="delete-action">
            <span class="material-symbols-outlined">delete</span>
            <button onClick={onClickDelete}>Delete</button>
          </div>
          <div className="cancel-action">
            <span class="material-symbols-outlined">close</span>
            <button onClick={onClickCancel}>Cancel</button>
          </div>
          <div className="save-action">
            <span class="material-symbols-outlined">save</span>
            <button onClick={onClickSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
