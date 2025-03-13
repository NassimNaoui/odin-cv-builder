import "../styles/delete-reload.css";

export function DeleteAndRelaod({ Clear, Reload }) {
  return (
    <div className="delete-reload-container">
      <div className="delete-container" onClick={Clear}>
        <div>
          <span className="material-symbols-outlined">delete</span>
        </div>
        <div>Clear Resume</div>
      </div>
      <div className="refresh-container" onClick={Reload}>
        <div>
          <span className="material-symbols-outlined">refresh</span>
        </div>
        <div>Load Example</div>
      </div>
    </div>
  );
}
