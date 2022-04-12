package com.technotree.codeassessment.presentation.responseentity.response;


import com.technotree.codeassessment.presentation.responseentity.ResponseEntityMessageAndCode;

public class ServiceUnavailableResponseEntity<T> extends BaseResponseEntity<T> {

    public ServiceUnavailableResponseEntity(T content) {
        super(
                ResponseEntityMessageAndCode.SERVICE_UN_AVAILABLE.getTitle(),
                ResponseEntityMessageAndCode.SERVICE_UN_AVAILABLE.getCode(),
                content
        );
    }
}
