package com.technotree.codeassessment.presentation.controller;

import com.technotree.codeassessment.application.socialmedia.todo.TodoService;
import com.technotree.codeassessment.application.socialmedia.todo.specification.ToDoCriteria;
import com.technotree.codeassessment.presentation.responseentity.ResponseEntityUtil;
import com.technotree.codeassessment.presentation.responseentity.response.SuccessfulRequestResponseEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/todos")
public class ToDoController {

    private final TodoService todoService;

    public ToDoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public ResponseEntity<Object> findAll(
            @RequestParam(required = false) Integer userId,
            @RequestParam(required = false) Boolean completed
    ) {
        return ResponseEntityUtil.generateSuccessfulRequestResponseEntity(
                new SuccessfulRequestResponseEntity<>(
                        todoService.findAll(
                                new ToDoCriteria(userId, completed)
                        )
                )
        );
    }
}
