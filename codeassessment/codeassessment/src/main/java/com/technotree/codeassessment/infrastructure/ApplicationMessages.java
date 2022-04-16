package com.technotree.codeassessment.infrastructure;

public enum ApplicationMessages {
    OPERATION_COMPLETED(0, "Operation completed successfully."),
    SIGN_UP_VERIFICATION_SUCCESS(1,"Sign up verification!"),
    DUPLICATE_CITY_NAME(2,"Duplicate city name."),
    DUPLICATE_PROVINCE_NAME(3,"Duplicate province name."),
    DUPLICATE_FIELD(4,"Duplicate field."),
    USERNAME_EXIST(5,"Username exists!"),
    DUPLICATE_GRADE(6,"Duplicate grade."),
    PASSWORD_DO_NOT_MATCH(7,"Passwords don't match!"),
    USER_NOT_FOUND(8,"User with username - %s, not found");

    private int index;
    private String title;

    ApplicationMessages(int index, String title) {
        this.index = index;
        this.title = title;
    }

    public int getIndex() {
        return index;
    }

    public String getTitle() {
        return title;
    }

}
