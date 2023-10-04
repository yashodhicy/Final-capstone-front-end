import React from "react";

const FormField = ({ name, value, onChange, type, placeholder }) => {
  return (
    <div className="mb-3">
      <label htmlFor={`house${name}`} className="form-label">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="form-control"
          id={`house${name}`}
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

export default FormField;