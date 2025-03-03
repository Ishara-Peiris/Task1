import React from "react";
import './Sidebar.css'


export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li className="active">Interaction Management</li>
        <li>Complaint Handling</li>
        <li>Customer Management</li>
        <li>Notification Center</li>
        <li>Activity Log</li>
      </ul>
    </div>
  );
}
