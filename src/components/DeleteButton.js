import React from "react";

export default function DeleteButton({ onClick }) {
  return (
    <button className="danger" onClick={onClick}>
      Delete
    </button>
  );
}

