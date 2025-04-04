import { useState } from "react";

import { Input } from "./components/input";
import { TextArea } from "./components/input";

export function ExperienceApp({
  experience,
  setexperience,
  experienceBackup,
  setexperienceBackup,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setAdding] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState();

  const upDateBackUp = (experience, setexperienceBackup) => {
    setexperienceBackup(experience);
  };

  const getBackup = (experienceBackup, setexperience) => {
    setexperience(experienceBackup);
  };

  const dropExperience = (index) => {
    setexperience((prev) => {
      const newExperience = [...prev.slice(0, index), ...prev.slice(index + 1)];
      return newExperience;
    });
  };

  const addExperience = () => {
    setexperience((prev) => {
      const newExperience = [...prev, { id: Date.now(), name: "", degree: "" }];
      return newExperience;
    });
  };

  if (!isEditing && !isAdding) {
    return (
      <>
        <CardExperience
          experience={experience}
          onClickOpen={(experience) => {
            setIsEditing(true);
            setSelectedCompany(experience);
          }}
          onClickAdd={() => {
            addExperience(), setAdding(true);
          }}
        />
      </>
    );
  } else if (isEditing) {
    return (
      <ExperienceInputForms
        experience={experience.find(({ id }) => id === selectedCompany)}
        setexperience={setexperience}
        onClickCancel={() => {
          getBackup(experienceBackup, setexperience), setIsEditing(false);
        }}
        onClickSave={() => {
          upDateBackUp(experience, setexperienceBackup), setIsEditing(false);
        }}
        onClickDelete={() => {
          dropExperience(
            experience.indexOf(
              experience.find((element) => element.id === selectedCompany)
            )
          ),
            setIsEditing(false);
        }}
      />
    );
  } else if (isAdding) {
    return (
      <ExperienceInputForms
        experience={experience[experience.length - 1]}
        setexperience={setexperience}
        onClickCancel={() => {
          getBackup(experienceBackup, setexperience),
            setIsEditing(false),
            setAdding(false);
        }}
        onClickDelete={() => {
          dropExperience(experience.length - 1),
            setIsEditing(false),
            setAdding(false);
        }}
        onClickSave={() => {
          upDateBackUp(experience, setexperienceBackup),
            setIsEditing(false),
            setAdding(false);
        }}
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

function ExperienceInputForms({
  experience,
  setexperience,
  onClickCancel,
  onClickSave,
  onClickDelete,
}) {
  return (
    <>
      <div className="input-infos-container">
        <div className="input-infos-title">
          <h1>Experience</h1>
        </div>
        <ReturnCompany experience={experience} setexperience={setexperience} />
        <ReturnJob experience={experience} setexperience={setexperience} />
        <ReturnStartDate
          experience={experience}
          setexperience={setexperience}
        />
        <ReturnEndDate experience={experience} setexperience={setexperience} />
        <ReturnLocation experience={experience} setexperience={setexperience} />
        <ReturnDescription
          experience={experience}
          setexperience={setexperience}
        />
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

function ReturnStartDate({ experience, setexperience }) {
  const handleChange = (id, value) => {
    setexperience((prevExperience) => {
      const update = prevExperience.map((experience) =>
        experience.id === id ? { ...experience, startDate: value } : experience
      );
      return update;
    });
  };

  return (
    <Input
      type="text"
      required
      label="Start date"
      placeholder="Enter Start date"
      value={experience?.startDate}
      onChange={(e) => {
        handleChange(experience?.id, e.target.value);
      }}
    />
  );
}

function ReturnEndDate({ experience, setexperience }) {
  const handleChange = (id, value) => {
    setexperience((prevExperience) => {
      const update = prevExperience.map((experience) =>
        experience.id === id ? { ...experience, endDate: value } : experience
      );
      return update;
    });
  };

  return (
    <Input
      type="text"
      required
      label="End date"
      placeholder="Enter End date"
      value={experience?.endDate}
      onChange={(e) => {
        handleChange(experience?.id, e.target.value);
      }}
    />
  );
}

function ReturnLocation({ experience, setexperience }) {
  const handleChange = (id, value) => {
    setexperience((prevExperience) => {
      const update = prevExperience.map((experience) =>
        experience.id === id ? { ...experience, location: value } : experience
      );
      return update;
    });
  };

  return (
    <Input
      type="text"
      required
      label="Location"
      placeholder="Enter Location"
      value={experience?.location}
      onChange={(e) => {
        handleChange(experience?.id, e.target.value);
      }}
    />
  );
}

function ReturnDescription({ experience, setexperience }) {
  const handleChange = (id, value) => {
    setexperience((prevExperience) => {
      const update = prevExperience.map((experience) =>
        experience.id === id
          ? { ...experience, description: value }
          : experience
      );
      return update;
    });
  };

  return (
    <TextArea
      label="Description"
      placeholder="Enter description"
      value={experience?.description}
      onChange={(e) => {
        handleChange(experience?.id, e.target.value);
      }}
    />
  );
}
