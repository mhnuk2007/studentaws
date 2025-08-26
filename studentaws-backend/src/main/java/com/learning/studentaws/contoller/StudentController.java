package com.learning.studentaws.contoller;

import com.learning.studentaws.model.Student;
import com.learning.studentaws.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://studentaws-frontend-bucket.s3-website-us-east-1.amazonaws.com")
public class StudentController {

    @Autowired
    private StudentService service;

    @GetMapping("/")
    public String home(){
        return "Welcome to Student Management System";
    }

    @GetMapping("/students")
    public List<Student> students(){
        return service.getAllStudents();
    }

    @PostMapping("/students")
    public Student createStudent(@RequestBody Student student) {
        return service.createStudent(student);
    }

    @GetMapping("/students/{id}")
    public Student getStudentById(@PathVariable Integer id) {
        return service.getStudentById(id);
    }

    @PutMapping("/students/{id}")
    public Student updateStudent(@PathVariable Integer id, @RequestBody Student student) {
        return service.updateStudent(id, student);
    }

    @DeleteMapping("/students/{id}")
    public void deleteStudent(@PathVariable Integer id) {
        service.deleteStudent(id);
    }
}
