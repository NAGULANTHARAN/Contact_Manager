import React from "react";

export function ContactList({ contacts, onEdit, onDelete }) {
  return (
    <ul>
      {contacts.map((c) => (
        <li key={c._id}>
          <span>{c.name} - {c.email} - {c.phone}</span>
          <div className="action-buttons">
            <button onClick={() => onEdit(c)}>Edit</button>
            <button onClick={() => onDelete(c._id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
