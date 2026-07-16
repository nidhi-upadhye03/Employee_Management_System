import React from "react";

function EmployeeList({
  employees,
  fetchEmployees,
  setEditingEmployee,
}) {

  const deleteEmployee = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/employee/deleteemployee/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete employee");
      }

      fetchEmployees();
    } catch (error) {
      console.error(error);
      alert("Unable to delete employee");
    }
  };

  return (
    <div className="employee-list-container">

      <h2 className="list-title">Employee List</h2>

      {employees.length === 0 ? (
        <p className="no-data">No Employees Found</p>
      ) : (
        <table className="employee-table">

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Salary</th>
              <th>Designation</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id}>

                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>₹ {emp.salary}</td>
                <td>{emp.designation}</td>

                <td>

                  <button
                    className="edit-btn"
                    onClick={() => setEditingEmployee(emp)}
                  >
                    ✏ Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteEmployee(emp.id)}
                  >
                    🗑 Delete
                  </button>

                </td>

              </tr>
            ))}
          </tbody>

        </table>
      )}

    </div>
  );
}

export default EmployeeList;