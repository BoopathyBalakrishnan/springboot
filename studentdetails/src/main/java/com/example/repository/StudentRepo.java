/**
 * 
 */
package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.model.StudentDetails;


/**
 * @author Boopathy_B
 *
 */
@Repository
public interface StudentRepo extends JpaRepository<StudentDetails, Long>{

}
