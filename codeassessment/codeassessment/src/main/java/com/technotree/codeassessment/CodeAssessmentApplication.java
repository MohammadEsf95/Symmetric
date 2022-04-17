package com.technotree.codeassessment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
@EnableAspectJAutoProxy
public class CodeAssessmentApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodeAssessmentApplication.class, args);
	}

}
