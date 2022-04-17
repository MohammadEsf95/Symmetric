package com.technotree.codeassessment.infrastructure;

public enum ApplicationMessages {
    OPERATION_COMPLETED(0, "Operation completed successfully.");

    private final int index;
    private final String title;

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
