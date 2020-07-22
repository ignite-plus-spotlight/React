package com.example.springreactlogin.Repository;

import com.example.springreactlogin.Entity.Employee;
import org.springframework.data.cassandra.repository.CassandraRepository;

public interface EmployeeRepo extends CassandraRepository<Employee, Integer> {
        Employee save(Employee emp);
}
