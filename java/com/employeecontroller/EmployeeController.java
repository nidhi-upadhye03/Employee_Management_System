package com.employeecontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employeeentity.Employee;
import com.employeeservice.EmployeeService;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "http://localhost:3000")
public class EmployeeController {
	
    public EmployeeController() {
        System.out.println("EmployeeController Loaded");
    }

	
	@Autowired
    private EmployeeService es;

    @PostMapping("/saveemployee")
    public Employee registerEmployee(@RequestBody Employee employee) {
        return es.registerEmployee(employee);
    }

    @GetMapping("/getemployees")
    public List<Employee> getEmployees() {
        return es.getEmployees();
    }

    @DeleteMapping("/deleteemployee/{id}")
    public void deleteEmployee(@PathVariable("id") Long id) {
        es.deleteEmployee(id);
    }
	
    @PutMapping("/updateemployee")
    public Employee updateEmployee(@RequestBody Employee employee) {
        return es.updateEmployee(employee);
    }
	    

}
