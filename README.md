# Employee Management System

## 📌 Overview

The **Employee Management System** is a full-stack web application that allows users to manage employee records efficiently. It provides CRUD (Create, Read, Update, Delete) operations through a React frontend, a Spring Boot REST API backend, and a PostgreSQL database.

---

## 🚀 Features

* ➕ Add a new employee
* 📋 View all employees
* ✏️ Update employee details
* 🗑️ Delete employee records
* 🔄 Real-time communication between frontend and backend using REST APIs
* 💾 Persistent data storage using PostgreSQL

---

## 🛠️ Tech Stack

### Frontend

* React.js
* HTML5
* CSS3
* JavaScript
* Fetch API

### Backend

* Spring Boot
* Spring Data JPA
* Hibernate
* REST APIs
* Maven

### Database

* PostgreSQL

### Tools

* IntelliJ IDEA / Eclipse
* VS Code
* pgAdmin
* Postman
* Git & GitHub

---

## 🏗️ Project Architecture

```text
React Frontend
       │
       ▼
Spring Boot REST API
       │
       ▼
Service Layer
       │
       ▼
Repository (JPA)
       │
       ▼
Hibernate ORM
       │
       ▼
PostgreSQL Database
```

---

## 📂 Project Structure

```text
Backend
│
├── controller
│     └── EmployeeController.java
│
├── service
│     └── EmployeeService.java
│
├── repository
│     └── EmployeeRepository.java
│
├── entity
│     └── Employee.java
│
└── application.properties
```

---

## ⚙️ Backend Technologies Used

* Spring Boot for REST API development
* Spring Data JPA for database operations
* Hibernate as the ORM framework
* PostgreSQL for data storage
* Dependency Injection using `@Autowired`
* Layered Architecture (Controller → Service → Repository)

---

## 📡 REST API Endpoints

| Method | Endpoint                        | Description            |
| ------ | ------------------------------- | ---------------------- |
| POST   | `/employee/saveemployee`        | Add a new employee     |
| GET    | `/employee/getemployees`        | Retrieve all employees |
| PUT    | `/employee/updateemployee`      | Update an employee     |
| DELETE | `/employee/deleteemployee/{id}` | Delete an employee     |

---

## 🗄️ Database Configuration

Example `application.properties`:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/Employee
spring.datasource.username=your_username
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=create
spring.jpa.show-sql=true

server.port=8089
```

---

## ▶️ How to Run the Project

### Backend

1. Clone the repository.
2. Open the Spring Boot project in IntelliJ IDEA or Eclipse.
3. Configure PostgreSQL and update `application.properties`.
4. Run the Spring Boot application.

### Frontend

```bash
npm install
npm start
```

The React application will run at:

```
http://localhost:3000
```

The Spring Boot backend will run at:

```
http://localhost:8089
```

---

## 🔄 Application Workflow

1. User enters employee details in the React application.
2. React sends an HTTP request to the Spring Boot REST API.
3. The Controller receives the request.
4. The Service processes the business logic.
5. The Repository communicates with the database using JPA.
6. Hibernate generates SQL queries automatically.
7. PostgreSQL stores or retrieves the data.
8. The response is sent back to the React application.

---

## 🎯 Learning Outcomes

* Developed RESTful APIs using Spring Boot.
* Implemented CRUD operations with Spring Data JPA.
* Connected a React frontend with a Spring Boot backend.
* Integrated PostgreSQL using Hibernate ORM.
* Applied layered architecture for better maintainability.
* Tested APIs using Postman.

---

## 📸 Screenshots

> Add screenshots of:
>
> * Home Page
> * Add Employee Form
> * Employee List
> * Update Employee
> * Delete Employee

---

## 👩‍💻 Author

**Nidhi**
Final Year B.E. Computer Science (AI & ML)

---

## 📄 License

This project is created for learning and academic purposes.
