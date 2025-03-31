export function ExperienceApp({ experience, setexperience }) {
  console.log(experience);
  return (
    <>
      <CardExperience experience={experience} />
    </>
  );
}

function CardExperience({ experience, onClickOpen, onClickAdd }) {
  console.log(`card : ${experience}`);
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
