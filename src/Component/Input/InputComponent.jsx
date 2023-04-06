import React, { useEffect, useState } from "react";

function InputComponent({
  value,
  disabled,
  placeholder,
  onChange,
  label,
  type,
  name,
}) {
  return (
    <div className="relative">
      <input
        data-testid="input"
        value={value}
        onChange={onChange}
        autoComplete="off"
        id={name}
        name={name}
        type={type || "text"}
        className="peer bg-white placeholder-transparent h-10 w-full border-cyan-500 border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600"
        placeholder={placeholder}
        disabled={disabled}
      />
      <label
        htmlFor={name}
        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
}

export default React.memo(InputComponent);
