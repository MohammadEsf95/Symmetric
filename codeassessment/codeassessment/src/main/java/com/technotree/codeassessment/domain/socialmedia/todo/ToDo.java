package com.technotree.codeassessment.domain.socialmedia.todo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "todos")
public class ToDo {

    @Id
    private Integer id;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "title")
    private String title;

    @Column(name = "completed")
    private Boolean completed;

    public ToDo() {
    }

    public ToDo(Integer id, Integer userId, String title, Boolean completed) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.completed = completed;
    }

    public Integer getId() {
        return id;
    }

    public Integer getUserId() {
        return userId;
    }

    public String getTitle() {
        return title;
    }

    public Boolean getCompleted() {
        return completed;
    }

    @Override
    public String toString() {
        return "ToDo{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", completed=" + completed +
                '}';
    }
}
