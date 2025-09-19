import { FaAsterisk } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import "./InputField.css";
import { useState } from "react";

const InputField = ({ type, value, onChange, placeholder, name, error }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="input-group">
      <input
        // type={type}
        style={error ? { borderBottom: "1px solid #FF4000" } : {}}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        className="input-box"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required
      />

      <div
        className={type === "password" ? "password-field" : ""}
        style={{ display: isFocused || value ? "none" : "block" }}
      >
        <p htmlFor={name} className="input-label">
          <span>{placeholder}</span>
          <FaAsterisk color="#FF4000" size={7} className="asterisk" />
        </p>
        {type === "password" && (
          <AiOutlineEye size={20} color="#3e424a" className="eye-icon" />
        )}
      </div>
    </div>
  );
};

export default InputField;
