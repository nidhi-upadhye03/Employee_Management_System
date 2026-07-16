package com.mallmanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.persistence.autoconfigure.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(
	scanBasePackages = {
        "com.employeecontroller",
        "com.employeeentity",
        "com.employeerepository",
        "com.employeeservice",
        "com.mallmanagement"
    }
)
@EnableJpaRepositories("com.employeerepository")
@EntityScan("com.employeeentity")
public class MallmanagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(MallmanagementApplication.class, args);
	}

}
