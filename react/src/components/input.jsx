import "../styles/input-style.css";

export function Input({
  type,
  required,
  pattern,
  label,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="subform-container">
      <h4 className={`title-${label}`}>{label}</h4>
      <input
        type={type}
        required={required}
        pattern={pattern}
        className={`input-form-${label}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
