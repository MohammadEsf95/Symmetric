package com.technotree.codeassessment.application.util.actionresponse;

public class SuccessResponseDTO {
    private String message;

    public SuccessResponseDTO(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
