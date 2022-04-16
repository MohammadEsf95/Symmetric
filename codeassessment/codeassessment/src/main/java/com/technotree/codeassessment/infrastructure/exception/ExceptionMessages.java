package com.technotree.codeassessment.infrastructure.exception;

public enum ExceptionMessages {
    SMS_SERVICE_PROVIDER(0, "SMS service provider API call failed."),
    USER_CREDENTIAL_NOT_FOUND(1, "UserCredential for requested username not found."),
    USER_ROLE_NOT_EXIST(2, "UserRole does'nt exist."),
    USER_NOT_VERIFIED_TO_SIGN_IN(3, "User is not verified to sign in."),
    VERIFICATION_CODE_IS_NOT_VALID(4, "Entered verification code is not valid."),
    INVALID_USER_CREDENTIAL_IN_SECURITY_CONTEXT(5, "Invalid UserCredential in security context."),
    USER_NOT_ACTIVE_OR_VERIFIED(6, "UserCredential is not active or verified."),
    VIOLATE_UNIQUENESS(7, "Violate uniqueness."),
    RECORD_NOT_FOUND(8, "Record not found."),
    FAILED_TO_ACTIVE_USER_CREDENTIAL(9, "Failed to activate UserCredential."),
    USER_CREDENTIAL_EXIST(10, "UserCredential exists."),
    WEAK_PASSWORD(11,"Weak password!");

    private int index;
    private String title;

    ExceptionMessages(int index, String title) {
        this.index = index;
        this.title = title;
    }

    public int getIndex() {
        return index;
    }

    public String getTitle() {
        return title;
    }


    @Override
    public String toString() {
        return "ExceptionMessages{" +
                "index=" + index +
                ", title='" + title + '\'' +
                '}';
    }
}
