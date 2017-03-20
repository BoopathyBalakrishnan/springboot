/**
 * 
 */
package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.StudentDetails;
import com.example.repository.StudentRepo;

/**
 * @author Boopathy_B
 *
 */

@Service
public class StudentServiceImpl implements StudentService {

	
	@Autowired
	StudentRepo studentRepo;
	
	@Override
	public List<StudentDetails> findAll() {

		return studentRepo.findAll();
	}

}
