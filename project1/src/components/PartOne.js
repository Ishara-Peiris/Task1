import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Button from "./Button";

export default function PartOne() {
  const [formData, setFormData] = useState({
    interactionId: "INT0001",
    interactionMode: "Call",
    name: "",
    phoneNumber: "+61",
    purpose: "New Inquiry",
    typeOfInquiry: "New Booking",
    description: "",
    status: "Escalate",
    escalateTo: "Call Center SL",
    staffName: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(name === "purpose" && value !== "New Inquiry" ? { typeOfInquiry: "" } : {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <h2 className="mb-4">Manage Interaction</h2>

        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Interaction ID</label>
              <input type="text" name="interactionId" className="form-control" value={formData.interactionId} readOnly />
            </div>

            <div className="col-md-6">
              <label className="form-label">Interaction Mode</label>
              <select name="interactionMode" className="form-select" value={formData.interactionMode} onChange={handleChange}>
                <option>Call</option>
                <option>SMS</option>
                <option>Email</option>
                <option>WhatsApp</option>
                <option>Verbally</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input type="text" name="phoneNumber" className="form-control" value={formData.phoneNumber} onChange={handleChange} />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6">
              <label className="form-label">Purpose</label>
              <select name="purpose" className="form-select" value={formData.purpose} onChange={handleChange}>
                <option>New Inquiry</option>
                <option>Existing Inquiry</option>
                <option>Complaint</option>
                <option>Other</option>
              </select>
            </div>
            {formData.purpose === "New Inquiry" && (
              <div className="col-md-6">
                <label className="form-label">Type Of Inquiry</label>
                <select name="typeOfInquiry" className="form-select" value={formData.typeOfInquiry} onChange={handleChange}>
                  <option>New Booking</option>
                  <option>Follow-up</option>
                  <option>Cancellation</option>
                </select>
              </div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea name="description" className="form-control" rows="2" value={formData.description} onChange={handleChange}></textarea>
          </div>

          <div className="row mb-3">
            <div className="col-md-4">
              <label className="form-label">Status</label>
              <select name="status" className="form-select" value={formData.status} onChange={handleChange}>
                <option>Resolved</option>
                <option>In-Progress</option>
                <option>Escalate</option>
              </select>
            </div>

            {formData.status === "Escalate" && (
              <>
                <div className="col-md-4">
                  <label className="form-label">Escalate To</label>
                  <select name="escalateTo" className="form-select" value={formData.escalateTo} onChange={handleChange}>
                    <option>Call Center SL</option>
                    <option>Manager</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label">Staff Name</label>
                  <input type="text" name="staffName" className="form-control" value={formData.staffName} onChange={handleChange} />
                </div>
              </>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Comment</label>
            <textarea name="comment" className="form-control" rows="2" value={formData.comment} onChange={handleChange}></textarea>
          </div>
          <Button text="Submit" onClick={handleSubmit}/>

        </form>
      </div>
    </div>
  );
}
