package com.example.springreactlogin.controller;

import com.example.springreactlogin.Entity.Employee;
import com.example.springreactlogin.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rest")
@CrossOrigin(origins = "*")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/")
    public String helloController(){
        return "Hey the Application is running on port 8050";
    }


    @GetMapping("/employee")
    public List<Employee> getAllEmployee() {

        return employeeService.getAllEmployee();
    }


    @GetMapping(value = "/employee/{id}")
    public Employee getEmployeeById(@PathVariable("id") int id) {
        return employeeService.getEmployeeById(id);
    }


    @PostMapping(value = "/employee")
    public Employee createEmployee( @RequestBody Employee emp) {

//        return employeeService.createEmployee(emp);
         employeeService.createEmployee(emp);
         return emp;

    }


    @PutMapping(value = "/employee/{id}")
    public Employee UpdateEmployeeById(@PathVariable("id") int id, @RequestBody Employee emp) {
        return employeeService.updateEmployeeById(id,emp);
    }


    @DeleteMapping(value = "/employee/{id}")
    public String deleteEmployeeById(@PathVariable("id") int id) {
        employeeService.deleteEmployeeById(id);
        return "Employee with id " + id + " has been deleted!";
    }
}
