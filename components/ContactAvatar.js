import React from "react";

const colors = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

const extractInitials = (string) =>
  string
    .split(" ")
    .map((s) => s[0].toUpperCase())
    .join("")
    .substring(0, 2);

export default function ({ contact }) {
  return (
    <div
      className="profileContainer"
      style={{ backgroundColor: randomColor() }}
    >
      <div className="profileText">{extractInitials(contact.name)}</div>
    </div>
  );
}

// oscar
