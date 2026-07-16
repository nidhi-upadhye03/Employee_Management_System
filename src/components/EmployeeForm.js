import { useState, useEffect } from "react";

function EmployeeForm({
  fetchEmployees,
  editingEmployee,
  setEditingEmployee,
}) {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [designation, setDesignation] = useState("");
  const [message, setMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (editingEmployee) {
      setName(editingEmployee.name);
      setSalary(editingEmployee.salary);
      setDesignation(editingEmployee.designation);
    } else {
      setName("");
      setSalary("");
      setDesignation("");
    }
  }, [editingEmployee]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const employee = editingEmployee
      ? {
          id: editingEmployee.id,
          name,
          salary: Number(salary),
          designation,
        }
      : {
          name,
          salary: Number(salary),
          designation,
        };

    const url = editingEmployee
      ? "http://localhost:8080/employee/updateemployee"
      : "http://localhost:8080/employee/saveemployee";

    const method = editingEmployee ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(employee),
      });

      if (!response.ok) {
        throw new Error("Request Failed");
      }

      fetchEmployees();

      setMessage(
        editingEmployee
          ? "Employee updated successfully!"
          : "Employee added successfully!"
      );

      setShowDialog(true);

      setTimeout(() => {
        setShowDialog(false);
      }, 3000);

      setEditingEmployee(null);
      setName("");
      setSalary("");
      setDesignation("");
    } catch (error) {
      console.error(error);
      alert("Unable to save employee.");
    }
  };

  return (
    <>
      {showDialog && (
        <div className="dialog success">
          {message}
        </div>
      )}

      <h2>Employee Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
        />

        <button className="save-btn" type="submit">
          {editingEmployee ? "Update" : "Save"}
        </button>

      </form>
    </>
  );
}

export default EmployeeForm;