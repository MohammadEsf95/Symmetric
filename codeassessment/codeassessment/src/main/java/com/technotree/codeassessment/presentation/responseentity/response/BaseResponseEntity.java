package com.technotree.codeassessment.presentation.responseentity.response;

import java.io.Serializable;

public abstract class BaseResponseEntity<T> implements Serializable {

    private String message;
    private int code;
    private T content;

    public BaseResponseEntity(String message, int code, T content) {
        this.message = message;
        this.code = code;
        this.content = content;
    }

    public String getMessage() {
        return message;
    }

    public int getCode() {
        return code;
    }

    public T getContent() {
        return content;
    }

    @Override
    public String toString() {
        return "BaseResponseEntity{" +
                "message='" + message + '\'' +
                ", code=" + code +
                ", content=" + content +
                '}';
    }
}
