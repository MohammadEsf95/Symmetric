package com.technotree.codeassessment.application.socialmedia.todo;

import com.technotree.codeassessment.domain.socialmedia.todo.ToDo;
import com.technotree.codeassessment.domain.socialmedia.todo.ToDoJpaRepository;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class TodoDefaultService implements TodoService {

    private final ToDoJpaRepository toDoJpaRepository;

    public TodoDefaultService(ToDoJpaRepository toDoJpaRepository) {
        this.toDoJpaRepository = toDoJpaRepository;
    }

    @Override
    public void saveAllTodos(Set<ToDo> toDos) {
        toDoJpaRepository.saveAll(toDos);
    }
}
