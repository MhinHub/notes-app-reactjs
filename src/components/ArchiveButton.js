import React from "react";

export default function ArchiveButton({ archived, onClick }) {
  return (
    <button className="warning" onClick={onClick}>
      {archived ? "Pindahkan" : "Arsipkan"}
    </button>
  );
}

