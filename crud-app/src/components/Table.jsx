import React, { useEffect, useState } from "react";
import axios from "axios";

const Table = ({ handleOpen, searchedQ }) => {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5050/api/clients");
        setTableData(res.data);
      } catch (error) {
        setError("Error Loading Clients ", error);
      }
    };
    fetchData();
  }, [tableData]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this client?"
    );
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5050/api/clients/${id}`);
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  const filteredTable = tableData.filter((client) =>
    client.name.toLowerCase().includes(searchedQ.toLowerCase())
  );

  return (
    <div className="mt-15">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Job</th>
            <th>Rate</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTable.map((m) => (
            <tr className="hover:bg-base-300" key={m.id}>
              <th>{m.id}</th>
              <td>{m.name}</td>
              <td>{m.email}</td>
              <td>{m.job}</td>
              <td>{m.rate}</td>
              <td>
                {m.isactive ? (
                  <button className="btn btn-success">Active</button>
                ) : (
                  <button className="btn btn-warning">Inactive</button>
                )}
              </td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleOpen("edit", m)}
                >
                  Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(m.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {error && (
        <h3 className="text-red-400 mt-4 text-center font-bold">{error}</h3>
      )}
    </div>
  );
};

export default Table;
