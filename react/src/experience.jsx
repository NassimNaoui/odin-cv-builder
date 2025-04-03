import { useState } from "react";

import { Input } from "./components/input";

export function ExperienceApp({ experience, setexperience }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setAdding] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState();

  if (!isEditing && !isAdding) {
    return (
      <>
        <CardExperience
          experience={experience}
          onClickOpen={(experience) => {
            setIsEditing(true);
            setSelectedCompany(experience);
          }}
        />
      </>
    );
  } else if (isEditing) {
    console.log(experience.find(({ id }) => id === selectedCompany));
    return (
      <ExperienceInputForms
        experience={experience.find(({ id }) => id === selectedCompany)}
        setexperience={setexperience}
      />
    );
  }
}

function CardExperience({ experience, onClickOpen, onClickAdd }) {
  return (
    <div className="input-infos-layout">
      <div className="input-infos-container">
        <div className="input-infos-title">
          <h1>Experience</h1>
        </div>
        <div className="input-infos-list">
          <ul>
            {experience.map((job) => (
              <li key={job.id} onClick={() => onClickOpen(job.id)}>
                {job.company}
              </li>
            ))}
          </ul>
        </div>
        <div className="add-education-btn">
          <button onClick={onClickAdd}>+ Experience</button>
        </div>
      </div>
    </div>
  );
}

function ExperienceInputForms({ experience, setexperience }) {
  return (
    <>
      <ReturnCompany experience={experience} setexperience={setexperience} />
      <ReturnJob experience={experience} setexperience={setexperience} />
    </>
  );
}

function ReturnCompany({ experience, setexperience }) {
  const handleChange = (id, value) => {
    setexperience((prevExperience) => {
      const update = prevExperience.map((experience) =>
        experience.id === id ? { ...experience, company: value } : experience
      );
      return update;
    });
  };

  return (
    <Input
      type="text"
      required
      label="Company"
      placeholder="Enter company"
      value={experience?.company}
      onChange={(e) => {
        handleChange(experience?.id, e.target.value);
      }}
    />
  );
}

function ReturnJob({ experience, setexperience }) {
  const handleChange = (id, value) => {
    setexperience((prevExperience) => {
      const update = prevExperience.map((experience) =>
        experience.id === id ? { ...experience, job: value } : experience
      );
      return update;
    });
  };

  return (
    <Input
      type="text"
      required
      label="Job title"
      placeholder="Enter Job title"
      value={experience?.job}
      onChange={(e) => {
        handleChange(experience?.id, e.target.value);
      }}
    />
  );
}
