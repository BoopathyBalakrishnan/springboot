/**
 * 
 */
package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.StudentDetails;
import com.example.service.StudentService;

/**
 * @author Boopathy_B
 *
 */

@RestController
public class StudentController {

	@Autowired
	StudentService studentService;

	@GetMapping
	public ResponseEntity<?> testService() {

		List<StudentDetails> users = studentService.findAll();

		if (users == null) {
			ResponseMessage message = new ResponseMessage();
			message.setResponseCode("student.fetch.failed");
			message.setResponseMessage("No details found");

			return new ResponseEntity<>(message, HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<StudentDetails>>(users, HttpStatus.OK);

	}

}
