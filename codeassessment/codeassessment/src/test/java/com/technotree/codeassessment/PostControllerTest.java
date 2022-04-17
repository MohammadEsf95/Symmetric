package com.technotree.codeassessment;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.technotree.codeassessment.application.socialmedia.post.PostService;
import com.technotree.codeassessment.application.socialmedia.post.dto.CreatePostDTO;
import com.technotree.codeassessment.application.socialmedia.post.dto.UpdatePostDTO;
import com.technotree.codeassessment.domain.socialmedia.post.PostJpaRepository;
import com.technotree.codeassessment.presentation.controller.PostController;
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
public class PostControllerTest {

    private MockMvc mockMvc;

    @Mock
    private PostService postService;

    @Mock
    private PostJpaRepository postJpaRepository;

    @InjectMocks
    private PostController postController;

    ObjectMapper mapper = new ObjectMapper();
    ObjectWriter objectWriter = mapper.writer();

    @Before
    public void initializeData() {
        MockitoAnnotations.openMocks(this);
        this.mockMvc = MockMvcBuilders.standaloneSetup(postController).build();
    }

    @Test
    public void findAll_success() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/posts")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void findById_success() throws Exception {

        mockMvc.perform(MockMvcRequestBuilders
                        .get("/posts/1")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void create_success() throws Exception {
        CreatePostDTO createPostDTO = new CreatePostDTO(
                "title",
                "body",
                1
        );

        String content = objectWriter.writeValueAsString(createPostDTO);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.post("/posts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);

        mockMvc.perform(mockRequest)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", notNullValue()));
    }

    @Test
    public void update_success() throws Exception {

        UpdatePostDTO updatePostDTO = new UpdatePostDTO("changedTitle","body",1, 1);

        String content = objectWriter.writeValueAsString(updatePostDTO);

        MockHttpServletRequestBuilder mockRequest = MockMvcRequestBuilders.patch("/posts")
                .contentType(MediaType.APPLICATION_JSON)
                .content(content);

        mockMvc.perform(mockRequest)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", notNullValue()));
    }

    @Test
    public void deleteSuccess() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders
                .delete("/posts/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}
