package com.employeeservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employeeentity.Employee;
import com.employeerepository.EmployeeRepository;
@Service
public class EmployeeService {
	@Autowired
    private EmployeeRepository er;

    // Create
    public Employee registerEmployee(Employee employee) {
        return er.save(employee);
    }

    // Read
    public List<Employee> getEmployees() {
        return (List<Employee>) er.findAll();
    }

    // Update
    public Employee updateEmployee(Employee employee) {
        return er.save(employee);
    }
    
    // Delete
    public void deleteEmployee(Long id) {
        er.deleteById(id);
    }
}
