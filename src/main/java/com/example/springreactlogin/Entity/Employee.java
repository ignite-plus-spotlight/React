package com.example.springreactlogin.Entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.cassandra.core.mapping.Column;
import org.springframework.data.cassandra.core.mapping.Table;

@Table()
public class Employee {
    @Id
    @Column()
    private Integer emp_id;

//    @Size(min = 3,message = "Name should contain more than 3 characters")
//    @Column()
//    private String emp_role;

    @Column()
    private String emp_email;
    @Column()
    private String emp_password;
//    @Column()
//    private String emp_name;
    public Employee() {
    }

//    public Employee(Integer emp_id, String emp_role, String emp_email, String  emp_password, String emp_name) {
         public Employee(Integer emp_id,  String emp_email, String  emp_password) {
        this.emp_id = emp_id;
//        this.emp_role = emp_role;
        this.emp_email = emp_email;
        this.emp_password = emp_password;
//        this.emp_name = emp_name;
    }

    public Integer getEmpId() {
        return emp_id;
    }

    public void setEmpId(Integer emp_id) {
        this.emp_id = emp_id;
    }

//    public String getEmpRole() {
//        return emp_role;
//    }
//
//    public void setEmpRole(String emp_role) {
//        this.emp_role = emp_role;
//    }

    public String getEmpEmail() {
        return emp_email;
    }

    public void setEmpEmail(String emp_email) {
        this.emp_email = emp_email;
    }



    public String getEmpPassword() {
        return emp_password;
    }

    public void setEmpPassword(String emp_password) {
        this.emp_password = emp_password;
    }

//    public String getEmpName() {
//        return emp_name;
//    }
//
//    public void setEmpName(String emp_name) {
//        this.emp_name = emp_name;
//    }


//    @Override
//    public String toString() {
//        return "Employee{" +
//                "emp_id=" + emp_id +
//                ", emp_role='" + emp_role + '\'' +
//                ", emp_email='" + emp_email + '\'' +
//                ", emp_password='" + emp_password + '\'' +
//                ", emp_name=" + emp_name +
//                '}';
//    }
    @Override
    public String toString() {
        return "Employee{" +
                "emp_id=" + emp_id +
//                ", emp_role='" + emp_role + '\'' +
                ", emp_email='" + emp_email + '\'' +
                ", emp_password='" + emp_password + '\'' +
//                ", emp_name=" + emp_name +
                '}';
    }
}
