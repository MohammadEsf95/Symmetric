package com.technotree.codeassessment.presentation.exceptionhandler;


import com.technotree.codeassessment.presentation.responseentity.ResponseEntityUtil;
import com.technotree.codeassessment.presentation.responseentity.response.ServiceUnavailableResponseEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(value = Exception.class)
    protected ResponseEntity<Object> handle(Exception ex) {
        return ResponseEntityUtil.generateAcceptedRequestResponseEntity(
                new ServiceUnavailableResponseEntity<ExceptionContent>(
                        new ExceptionContent(ex.getMessage())
                )
        );
    }
}
