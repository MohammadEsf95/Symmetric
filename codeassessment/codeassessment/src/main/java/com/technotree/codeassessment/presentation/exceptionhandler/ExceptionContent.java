package com.technotree.codeassessment.presentation.exceptionhandler;

import java.io.Serializable;

public class ExceptionContent implements Serializable {

    private String message;

    public ExceptionContent(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    @Override
    public String toString() {
        return "ExceptionContent{" +
                "message='" + message + '\'' +
                '}';
    }
}
