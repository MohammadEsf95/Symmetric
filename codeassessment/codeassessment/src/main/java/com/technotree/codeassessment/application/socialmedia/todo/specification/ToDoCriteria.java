package com.technotree.codeassessment.application.socialmedia.todo.specification;

public class ToDoCriteria {

    private Integer userId;
    private Boolean completed;

    public ToDoCriteria(Integer userId, Boolean completed) {
        this.userId = userId;
        this.completed = completed;
    }

    public Integer getUserId() {
        return userId;
    }

    public Boolean getCompleted() {
        return completed;
    }
}
