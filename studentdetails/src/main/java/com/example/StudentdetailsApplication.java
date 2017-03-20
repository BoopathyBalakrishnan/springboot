package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableAutoConfiguration
@ComponentScan
@EnableSwagger2
public class StudentdetailsApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudentdetailsApplication.class, args);
	}
}
