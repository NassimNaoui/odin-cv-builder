import { PersonalInfos } from "./personal-info";
import { DeleteAndRelaod } from "./components/deleteAndReload";
import { CvModel } from "./cv-model";
import { useState } from "react";
import { EducationApp } from "./education";
import { ExperienceApp } from "./experience";
import "./styles/App.css";

export default function App() {
  const handleChangeEditing = (state) => {
    return state ? setIsEditing(true) : setIsEditing(false);
  };

  const [fullName, setFullName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@thereal.com");
  const [phoneNumber, setPhoneNumber] = useState("+1 3245 5521 5521");
  const [address, setAddress] = useState("New York, USA");
  const [education, setEducation] = useState([
    {
      id: 1,
      name: "Harvard university",
      degree: "Master in computer science",
      startDate: "09/2016",
      endDate: "09/2018",
      location: "Cambridge",
    },
    {
      id: 2,
      name: "Massachusetts Institue of Technology",
      degree: "Bachelor in computer science",
      startDate: "09/2013",
      endDate: "09/2016",
      location: "Cambridge",
    },
  ]);

  const [educationBackUp, setEducationBackUp] = useState(education);

  const [experience, setexperience] = useState([
    {
      id: "1",
      company: "Google",
      job: "Software engineer",
      startDate: "09/2020",
      endDate: "Present",
      location: "New York",
      description:
        "Designs, develops, and maintains software applications, ensuring performance, scalability, and security. Works with modern technologies to build efficient solutions, collaborating with cross-functional teams to deliver high-quality products. Experienced in problem-solving, code optimization, and implementing best practices in software development.",
    },
    {
      id: "2",
      company: "Meta",
      job: "Jr software engineer",
      startDate: "09/2018",
      endDate: "09/2019",
      location: "New York",
      description:
        "Assists in designing, developing, and testing software applications under the guidance of senior engineers. Gains hands-on experience with modern technologies, collaborates with development teams, and contributes to code optimization and bug fixing. Eager to learn best practices in software engineering while building scalable and efficient solutions.",
    },
  ]);

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
    setexperience([]);
  };

  const reload = () => {
    setFullName("John Doe");
    setEmail("johndoe@thereal.com");
    setPhoneNumber("+1 3245 5521 5521");
    setAddress("New York, USA");
    setEducation([
      {
        id: 1,
        name: "Harvard university",
        degree: "Master",
        startDate: "09/2016",
        endDate: "09/2018",
        location: "Cambridge",
      },
      {
        id: 2,
        name: "Massachusetts Institue of Technology",
        degree: "Bachelor",
        startDate: "09/2013",
        endDate: "09/2016",
        location: "Cambridge",
      },
    ]);
    setexperience([
      {
        id: "1",
        company: "Google",
        job: "Software engineer",
        startDate: "09/2020",
        endDate: "Present",
        location: "New York",
        description:
          "Designs, develops, and maintains software applications, ensuring performance, scalability, and security. Works with modern technologies to build efficient solutions, collaborating with cross-functional teams to deliver high-quality products. Experienced in problem-solving, code optimization, and implementing best practices in software development.",
      },
      {
        id: "2",
        company: "Meta",
        job: "Jr software engineer",
        startDate: "09/2018",
        endDate: "09/2019",
        location: "New York",
        description:
          "Assists in designing, developing, and testing software applications under the guidance of senior engineers. Gains hands-on experience with modern technologies, collaborates with development teams, and contributes to code optimization and bug fixing. Eager to learn best practices in software engineering while building scalable and efficient solutions.",
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
          <ExperienceApp
            experience={experience}
            setexperience={setexperience}
          />
        </div>
        <CvModel
          fullName={fullName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
          schoolName={education.map((school) => (
            <div className="education-experience-field">
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
          experience={experience.map((job) => (
            <div className="education-experience-field">
              <div className="date-location">
                <div id="date">
                  {job.startDate} {job.endDate}
                </div>
                <div id="location">{job.location}</div>
              </div>
              <div className="jobs-infos">
                <div id="job-title">{job.job}</div>
                <div id="company">{job.company}</div>
                <div id="description">{job.description}</div>
                <div></div>
              </div>
            </div>
          ))}
        />
      </div>
    </>
  );
}
