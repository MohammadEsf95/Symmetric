package com.technotree.codeassessment.infrastructure.config;

import com.technotree.codeassessment.application.socialmedia.todo.TodoService;
import com.technotree.codeassessment.domain.socialmedia.todo.ToDo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Set;

@Component
@Order(3)
public class RetrieveToDos implements CommandLineRunner  {

    @Value("${todos.path}")
    private String todosUrl;

    private static final Logger logger = LoggerFactory.getLogger(RetrievePosts.class);

    private final TodoService todoService;
    private final RestTemplate restTemplate;

    public RetrieveToDos(TodoService todoService, RestTemplate restTemplate) {
        this.todoService = todoService;
        this.restTemplate = restTemplate;
    }

    @Override
    public void run(String... args) throws Exception {
        ResponseEntity<Set<ToDo>> responseEntity = restTemplate.exchange(
                todosUrl,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<Set<ToDo>>() {}
        );

        Set<ToDo> toDos = responseEntity.getBody();
        todoService.saveAllTodos(toDos);
        assert toDos != null;
        toDos.forEach(toDo -> logger.info(toDo.toString()));
    }
}
