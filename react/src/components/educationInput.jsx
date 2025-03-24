import { Input } from "./input";
// import "./styles/personal-info.css";

export function EducationInput({ school, handleChange }) {
  return (
    <>
      <ReturnSchoolName school={school} handleChange={handleChange} />
      <ReturnDegree school={school} handleChange={handleChange} />
      <div className="date-container">
        <ReturnStartDate school={school} handleChange={handleChange} />
        <ReturnEndDate school={school} handleChange={handleChange} />
      </div>
      <ReturnLocation school={school} handleChange={handleChange} />
    </>
  );
}

function ReturnSchoolName({ school, handleChange }) {
  return (
    <Input
      type="text"
      required
      label="School"
      placeholder="Enter school / university"
      value={school?.name}
      onChange={(e) => {
        handleChange(school?.id, "name", e.target.value);
      }}
    />
  );
}

function ReturnDegree({ school, handleChange }) {
  return (
    <Input
      type="text"
      required
      label="Degree"
      placeholder="Enter degree / field of study"
      value={school?.degree}
      onChange={(e) => {
        handleChange(school?.id, "degree", e.target.value);
      }}
    />
  );
}

function ReturnStartDate({ school, handleChange }) {
  return (
    <Input
      type="text"
      required
      label="Start Date"
      placeholder="Enter Start date"
      value={school?.startDate}
      onChange={(e) => {
        handleChange(school?.id, "startDate", e.target.value);
      }}
    />
  );
}

function ReturnEndDate({ school, handleChange }) {
  return (
    <Input
      type="text"
      required
      label="End Date"
      placeholder="Enter End date"
      value={school?.endDate}
      onChange={(e) => {
        handleChange(school?.id, "endDate", e.target.value);
      }}
    />
  );
}

function ReturnLocation({ school, handleChange }) {
  return (
    <Input
      type="text"
      required
      label="Location"
      placeholder="Enter Location"
      value={school?.location}
      onChange={(e) => {
        handleChange(school?.id, "location", e.target.value);
      }}
    />
  );
}
