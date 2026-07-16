import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import { useState, useEffect } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/employee/getemployees"
      );

      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  return (
    <div className="container">
      
      <div>
    <h1 className="heading">
        Employee Management System
    </h1>

</div>

      <div className="content">

        <div className="left-panel">
          <EmployeeForm
            fetchEmployees={fetchEmployees}
            editingEmployee={editingEmployee}
            setEditingEmployee={setEditingEmployee}
          />
        </div>

        <div className="right-panel">
          <EmployeeList
            employees={employees}
            fetchEmployees={fetchEmployees}
            setEditingEmployee={setEditingEmployee}
          />
        </div>

      </div>

    </div>
  );
}

export default App;