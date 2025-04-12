import axios from "axios";
import React, { useEffect, useState } from "react";

const ModalForm = ({ checkOpen, isClose, mode, client }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [rate, setRate] = useState("");
  const [isactive, setIsActive] = useState(true);

  const clientData = { name, email, job, rate: Number(rate), isactive };

  const handleCreate = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5050/api/clients",
        clientData
      );
      console.log("Client Added", response.data);
      isClose();
    } catch (error) {
      console.log("Error Adding Client", error);
    }
  };

  useEffect(() => {
    if (mode === "edit" && client) {
      setName(client.name);
      setEmail(client.email);
      setJob(client.job);
      setRate(client.rate);
      setIsActive(client.isactive);
    } else {
      setName("");
      setEmail("");
      setJob("");
      setRate("");
      setIsActive(false);
    }
  }, [mode, client]);

  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `http://localhost:5050/api/clients/${client.id}`,
        clientData
      );
      console.log("Client updated", res);
      isClose();
    } catch (error) {
      console.log("Error Updating Client", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === "add") {
      handleCreate();
    } else {
      handleUpdate();
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal" open={checkOpen}>
        <div className="modal-box text-center ">
          <form method="dialog" onSubmit={handleSubmit}>
            <div className="font-semibold">
              {mode === "add" ? <h1>Add Client</h1> : <h1>Update Client</h1>}
            </div>
            <label className="input my-2">
              <input
                type="text"
                className="grow "
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input my-2">
              <input
                type="email"
                className="grow"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="input my-2">
              <input
                type="text"
                className="grow"
                placeholder="Job"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </label>
            <label className="input my-2">
              <input
                type="number"
                className="grow"
                placeholder="Rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </label>
            <select
              value={isactive}
              className="select my-2"
              onChange={(e) => setIsActive(e.target.value === "true")}
            >
              <option disabled>User Status</option>
              <option value="true">Active</option>
              <option value="false">In active</option>
            </select>
            <div className="my-2">
              <button className="btn btn-primary" type="submit">
                {mode === "add" ? "Add Client" : "Update Client"}
              </button>
            </div>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={isClose}
            >
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ModalForm;
