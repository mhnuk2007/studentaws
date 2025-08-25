package com.learning.studentaws.service;

import com.learning.studentaws.model.Student;
import com.learning.studentaws.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    @Autowired
    private StudentRepo repo;

    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    public Student createStudent(Student student) {
        return repo.save(student);
    }

    public Student getStudentById(Integer id) {
        return repo.findById(id).orElse(null);
    }

    public Student updateStudent(Integer id, Student studentDetails) {
        Student student = repo.findById(id).orElse(null);
        if (student != null) {
            student.setName(studentDetails.getName());
            student.setAge(studentDetails.getAge());
            // Add other fields as needed
            return repo.save(student);
        }
        return null;
    }

    public void deleteStudent(Integer id) {
        repo.deleteById(id);
    }
}
