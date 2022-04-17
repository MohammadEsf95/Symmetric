package com.technotree.codeassessment;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.technotree.codeassessment.application.socialmedia.todo.TodoService;
import com.technotree.codeassessment.presentation.controller.ToDoController;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(MockitoJUnitRunner.class)
public class ToDoControllerTest {

    private MockMvc mockMvc;

    @Mock
    private TodoService todoService;

    @InjectMocks
    private ToDoController toDoController;

    @Before
    public void initializeData() {
        MockitoAnnotations.openMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(toDoController).build();
    }

    @Test
    public void findAll_success() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/todos")
                        .queryParam("userId", "1")
                        .queryParam("completed", "true")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}
