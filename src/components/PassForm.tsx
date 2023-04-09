import React, { useState } from "react";
import generatePassword from "../utils/password-generator";
import { StrengthBar } from "./StrengthBar";

export default function PassForm() {
  const [options, setOptions] = useState({
    length: 0,
    includeUpper: false,
    includeLower: false,
    includeNumbers: false,
    includeSymbols: false,
  });
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    const checked = e.target.type === "checkbox" ? e.target.checked : value;
    setOptions({ ...options, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedPassword = generatePassword(
      options.length,
      options.includeUpper,
      options.includeLower,
      options.includeNumbers,
      options.includeSymbols
    );
    setPassword(generatedPassword);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Length:
          <input
            type="range"
            name="length"
            value={options.length}
            onChange={handleChange}
            min="0"
            max="25"
            step="1"
          />
          {options.length}
        </label>
        <label>
          <input
            type="checkbox"
            name="includeUpper"
            checked={options.includeUpper}
            onChange={handleChange}
          />
          Include uppercase letters
        </label>
        <label>
          <input
            type="checkbox"
            name="includeLower"
            checked={options.includeLower}
            onChange={handleChange}
          />
          Include lowercase letters
        </label>
        <label>
          <input
            type="checkbox"
            name="includeNumbers"
            checked={options.includeNumbers}
            onChange={handleChange}
          />
          Include numbers
        </label>
        <label>
          <input
            type="checkbox"
            name="includeSymbols"
            checked={options.includeSymbols}
            onChange={handleChange}
          />
          Include symbols
        </label>
        <StrengthBar {...options} />
        <button type="submit">Generate</button>
      </form>
      <p>Password: {password}</p>
    </div>
  );
}
