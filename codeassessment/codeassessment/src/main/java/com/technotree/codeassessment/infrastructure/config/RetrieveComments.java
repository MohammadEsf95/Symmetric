package com.technotree.codeassessment.infrastructure.config;

import com.technotree.codeassessment.application.socialmedia.comment.CommentService;
import com.technotree.codeassessment.application.socialmedia.comment.dto.CommentDTO;
import com.technotree.codeassessment.domain.socialmedia.comment.Comment;
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
@Order(2)
public class RetrieveComments implements CommandLineRunner {

    @Value("${comments.path}")
    private String commentsUrl;
    private final CommentService commentService;
    private final RestTemplate restTemplate;

    public RetrieveComments(CommentService commentService, RestTemplate restTemplate) {
        this.commentService = commentService;
        this.restTemplate = restTemplate;
    }

    @Override
    public void run(String... args) throws Exception {
        ResponseEntity<Set<CommentDTO>> responseEntity = restTemplate.exchange(
                commentsUrl,
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<Set<CommentDTO>>() {}
        );

        Set<CommentDTO> comments = responseEntity.getBody();
        commentService.saveAllComments(comments);
    }
}
