package com.technotree.codeassessment.presentation.responseentity;

public enum ResponseEntityMessageAndCode {
    OK(200, "Operation completed successfully."),
    SERVICE_UN_AVAILABLE(503, "Operation failed to be completed.");

    private int code;
    private String title;

    ResponseEntityMessageAndCode(int code, String title) {
        this.code = code;
        this.title = title;
    }

    public int getCode() {
        return code;
    }

    public String getTitle() {
        return title;
    }

}
