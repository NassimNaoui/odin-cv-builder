import { Input } from "./input";
// import "./styles/personal-info.css";

export function EducationInput({
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
    <>
      <ReturnSchoolName schoolName={schoolName} setSchoolName={setSchoolName} />
      <ReturnDegree degree={degree} setDegree={setDegree} />
      <div className="date-container">
        <ReturnStartDate startdate={startDate} setStartDate={setStartDate} />
        <ReturnEndDate endDate={endDate} setEndDate={setEndDate} />
      </div>
      <ReturnLocation location={location} setLocation={setLocation} />
    </>
  );
}

function ReturnSchoolName({ schoolName, setSchoolName }) {
  const handleSchoolChange = (e) => {
    setSchoolName(e.target.value);
  };

  // function ReturnSchoolName({ education, setEducation, name }) {
  //     const handleSchoolChange = (e) => {
  //         setEducation({...education, name : e.target.value})
  //     }
  //   };

  return (
    <Input
      type="text"
      required
      label="School"
      placeholder="Enter school / university"
      value={schoolName}
      onChange={handleSchoolChange}
    />
  );
}

function ReturnDegree({ degree, setDegree }) {
  const handleDegre = (e) => {
    setDegree(e.target.value);
  };

  return (
    <Input
      type="text"
      required
      label="Degree"
      placeholder="Enter degree / field of study"
      value={degree}
      onChange={handleDegre}
    />
  );
}

function ReturnStartDate({ startdate, setStartDate }) {
  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };

  return (
    <Input
      type="text"
      required
      label="Start Date"
      placeholder="Enter Start date"
      value={startdate}
      onChange={handleStartDate}
    />
  );
}

function ReturnEndDate({ endDate, setEndDate }) {
  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <Input
      type="text"
      required
      label="End Date"
      placeholder="Enter End date"
      value={endDate}
      onChange={handleEndDate}
    />
  );
}

function ReturnLocation({ location, setLocation }) {
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  return (
    <Input
      type="text"
      required
      label="Location"
      placeholder="Enter Location"
      value={location}
      onChange={handleLocation}
    />
  );
}
