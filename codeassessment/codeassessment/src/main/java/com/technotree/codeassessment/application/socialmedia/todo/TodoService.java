package com.technotree.codeassessment.application.socialmedia.todo;

import com.technotree.codeassessment.domain.socialmedia.todo.ToDo;

import java.util.Set;

public interface TodoService {
    void saveAllTodos(Set<ToDo> toDos);
}
