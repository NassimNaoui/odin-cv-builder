import "./styles/cv-model.css";

export function CvModel({ fullName, email, phoneNumber, address }) {
  return (
    <div className="cv-container">
      <div className="cv-header">
        <h1>{fullName}</h1>
        <div className="personal-infos-container">
          <div className="mail-container">
            <ul>
              <li>
                <span className="material-symbols-outlined">mail</span>
              </li>
              <li>{email}</li>
            </ul>
          </div>
          <div className="phone-number-container">
            <ul>
              <li>
                <span class="material-symbols-outlined">smartphone</span>
              </li>
              <li>{phoneNumber}</li>
            </ul>
          </div>
          <div className="address-container">
            <ul>
              <li>
                <span class="material-symbols-outlined">location_on</span>
              </li>
              <li>{address}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="cv-body"></div>
    </div>
  );
}
