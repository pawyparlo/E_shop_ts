import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
}

export const Input = ({ label, placeholder }: InputProps) => {
  return (
    <>
      <div className="form-outline">
        <input
          type="text"
          id="formText"
          className="form-control"
          aria-describedby="text"
          placeholder={placeholder}
        />
      </div>
      <div id="formDescription" className="form-text">
        <span>{label}</span>
      </div>
    </>
  );
};
