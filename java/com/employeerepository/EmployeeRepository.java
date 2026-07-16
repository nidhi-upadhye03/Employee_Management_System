package com.employeerepository;

import org.springframework.data.repository.CrudRepository;

import com.employeeentity.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {
	 

}
