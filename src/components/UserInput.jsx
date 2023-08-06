export default function UserInput({
  id,
  type,
  value,
  setValue,
  handleChange,
  children
}) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{children}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          if (handleChange) {
            handleChange(e);
          }
        }}
      />
    </div>
  );
}
