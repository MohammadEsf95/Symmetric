package com.technotree.codeassessment.application.socialmedia.todo;

import com.technotree.codeassessment.application.socialmedia.todo.dto.ToDoDTO;
import com.technotree.codeassessment.application.socialmedia.todo.specification.ToDoCriteria;
import com.technotree.codeassessment.domain.socialmedia.todo.ToDo;

import java.util.List;
import java.util.Set;

public interface TodoService {
    void saveAllTodos(Set<ToDo> toDos);

    List<ToDoDTO> findAll(ToDoCriteria toDoCriteria);
}
