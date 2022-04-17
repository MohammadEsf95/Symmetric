package com.technotree.codeassessment.application.socialmedia.todo.dto;

import com.technotree.codeassessment.domain.socialmedia.todo.ToDo;

import java.util.List;
import java.util.stream.Collectors;

public class ToDoDTO {
    private int id;
    private int userId;
    private String title;
    private boolean completed;

    public ToDoDTO(int id, int userId, String title, boolean completed) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.completed = completed;
    }

    public ToDoDTO() {
    }

    public int getId() {
        return id;
    }

    public int getUserId() {
        return userId;
    }

    public String getTitle() {
        return title;
    }

    public boolean isCompleted() {
        return completed;
    }

    public static List<ToDoDTO> fromToDos(List<ToDo> toDos) {
        return toDos.stream()
                .map(ToDoDTO::fromToDo)
                .collect(Collectors.toList());
    }

    public static ToDoDTO fromToDo(ToDo toDo) {
        return new ToDoDTO(
                toDo.getId(),
                toDo.getUserId(),
                toDo.getTitle(),
                toDo.getCompleted()
        );
    }
}
