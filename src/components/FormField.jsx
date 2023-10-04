import PropTypes from "prop-types";

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

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormField;