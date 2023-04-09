import React from "react";

function CheckboxComponent({ title, value, onChange }) {
  return (
    <div className="flex">
      <input
        onClick={onChange}
        value={value}
        type="checkbox"
        id="choose-me"
        className="peer hidden"
      />
      <label
        htmlFor="choose-me"
        className="select-none cursor-pointer rounded-lg border-2 border-gray-200 py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out peer-checked:bg-cyan-500 peer-checked:text-white peer-checked:border-none "
      >
        {title}
      </label>
    </div>
  );
}

export default CheckboxComponent;
