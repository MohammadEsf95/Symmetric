package com.technotree.codeassessment;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.technotree.codeassessment.application.socialmedia.comment.CommentService;
import com.technotree.codeassessment.application.socialmedia.comment.dto.CreateCommentDTO;
import com.technotree.codeassessment.application.socialmedia.comment.dto.UpdateCommentDTO;
import com.technotree.codeassessment.presentation.controller.CommentController;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.hamcrest.Matchers.notNullValue;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(MockitoJUnitRunner.class)
public class CommentControllerTest {

    private MockMvc mockMvc;

    @Mock
    private CommentService commentService;

    @InjectMocks
    private CommentController commentController;

    ObjectMapper mapper = new ObjectMapper();
    ObjectWriter objectWriter = mapper.writer();

    @Before
    public void initializeData() {
        MockitoAnnotations.openMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(commentController).build();
    }

    @Test
    public void findAll_success() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/comments")
                        .queryParam("page", "1")
                        .queryParam("pageSize", "10")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void findByPostId_success() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/comments")
                        .queryParam("postId","1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void create_success() throws Exception {
        CreateCommentDTO createCommentDTO = new CreateCommentDTO(
                1,
                "name",
                "email",
                "body"
        );

        String content = objectWriter.writeValueAsString(createCommentDTO);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/comments")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);

        mockMvc.perform(mockRequest)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", notNullValue()));
    }

    @Test
    public void update_success() throws Exception {

        UpdateCommentDTO updateCommentDTO = new UpdateCommentDTO(1, "changedTitle", "email", "body");

        String content = objectWriter.writeValueAsString(updateCommentDTO);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.patch("/comments")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);

        mockMvc.perform(mockRequest)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", notNullValue()));
    }

    @Test
    public void deleteSuccess() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/comments/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}
