import React from "react";

const Button = ({ text, color, icon }) => {
  return (
    <button
      className={`px-5 py-3 rounded-lg flex flex-row gap-1.5 ${
        color == "Black" ? "bg-slate-900 text-white" : "bg-gray-100"
      }`}
    >
      {icon ? <i>{icon}</i> : ""}
      {text ? <span>{text}</span> : ""}
    </button>
  );
};

export default Button;
