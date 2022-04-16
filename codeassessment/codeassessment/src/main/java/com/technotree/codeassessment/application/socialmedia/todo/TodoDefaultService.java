package com.technotree.codeassessment.application.socialmedia.todo;

import com.technotree.codeassessment.application.socialmedia.todo.dto.ToDoDTO;
import com.technotree.codeassessment.application.socialmedia.todo.specification.ToDoCriteria;
import com.technotree.codeassessment.application.socialmedia.todo.specification.ToDoSpecification;
import com.technotree.codeassessment.domain.socialmedia.todo.ToDo;
import com.technotree.codeassessment.domain.socialmedia.todo.ToDoJpaRepository;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
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

    @Override
    public List<ToDoDTO> findAll(ToDoCriteria toDoCriteria) {
        Specification<ToDo> specification = Specification.where(new ToDoSpecification(toDoCriteria));
        return ToDoDTO.fromToDos(
                toDoJpaRepository.findAll(
                        specification
                )
        );
    }
}
